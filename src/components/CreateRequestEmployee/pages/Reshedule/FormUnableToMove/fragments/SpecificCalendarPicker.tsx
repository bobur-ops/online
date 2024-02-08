import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import styles from "./SpecificCalendarPicker.module.css";
import { DatePicker, DatePickerView, Modal } from "antd-mobile";
import { format } from "date-fns";
import { BiCalendar } from "react-icons/bi";
import { ru } from 'date-fns/locale'
import { useEffectOnce } from "usehooks-ts";
import clsx from "clsx";

type SpecificCalendarPickerProps = {
  value: Date | null;
  onChange: (value: Date | null) => void;
  mobile?: boolean;
};

export default function SpecificCalendarPicker({
  value,
  onChange,
  mobile,
}: SpecificCalendarPickerProps) {
  const [open, setOpen] = useState(false);

  const blurByTab = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      setOpen(false);
    }
  }, []);

  return (
    <>
      <div tabIndex={0} onFocus={() => setOpen(true)} onKeyDown={blurByTab} className={clsx(styles["root"], "focusable")} onClick={() => setOpen(true)}>
        <span className={styles["value"]}>
          {value === null ? "Не указано" : format(value, "dd.MM.yyyy")}
        </span>
        <BiCalendar />
      </div>
      {mobile && (
        <DatePicker
          min={new Date("01-01-2020")}
          max={new Date("01-01-2100")}
          visible={open}
          onClose={() => setOpen(false)}
          value={value}
          className={styles['calendar-mobile']}
          renderLabel={(type, data) => {
            if (type === "month") {
              const date = new Date().setMonth(data - 1);
              return format(date, "MMMM", { locale: ru });
            }
            return data;
          }}
          onConfirm={onChange}
        />
      )}
      {!mobile && (
        <Modal
          visible={open}
          bodyStyle={{
            width: "400px",
          }}
          onClose={() => setOpen(false)}
          closeOnMaskClick
          closeOnAction
          onAction={(action, index) => {
            if (action.key === 'select') {
              onChange(value ?? new Date());
            }
          }}
          actions={[{ key: "select", text: "Выбрать" }]}
          content={
            <DatePickerView
              min={new Date("01-01-2020")}
              max={new Date("01-01-2100")}
              value={value ?? new Date()}
              className={styles['calendar-desktop']}
              renderLabel={(type, data) => {
                if (type === "month") {
                  const date = new Date().setMonth(data - 1);
                  return format(date, "MMMM", { locale: ru });
                }
                return data;
              }}
              onChange={onChange}
            />
          }
        />
      )}
    </>
  );
}
