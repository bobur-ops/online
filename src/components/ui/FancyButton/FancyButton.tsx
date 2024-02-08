import { CSSProperties, ComponentPropsWithoutRef } from "react";
import styles from "./FancyButton.module.css";
import clsx from "clsx";
import { SpinLoading } from "antd-mobile";

type FancyButtonProps = Omit<ComponentPropsWithoutRef<"button">, "style"> & {
  loading?: boolean;
  style?: CSSProperties & { "--color": string };
};

export default function FancyButton({ loading, ...props }: FancyButtonProps) {
  return (
    <button
      {...props}
      tabIndex={loading ? -1 : 0}
      className={clsx(
        styles["btn"],
        props.className,
        loading && styles["loading"],
        "focusable"
      )}
    >
      {loading && <SpinLoading className={styles["spin"]} />}
      <span className={styles["text"]}>{props.children}</span>
    </button>
  );
}
