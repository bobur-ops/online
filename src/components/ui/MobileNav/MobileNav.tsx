import { ComponentPropsWithoutRef } from "react";
import styles from './MobileNav.module.css'
import clsx from "clsx";
import { Popover } from "antd-mobile";
import { BiMenu, BiX } from "react-icons/bi";

type MobileNavProps = ComponentPropsWithoutRef<'div'> & {
  pages: Array<{ key: string, text: string }>
  text: string
  onPageChange: (key: string) => void
  onCloseButtonClick: () => void
}

export default function MobileNav({ pages, text, onPageChange, onCloseButtonClick: onClose, ...divProps }: MobileNavProps) {
  return (
    <div {...divProps} className={clsx(divProps.className, styles['root'])}>
      <div className={styles['wrapper']}>
        <Popover.Menu
          actions={pages}
          placement='bottom-start'
          onAction={node => onPageChange(node.key  as string)}
          trigger='click'
        >
          <BiMenu />
        </Popover.Menu>
        <span>{text}</span>
        <button onClick={onClose} className={styles['close-button']}>
          <BiX />
        </button>
      </div>
    </div>
  )
}
