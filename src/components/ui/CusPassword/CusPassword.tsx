import { forwardRef, useCallback, useRef, useState } from "react";
import CusInput from "../CusInput";
import { BiHide, BiShow } from "react-icons/bi";
import styles from "./CusPassword.module.css";

type CusPasswordProps = Omit<Parameters<typeof CusInput>[0], "endAdorment">;

const CusPassword = forwardRef<HTMLInputElement, CusPasswordProps>(
  (props, ref) => {
    const [show, setShow] = useState(false);
    const innerRef = useRef<null | HTMLInputElement>(null);

    // fill ref with instance and save innerRef
    const refWrapper = useCallback((instance: HTMLInputElement) => {
      if (ref) {
        if (ref instanceof Function) {
          ref(instance);
        } else {
          ref.current = instance;
        }
      }
      innerRef.current = instance;
    }, [ref]);

    const preventFocus = useCallback(
      (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault();
      },
      []
    );

    const handleToggleShow = useCallback(() => {
      if (innerRef.current) {
        const savedCursorPosition = innerRef.current.selectionStart;
        setTimeout(() => {
          innerRef.current?.setSelectionRange(savedCursorPosition, savedCursorPosition);
        })
      }
      setShow((prev) => !prev);
    }, [setShow]);

    return (
      <CusInput
        {...props}
        ref={refWrapper}
        props={{
          ...props.props,
          input: {
            ...props.props?.input,
            type: show ? "text" : "password",
          },
        }}
        endAdorment={
          show ? (
            <BiShow
              className={styles["show-button"]}
              onMouseDown={preventFocus}
              onClick={handleToggleShow}
            />
          ) : (
            <BiHide
              className={styles["show-button"]}
              onMouseDown={preventFocus}
              onClick={handleToggleShow}
            />
          )
        }
      />
    );
  }
);

CusPassword.displayName = "CusPassword";

export default CusPassword;
