import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from './LinkButton.module.css';

const LinkButton = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>((props, ref) => {
  return (
    <button {...props} ref={ref} className={clsx(styles['root'], props.className)} />
  )
})

LinkButton.displayName = "LinkButton"

export default LinkButton;
