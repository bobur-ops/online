import React from "react";
import {
  Button,
  DatePicker,
  Dropdown,
  Input,
  Modal,
  ModalProps,
  Select,
} from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import type { MenuProps } from "antd";
import { Checkbox } from "antd-mobile";

const MainMain = () => {
  return (
    <div>
      <div className="space-y-2">
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Раздел:</div>
          <div className="">
            <Select
              options={[{ label: "Автоэкспертиза", value: "Автоэкспертиза" }]}
              value={"Автоэкспертиза"}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Подраздел:</div>
          <div className="">
            <Select
              options={[{ label: "Трасология", value: "Трасология" }]}
              value={"Трасология"}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Юридическое лицо:</div>
          <div className="">
            <Select
              options={[
                { label: "АПЭКС ГРУП Москва", value: "АПЭКС ГРУП Москва" },
              ]}
              value={"АПЭКС ГРУП Москва"}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Заказчик:</div>
          <div className="">
            <Select
              options={[
                {
                  label: "17-й Автобусный парк",
                  value: "17-й Автобусный парк",
                },
              ]}
              value={"17-й Автобусный парк"}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Тип заявки:</div>
          <div className="">
            <Select
              options={[
                {
                  label: "Заявка №1",
                  value: "Заявка №1",
                },
              ]}
              value={"Заявка №1"}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Тип повреждения:</div>
          <div className="">
            <Select
              options={[
                {
                  label: "Повреждение №1",
                  value: "Повреждение №1",
                },
              ]}
              value={"Повреждение №1"}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Этап:</div>
          <div className="font-mediumw-[154px] text-xs">Прием заявки</div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Статус:</div>
          <div className="font-mediumw-[154px] text-xs">В работе</div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Адрес:</div>
          <div className="font-mediumw-[154px] text-xs">
            г.Москва, ул.Р*, д.41
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Плановое время осмотра:</div>
          <div className="font-mediumw-[154px] text-xs">31.12.2023 14:00</div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Фактическое время осмотра:</div>
          <div className="font-mediumw-[154px] text-xs">
            <DatePicker placeholder="" />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center">
            <div className="w-[154px] flex-shrink-0 text-xs">Расстояние:</div>
            <Input className="w-[96px] rounded-[10px]" />
          </div>
          <div className="flex gap-[22px] items-center">
            <div className="whitespace-nowrap w-[155px]w-[154px] text-xs">
              Фактическое расстояние:
            </div>
            <Input className="w-[96px] rounded-[10px]" />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Ложный выезд:</div>
          <div className="">
            <Checkbox />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs flex items-center">
            <p>Мошенник:</p>
            <Checkbox />
          </div>
          <Select
            options={[
              { label: "Есть пострадавшие", value: "Есть пострадавшие" },
            ]}
            value={"Есть пострадавшие"}
          />
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Доп.параметры:</div>
          <div className="">
            <Select
              options={[
                {
                  label: "Эвакуатор",
                  value: "Эвакуатор",
                },
              ]}
              value={"Эвакуатор"}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Быстрая выплата:</div>
          <div className="">
            <Checkbox />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-[154px] text-xs">Ремон на СТО:</div>
          <div className="">
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMain;
