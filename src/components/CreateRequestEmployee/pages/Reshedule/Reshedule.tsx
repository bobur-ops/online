import { useState } from "react";
import FormAbleToMove from "./FormAbleToMove";
import FormUnableToMove from "./FormUnableToMove";
import { Space, Switch } from "antd-mobile";
import Scrollbars from "react-custom-scrollbars-2";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Checkbox, DatePicker, Input } from "antd";
import { Checkbox as MobileCheckbox } from "antd-mobile";
import SpecificTimePicker from "./FormUnableToMove/fragments/SpecificTimePicker";
import TimePicker from "./FormUnableToMove/fragments/TimerPicker";
import FancyButton from "@/components/ui/FancyButton";

type ResheduleProps = {
  mobile?: boolean;
  onDone?: () => void;
};

export default function Reshedule({ mobile, onDone }: ResheduleProps) {
  const [ableToMove, setAbleToMove] = useState(true);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <Space direction="vertical" block>
        <div className="text-lg text-[#EC790F] text-center mb-[22px]">
          Выберите один из филиалов, если а/м может передвигаться своим ходом и
          повреждения незначительны{" "}
        </div>
        <div className="h-[180px] mb-5">
          <Scrollbars className="h-[180px]">
            <Table>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Название</Th>
                  <Th>Адрес</Th>
                  <Th>Метро</Th>
                  <Th>Телефон</Th>
                  <Th>Эл.почта</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td align="center">
                    <Checkbox />
                  </Td>
                  <Td>Москва (СИТИ)</Td>
                  <Td>
                    г.Москва, ул. Антонова-Овсеенко, д.15, стр.1 (СТО “Автоцентр
                    Сити”)
                  </Td>
                  <Td>м.1905г</Td>
                  <Td>+7(495)783-68-80</Td>
                  <Td>info@apex-group.ru</Td>
                </Tr>
                <Tr>
                  <Td align="center">
                    <Checkbox />
                  </Td>
                  <Td>Москва (Центральный офис)</Td>
                  <Td>г.Москва, ул. Дыбенко д.38 к.1</Td>
                  <Td>м.Речной вокзал</Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td align="center">
                    <Checkbox />
                  </Td>
                  <Td>Москва (Звездный бульвар СТОА “Вито Сервис”)</Td>
                  <Td>г.Москва, Звездный б-р д.За стр.1</Td>
                  <Td>м.ВДНХ</Td>
                  <Td>+7(495)783-68-80 Ирина</Td>
                  <Td>svao@apex-group.ru</Td>
                </Tr>
              </Tbody>
            </Table>
          </Scrollbars>
        </div>
        <div className="text-lg text-[#EC790F] text-center mb-[22px]">
          В случае отсуствия возможности подъехать в филиал, заполните заявку на
          выезд эксперта
        </div>
        <div className="w-[412px] mx-auto space-y-[15px]">
          <div className="flex justify-between items-center">
            <div>Адрес:</div>
            <Input
              className="w-[300px]"
              placeholder="г.Москва, Манежная пл., 1, строение 2"
            />
          </div>
          <div className="flex justify-between items-center">
            <div>Дата:</div>
            <DatePicker className="w-[300px]" />
          </div>
          <div className="flex justify-between ">
            <div>Дата/время:</div>
            <div className="w-[300px] space-y-[15px]">
              <div className="flex items-center gap-3">
                <MobileCheckbox
                  checked={selectedTime === "morning"}
                  onChange={(value) => {
                    if (value) {
                      setSelectedTime("morning");
                    }
                  }}
                />
                <label>Утро</label>
              </div>
              <div className="flex items-center gap-3">
                <MobileCheckbox
                  checked={selectedTime === "afternoon"}
                  onChange={(value) => {
                    if (value) {
                      setSelectedTime("afternoon");
                    }
                  }}
                />
                <label>День</label>
              </div>
              <div className="flex items-center gap-3">
                <MobileCheckbox
                  checked={selectedTime === "evening"}
                  onChange={(value) => {
                    if (value) {
                      setSelectedTime("evening");
                    }
                  }}
                />
                <label>Вечер</label>
              </div>
              <div className="flex items-center gap-3">
                <MobileCheckbox
                  checked={selectedTime === "custom"}
                  onChange={(value) => {
                    if (value) {
                      setSelectedTime("custom");
                    }
                  }}
                />
                <label>
                  Свое время{" "}
                  <TimePicker value={time} onChange={setTime} mobile={mobile} />
                </label>
              </div>
            </div>
          </div>
        </div>
        <FancyButton className="mx-auto mt-4">Перенести заявку</FancyButton>
        {/* <div className="flex items-center gap-2">
          <Switch checked={ableToMove} onChange={setAbleToMove} />
          <label className="leading-none">
            а/м может передвигаться своим ходом
          </label>
        </div>
        {ableToMove && <FormAbleToMove mobile={mobile} onDone={onDone} />}
        {!ableToMove && <FormUnableToMove mobile={mobile} onDone={onDone} />} */}
      </Space>
    </div>
  );
}
