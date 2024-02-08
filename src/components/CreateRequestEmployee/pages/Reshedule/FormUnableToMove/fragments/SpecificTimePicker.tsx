import { Radio, Space } from "antd-mobile";
import { useMemo, useReducer } from "react";
import TimePicker from "./TimerPicker";
import { useMediaQuery } from "usehooks-ts";

type SpecificTimePickerProps = {
  value: 'УТРО' | 'ДЕНЬ' | 'ВЕЧЕР' | Date | null
  onChange: (value: SpecificTimePickerProps['value']) => void
}

export default function SpecificTimePicker({ value: extValue, onChange }: SpecificTimePickerProps) {
  const mobile = useMediaQuery("(max-width: 700px)");
  const [time, setTime] = useReducer((state: Date, action: Date) => {
    onChange(action);
    return action;
  }, new Date())
  const value = useMemo(() => (extValue instanceof Date) ? 'CUSTOM' : extValue, [extValue])
  const setValue = (value: Exclude<SpecificTimePickerProps['value'], Date> | 'CUSTOM') => onChange(value === 'CUSTOM' ? time : value)
  return (
    <Radio.Group value={value} onChange={(value) => setValue(value as any)}>
      <Space direction="vertical" block>
        <Radio value="УТРО">Утро</Radio>
        <Radio value="ДЕНЬ">День</Radio>
        <Radio value="ВЕЧЕР">Вечер</Radio>
        <Radio value="CUSTOM">Свое время <TimePicker value={time} onChange={setTime} mobile={mobile} /></Radio>
      </Space>
    </Radio.Group>
  )
}
