import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { BiX } from "react-icons/bi";
import styles from './CloseButton.module.css';

type CloseButtonProps = ComponentPropsWithoutRef<'button'>

export default function CloseButton(props: CloseButtonProps) {
  return (
    <button {...props} className={clsx(props.className, styles['root'])}>
      <BiX />
    </button>
  )
}
