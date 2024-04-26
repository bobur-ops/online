import CustomModal from "../ui/CusModal";
import styles from "./CreatePreEntry.module.css";
import clsx from "clsx";
import CusPaper from "../ui/CusPaper";
import MobileNav from "../ui/MobileNav";
import Form from "./Form";
import { useBoolean } from "usehooks-ts";
import DelayCalendar from "@/app/requests/components/DelayCalendar";
import { Button } from "antd";
import FancyButton from "../ui/FancyButton";

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
  const isCalendarView = useBoolean(true);

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
        {isCalendarView.value ? (
          <CusPaper>
            <div className="p-3">
              <DelayCalendar />
              <div className="mt-5 flex justify-center ">
                <FancyButton onClick={() => isCalendarView.setFalse()}>
                  Дальше
                </FancyButton>
              </div>
            </div>
          </CusPaper>
        ) : (
          <CusPaper>
            <Form mobile={mobile} onDone={onClose} />
          </CusPaper>
        )}
      </div>
    </CustomModal>
  );
}
