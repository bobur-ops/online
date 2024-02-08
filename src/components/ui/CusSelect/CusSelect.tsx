import {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./CusSelect.module.css";
import { Popup, SpinLoading } from "antd-mobile";
import CusSearchBar from "../CusSearchBar";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  useFloating,
  offset,
  flip,
  autoUpdate,
  size,
} from "@floating-ui/react-dom";
import clsx from "clsx";
import { useDebounce } from "usehooks-ts";

export type CusSelectProps = {
  cssVariables?: Partial<{}>;
  classes?: {
    root?: string;
  };
  styles?: {
    root?: CSSProperties;
  };
  fullWidth?: boolean;
  loading?: boolean;
  mobile?: boolean;
  placeholder?: string;
  value?: null | string;
  options: Array<{ label: string; value: string }>;
  onChange?: (value: null | string) => void;
  size?: "sm";
};

const CusSelect = forwardRef<HTMLInputElement, CusSelectProps>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [innerValue, setInnerValue] = useState<null | string>(null);
  const value = props.value !== undefined ? props.value : innerValue;
  const [selected, setSelected] = useState(0);
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const searchDebounced = useDebounce(search, 400);
  const rootRef = useRef<null | HTMLDivElement>(null);
  const mobile = props.mobile ?? false;
  const loading = props.loading ?? false;

  const { refs, floatingStyles } = useFloating({
    open: open,
    strategy: "absolute",
    placement: "bottom",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(15),
      flip(),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            "--available-height": `${availableHeight}px`,
            width: `max(200px, ${rects.reference.width}px)`,
          });
        },
      }),
    ],
  });

  const setValueSmart = useCallback(
    (value: null | string) => {
      if (props.onChange) {
        props.onChange(value);
      }
      setInnerValue(value);
    },
    [props, setInnerValue]
  );

  const onChangeWrapper = useCallback(
    (value: null | string) => {
      setValueSmart(value);
      setOpen(false); // close when changed
      setSearch(""); // clear search
      if (mobile) {
        setFocused(false);
      }
    },
    [setValueSmart, mobile]
  );

  const onBlurWrapper = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      setFocused(false);
    },
    [setFocused]
  );

  const onFocusWrapper = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      setFocused(true);
    },
    [setFocused]
  );

  const filteredOptions = useMemo(() => {
    return props.options
      .filter((item) =>
        item.label.toUpperCase().includes(searchDebounced.toUpperCase())
      )
      .sort((a, b) =>
        a.label.toUpperCase().localeCompare(b.label.toUpperCase())
      );
  }, [props.options, searchDebounced]);

  const onInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (open) {
        switch (event.code) {
          case "ArrowDown":
            event.preventDefault();
            setSelected((prev) => (prev + 1) % filteredOptions.length);
            break;
          case "ArrowUp":
            event.preventDefault();
            setSelected((prev) =>
              prev - 1 < 0 ? filteredOptions.length - 1 : prev - 1
            );
            break;
          case "Enter":
            event.preventDefault();
            if (
              filteredOptions.length !== 0 &&
              selected < filteredOptions.length
            ) {
              onChangeWrapper(
                value === filteredOptions[selected].value
                  ? null
                  : filteredOptions[selected].value
              );
            }
            break;
        }
      } else {
        if (event.code === "Enter") {
          setOpen(true); // in case component is focused but closed
        }
      }
    },
    [filteredOptions, onChangeWrapper, selected, open, value]
  );

  // control focus by click
  useEffect(() => {
    const fn = (event: MouseEvent) => {
      if (rootRef.current && event.target instanceof Node) {
        // if target is inside root or not inside document then stay focused
        if (
          rootRef.current.contains(event.target) ||
          !document.contains(event.target)
        ) {
          setFocused(true);
        } else {
          if (!mobile) {
            setFocused(false);
          }
        }
      }
    };
    document.addEventListener("mousedown", fn);
    return () => {
      document.removeEventListener("mousedown", fn);
    };
  }, [mobile, setFocused]);

  // drop selected to 0
  useEffect(() => {
    setSelected(0);
  }, [filteredOptions]);

  // scroll selected into view
  useEffect(() => {
    document
      .querySelector(`.${styles["popup-options"]} .selected`)
      ?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  // sync open with focused in one way
  useEffect(() => {
    setOpen(focused);
  }, [focused]);

  // set open to true when search or focused changed
  useEffect(() => {
    if (focused) {
      setOpen(true);
    }
  }, [search, focused]);

  // scroll to active element when open and set it to selected
  useEffect(() => {
    if (value) {
      setTimeout(() => {
        document
          .querySelector(`.${styles["popup-options"]} .active`)
          ?.scrollIntoView({ block: "nearest" });
      });
      const foundIndex = filteredOptions.findIndex(
        (item) => item.value === value
      );
      if (foundIndex !== -1) {
        setSelected(foundIndex);
      }
    } else {
      setSelected(0);
    }
  }, [open]);

  // drop value if not found in options
  useEffect(() => {
    const found = props.options.find((item) => item.value === value);
    if (!found) {
      setValueSmart(null);
    }
  }, [value, props.options]);

  return (
    <div
      ref={rootRef}
      className={clsx(
        styles["css-vars"],
        styles["root"],
        "focusable",
        focused && "focused",
        mobile && "mobile",
        props.classes?.root,
        props.size === "sm" && "!h-[30px]"
      )}
      style={{
        ...props.styles?.root,
        width: props.fullWidth ?? false ? "100%" : props.styles?.root?.width,
      }}
    >
      <div ref={refs.setReference} className={styles["select"]}>
        <div className={clsx(styles["value"], search.length !== 0 && "hidden")}>
          <span className={clsx(value === null && "is-placeholder")}>
            {value === null && (props.placeholder ?? "Ничего не выбрано")}
            {value !== null &&
              (props.options.find((item) => item.value === value)?.label ??
                "Ошибка")}
          </span>
        </div>
        {mobile && (
          <div tabIndex={0} onFocus={onFocusWrapper} onBlur={onBlurWrapper} />
        )}
        {!mobile && (
          <CusSearchBar
            clearOnBlur
            classes={{
              root: styles["search-root"],
            }}
            props={{
              root: {
                onClick: () => setOpen(true), // in case component is focused but closed
              },
              input: {
                onKeyDown: onInputKeyDown,
              },
            }}
            value={search}
            onChange={setSearch}
            onFocus={onFocusWrapper}
            onBlur={onBlurWrapper}
          />
        )}
        <input
          style={{ display: "none" }}
          ref={ref}
          onChange={(event) => onChangeWrapper(event.currentTarget.value)}
          type="text"
          value={value ?? ""}
        />
      </div>
      {!mobile && open && (
        <div
          onMouseDown={(e) => e.preventDefault()} // by doing that I keep focus but cannot select text anymore
          ref={refs.setFloating}
          style={floatingStyles}
          className={styles["popup"]}
        >
          {loading && (
            <div className={styles["empty-options"]}>
              <SpinLoading />
            </div>
          )}
          {!loading && (
            <>
              {filteredOptions.length === 0 && (
                <div className={styles["empty-options"]}>
                  <div>Ничего не найдено</div>
                </div>
              )}
              {filteredOptions.length !== 0 && (
                <Scrollbars
                  autoHide
                  autoHeight
                  autoHeightMax={(() => {
                    const style = refs.floating.current?.style as any;
                    const availableHeight = style?.[
                      "--available-height"
                    ]?.replace(/[^\d]+$/, "");
                    if (!availableHeight) {
                      return 400;
                    }
                    return Math.min(
                      Number.parseFloat(availableHeight) - 20,
                      400
                    );
                  })()}
                >
                  <div className={styles["popup-options"]}>
                    {filteredOptions.map((item, index) => (
                      <div
                        className={clsx(
                          index === selected && "selected",
                          value === item.value && "active"
                        )}
                        key={item.value}
                        onClick={() =>
                          onChangeWrapper(
                            value === item.value ? null : item.value
                          )
                        }
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </Scrollbars>
              )}
            </>
          )}
        </div>
      )}
      {mobile && (
        <Popup
          position="bottom"
          destroyOnClose
          visible={open}
          onClose={() => setFocused(false)}
          closeOnSwipe
          bodyClassName={clsx(styles["css-vars"], styles["drawer"])}
        >
          <div className={styles["drawer-button-group"]}>
            <button onClick={() => setFocused(false)}>Назад</button>
          </div>
          {loading && (
            <div className={styles["empty-options"]}>
              <SpinLoading />
            </div>
          )}
          {!loading && (
            <>
              <CusSearchBar
                fullWidth
                autoFocus
                styles={{ root: { flexShrink: 0 } }}
                clearOnBlur
                value={search}
                onChange={setSearch}
              />
              {filteredOptions.length === 0 && (
                <div className={clsx(styles["empty-options"], "mobile")}>
                  <div>Ничего не найдено</div>
                </div>
              )}
              {filteredOptions.length !== 0 && (
                <div className="flex-1 overflow-auto">
                  <div className={styles["popup-options"]}>
                    {filteredOptions.map((item, index) => (
                      <div
                        className={clsx(value === item.value && "active")}
                        key={item.value}
                        onClick={() =>
                          onChangeWrapper(
                            value === item.value ? null : item.value
                          )
                        }
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </Popup>
      )}
    </div>
  );
});

CusSelect.displayName = "CusSelect";

export default CusSelect;
