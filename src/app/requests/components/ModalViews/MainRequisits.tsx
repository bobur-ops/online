import { Input } from "antd";
import React from "react";

const MainRequisits = () => {
  return (
    <div className="max-w-[444px] mx-auto space-y-1">
      <div className="text-base font-semibold text-primary">
        Банковские реквизиты
      </div>
      <div className="grid lg:grid-cols-3 gap-y-2 items-center">
        <div className="">БИК: </div>
        <Input className="w-full col-span-2" />
        <div className="">ИНН: </div>
        <Input className="w-full col-span-2" />
        <div className="">Р/С: </div>
        <Input className="w-full col-span-2" />
        <div className="">КПП: </div>
        <Input className="w-full col-span-2" />
        <div className="">К/С: </div>
        <Input className="w-full col-span-2" />
        <div className="">Банк: </div>
        <Input className="w-full col-span-2" />
        <div className="">ИНН получателя: </div>
        <Input className="w-full col-span-2" />
        <div className="">№ карты </div>
        <Input className="w-full col-span-2" />
      </div>
    </div>
  );
};

export default MainRequisits;
