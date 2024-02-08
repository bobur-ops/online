import CustomModal from "../ui/CusModal";
import styles from "./CreatePreEntry.module.css";
import clsx from "clsx";
import CusPaper from "../ui/CusPaper";
import MobileNav from "../ui/MobileNav";
import Form from "./Form";

type CreatePreEntryProps = {
  open: boolean;
  onClose: () => void;
  mobile?: boolean;
};

/**
 * Модальное окно создания предварительной записи
 */
export default function CreatePreEntry({
  open,
  onClose,
  mobile,
}: CreatePreEntryProps) {
  return (
    <CustomModal open={open} onClose={onClose}>
      <div className={clsx(styles["root"], mobile && "mobile")}>
        <MobileNav
          className={styles["mobile-nav"]}
          pages={[]}
          text="Главное меню"
          onPageChange={() => {}}
          onCloseButtonClick={onClose}
        />
        <CusPaper>
          <Form mobile={mobile} onDone={onClose} />
        </CusPaper>
      </div>
    </CustomModal>
  );
}
