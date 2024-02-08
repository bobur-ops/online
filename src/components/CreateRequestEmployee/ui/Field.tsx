import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import styles from './Field.module.css';

export default function Field(props: ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={clsx(styles["field"], props.className)} />;
}
