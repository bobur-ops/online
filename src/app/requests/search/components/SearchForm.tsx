"use client";

import { Select, Input, DatePicker } from "antd";
import { Checkbox } from "antd-mobile";

import React from "react";

const SearchForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-2.5 gap-x-5">
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div className="">Раздел:</div>
        <div className="flex items-center gap-5 col-span-2">
          <div className="flex items-center justify-center gap-2.5">
            <Checkbox />
            <p>Автоэкспертиза</p>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Checkbox />
            <p>Оценка</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Действие:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Подраздел:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Сто:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Заказчик:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Дата:</div>

        <div className=" col-span-2 flex items-center gap-2.5">
          <DatePicker placeholder="" className="w-full" />
          <DatePicker placeholder="" className="w-full" />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Тип:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>МП:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Заявка:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Исполнитель О:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Этап:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Перенос:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Гос.№:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Менеджер:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Объект оценки:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Сист.имя:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>№полиса:</div>

        <Input className="col-span-2" />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Осмотр:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Цель оценки:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Сотрудник:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>№убытка:</div>

        <Input className="col-span-2" />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Расчет:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Юр.лицо:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Доп.действие:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>VIN код:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Расчет 2:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Статус счета:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Файлы:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>Владелец:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Регион:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Статус заявки:</div>
        <div className="col-span-2 flex items-center gap-2.5">
          <Select
            options={[{ value: "action1", label: <span>Действие 1</span> }]}
            className=" w-full"
          />
          <Select
            options={[{ value: "action1", label: <span>Действие 1</span> }]}
            className=" w-full"
          />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Комментарий:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Марка:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Филиал:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Способ оплаты:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
      <div></div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Модель:</div>

        <Input className="col-span-2" />
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Модель:</div>

        <div className="col-span-2 flex justify-center items-center gap-2.5">
          <Input />
          <Input />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 items-center">
        <div>Тип заказчика:</div>

        <Select
          options={[{ value: "action1", label: <span>Действие 1</span> }]}
          className="col-span-2 w-full"
        />
      </div>
    </div>
  );
};

export default SearchForm;
