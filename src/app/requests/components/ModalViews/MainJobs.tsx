import { InputNumber, Select } from "antd";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const MainJobs = () => {
  const [deliveryWithinCity, setDeliveryWithinCity] = useState(0);
  const [deliveryOutsideCity, setDeliveryOutsideCity] = useState(0);
  const [deliveryWithinDisctrict, setDeliveryWithinDisctrict] = useState(0);

  return (
    <div className="max-w-[505px] mx-auto w-full space-y-1">
      <div className="flex items-center gap-1">
        <div className="text-primary font-semibold text-base">
          Выполняемые работы <span className="text-[#F75151]">*</span>
        </div>
        <div className="text-base font-medium">
          Сумма:{" "}
          {deliveryOutsideCity + deliveryWithinDisctrict + deliveryWithinCity}{" "}
          руб.
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IoIosCheckmarkCircle color="#0C77F8" />
        <div className="text-base">Доставка курьеров в пределах города </div>
        <MdEdit color="#0C77F8" />
        <InputNumber
          onChange={(e) => setDeliveryWithinCity(e as number)}
          precision={2}
          value={deliveryWithinCity}
        />
      </div>
      <div className="flex items-center gap-1">
        <IoIosCheckmarkCircle color="#0C77F8" />
        <div className="text-base">Доставка курьеров вне города </div>
        <MdEdit color="#0C77F8" />
        <InputNumber
          onChange={(e) => setDeliveryOutsideCity(e as number)}
          precision={2}
          value={deliveryOutsideCity}
        />
      </div>
      <div className="flex items-center gap-1">
        <IoIosCheckmarkCircle color="#0C77F8" />
        <div className="text-base">Доставка курьеров в пределах области </div>
        <MdEdit color="#0C77F8" />
        <InputNumber
          onChange={(e) => setDeliveryWithinDisctrict(e as number)}
          precision={2}
          value={deliveryWithinDisctrict}
        />
      </div>
      <div className="flex items-center gap-1">
        <div className="text-primary font-semibold text-base">Исполнители</div>
      </div>
      <div className="grid grid-cols-2 items-center gap-y-1.5">
        <div className="font-medium text-base col-span-2 lg:col-span-1">
          Исполнитель 0:
        </div>
        <Select className="w-full col-span-2 lg:col-span-1" />
        <div className="font-medium text-base col-span-2 lg:col-span-1">
          Менеджер:
        </div>
        <Select
          className="w-full col-span-2 lg:col-span-1"
          value={"Литвинова Л.В."}
        />
        <div className="font-medium text-base col-span-2 lg:col-span-1">
          Осмотр:
        </div>
        <Select className="w-full col-span-2 lg:col-span-1" />
        <div className="font-medium text-base col-span-2 lg:col-span-1">
          Расчет:
        </div>
        <Select className="w-full col-span-2 lg:col-span-1" />
        <div className="font-medium text-base col-span-2 lg:col-span-1">
          Расчет 2:
        </div>
        <Select className="w-full col-span-2 lg:col-span-1" />
      </div>
    </div>
  );
};

export default MainJobs;
