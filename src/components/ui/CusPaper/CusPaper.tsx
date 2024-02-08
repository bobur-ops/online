import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./CusPaper.module.css";

const CusPaper = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={clsx(props.className, styles["root"])}
      />
    );
  }
);

CusPaper.displayName = "CusPaper";

export default CusPaper;
