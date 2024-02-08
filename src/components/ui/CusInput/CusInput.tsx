import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from "react";
import styles from "./CusInput.module.css";
import clsx from "clsx";
import { useEffectOnce } from "usehooks-ts";

type CSSVariables = Partial<{
  "--icon-size": string;
  "--px": string;
}>;

type RootProps = ComponentPropsWithoutRef<"div"> & { style?: CSSVariables };
type InputProps = ComponentPropsWithoutRef<"input">;

/**
 * classes are not capable to override default properties
 * because of css modules injection order
 * classes have precedence over props
 * styles have precedence over props
 *
 * cssVariables are good
 * cssVariables are also accessible throgh props and styles,
 * classes are able to set css variables, so it will always works
 */
type CusInputProps = {
  cssVariables?: CSSVariables;
  classes?: {
    root?: string;
    input?: string;
  };
  styles?: {
    root?: RootProps["style"];
    input?: InputProps["style"];
  };
  props?: {
    root?: RootProps;
    input?: InputProps;
  };
  id?: string;
  fullWidth?: boolean;
  autoFocus?: boolean;
  autoComplete?: ComponentPropsWithoutRef<"input">["autoComplete"];
  startAdorment?: ReactNode;
  endAdorment?: ReactNode;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const CusInput = forwardRef<HTMLInputElement, CusInputProps>((props, ref) => {
  const innerRef = useRef<HTMLInputElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [innerValue, setInnerValue] = useState("");
  const [focused, setFocused] = useState(false);

  const value = props.value ?? innerValue;

  // fill ref with instance and save innerRef
  const refWrapper = useCallback(
    (instance: HTMLInputElement) => {
      if (ref) {
        if (ref instanceof Function) {
          ref(instance);
        } else {
          ref.current = instance;
        }
      }
      innerRef.current = instance;
    },
    [ref]
  );

  // handle "focused"
  const onBlurWrapper = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (props.onBlur) {
        props.onBlur(event);
      }
      setFocused(false);
    },
    [props, setFocused]
  );

  // handle "focused"
  const onFocusWrapper = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (props.onFocus) {
        props.onFocus(event);
      }
      setFocused(true);
    },
    [props, setFocused]
  );

  // manage inner and outer state
  const onChangeWrapper = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(event.target.value);
      }
      setInnerValue(event.target.value);
    },
    [props, setInnerValue]
  );

  // handle "focused" state, detect click outside
  useEffectOnce(() => {
    const fn = (event: Event) => {
      if (rootRef.current && event.target instanceof Node) {
        // if target is inside root or not inside document then stay focused
        if (
          rootRef.current.contains(event.target) ||
          !document.contains(event.target)
        ) {
          if (innerRef.current) {
            innerRef.current.focus();
          }
          setFocused(true);
        } else {
          setFocused(false);
        }
      }
    };
    document.addEventListener("mousedown", fn);
    return () => {
      document.removeEventListener("mousedown", fn);
    };
  });

  return (
    <div
      {...props.props?.root}
      ref={rootRef}
      style={{
        ...props.props?.root?.style,
        ...props.styles?.root,
        ...props.cssVariables,
        width: props.fullWidth
          ? "100%"
          : props.props?.root?.style?.width ?? props.styles?.root?.width,
      }}
      className={clsx(
        styles["root"],
        "focusable",
        focused && "focused",
        props.props?.root?.className,
        props.classes?.root
      )}
    >
      <input
        {...props.props?.input}
        style={{
          ...props.props?.input?.style,
          ...props.styles?.input,
        }}
        id={props.id ?? props.props?.input?.id}
        autoComplete={props.autoComplete ?? props.props?.input?.autoComplete}
        autoFocus={props.autoFocus ?? props.props?.input?.autoFocus}
        className={clsx(
          props.props?.input?.className,
          props.classes?.input,
          props.startAdorment && "have-start-adorment",
          props.endAdorment && "have-end-adorment"
        )}
        placeholder={props.placeholder ?? props.props?.input?.placeholder}
        ref={refWrapper}
        name={props.name}
        value={value}
        onChange={onChangeWrapper}
        onBlur={onBlurWrapper}
        onFocus={onFocusWrapper}
      />
      {props.startAdorment && (
        <div className="icon-wrapper start-adorment">
          <div className="icon">{props.startAdorment}</div>
        </div>
      )}
      {props.endAdorment && (
        <div className="icon-wrapper end-adorment">
          <div className="icon">{props.endAdorment}</div>
        </div>
      )}
    </div>
  );
});

CusInput.displayName = "CusInput";

export default CusInput;
