import { Mask } from "antd-mobile";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./CusModal.module.css";

type CustomModalProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export default function CustomModal({
  open,
  onClose,
  children,
}: CustomModalProps) {
  return createPortal(
    <Mask
      visible={open}
      onMaskClick={onClose}
      disableBodyScroll={false}
      className={styles["root"]}
      destroyOnClose
    >
      {children}
    </Mask>,
    document.body
  );
}
