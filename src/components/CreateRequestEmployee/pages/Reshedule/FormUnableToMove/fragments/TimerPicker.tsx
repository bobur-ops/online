import { format } from "date-fns"
import styles from './TimePicker.module.css';
import { useCallback, useMemo, useState } from "react";
import { Modal, Picker } from "antd-mobile";
import PickerView, { PickerValue } from "antd-mobile/es/components/picker-view";

const hours = Array(24).fill(0).map((_, i) => i)
const minutes = Array(60).fill(0).map((_, i) => i);

const columns = [
  hours.map((item) => ({
    label: item.toString(),
    value: item
  })),
  minutes.map((item) => ({
    label: item.toString(),
    value: item
  }))
]

function dateToColumns(value: Date | null) {
  return value === null ? [0, 0] : [value.getHours(), value.getMinutes()]
}

function columnsToDate(value: [number, number]) {
  const date = new Date();
  date.setHours(value[0])
  date.setMinutes(value[1]);
  return date;
}

type TimePickerProps = {
  value: Date
  onChange: (value: TimePickerProps['value']) => void
  mobile?: boolean
}

export default function TimePicker({ value, onChange, mobile }: TimePickerProps) {
  const [open, setOpen] = useState(false);

  const columnsValue = useMemo(() => dateToColumns(value), [value])
  const setColumnsValue = useCallback((value: PickerValue[]) => {
    onChange(columnsToDate(value as [number, number]));
  }, [])

  return (
    <>
      <span className={styles['root']} onClick={() => setOpen(true)}>
        <span>
          {value === null && "--"}
          {value !== null && format(value, "HH")}
        </span>
        <span>:</span>
        <span>
          {value === null && "--"}
          {value !== null && format(value, "mm")}
        </span>
      </span>
      {mobile && (
        <Picker
          visible={open}
          onClose={() => setOpen(false)}
          columns={columns}
          value={columnsValue}
          onConfirm={(value) => setColumnsValue(value)}
        />
      )}
      {!mobile && (
        <Modal
          visible={open}
          onClose={() => setOpen(false)}
          closeOnMaskClick
          closeOnAction
          actions={[{ key: "select", text: "Выбрать"}]}
          content={
            <PickerView
              columns={columns}
              value={columnsValue}
              onChange={setColumnsValue}
            />
          }
        />
      )}
    </>
  )
}
