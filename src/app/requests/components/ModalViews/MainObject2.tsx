import { Input, Select } from "antd";
import { Checkbox } from "antd-mobile";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const MainObject2 = () => {
  return (
    <div className="max-w-[454px] mx-auto">
      <div className="text-base font-semibold text-primary mb-1">
        Данные второго участника
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-y-1">
        <div className="">
          Владелец:
          <span className="flex items-center">
            (Юр. лицо)
            <Checkbox className="w-5 h-5" />
          </span>
        </div>
        <div className="col-span-2">
          <Input className=" w-full" />
        </div>
        <div className="">Адрес владельца:</div>
        <div className="col-span-2">
          <Input className=" w-full" />
        </div>
        <div className="">Телефон виновника:</div>
        <div className="col-span-2">
          <Input className=" w-full" />
        </div>
        <div className="">№ полиса участника:</div>
        <div className="col-span-2">
          <Input className=" w-full" />
        </div>
        <div className="">Страховая компания:</div>
        <div className="col-span-2">
          <Select className="w-full" />
        </div>
        <div className="">Марка а/м:</div>
        <div className="col-span-2">
          <Select className="w-full" />
        </div>
        <div className="">Модель а/м:</div>
        <div className="col-span-2">
          <Select className="w-full" />
        </div>
        <div className="">Гос. №:</div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
        <div className="">VIN Код:</div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
        <div className="">Год выпуска:</div>
        <div className="col-span-2">
          <Select className="w-full" />
        </div>
        <div className="">Цвет: </div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
        <div className="">Пробег, км: </div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
        <div className="">№ двигателя: </div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
        <div className="">СТС: </div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
        <div className="">ПТС: </div>
        <div className="col-span-2">
          <Input className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default MainObject2;
