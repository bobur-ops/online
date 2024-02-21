import { Button, DatePicker, Input, Select } from "antd";
import React from "react";
import DelayCalendar from "../DelayCalendar";

const DelayView = () => {
  return (
    <div>
      <div>
        <div className="text-center font-semibold text-base">
          Перенос осмотра
        </div>
        <div className="text-center font-semibold">03.08.2023 12:00</div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <Select
          variant="borderless"
          value={"Екатеринбург (Викулова)"}
          className="mx-auto"
          size="large"
        />
      </div>
      <div className="mb-10">
        <DelayCalendar />
      </div>
      <div className="mb-2">
        <div className="text-xs mb-2">Причина переноса *</div>
        <Input />
      </div>
      <div className="mb-5">
        <div className="text-xs mb-2">Новая дата</div>
        <DatePicker size="large" placeholder="" />
      </div>
      <div className="flex justify-center">
        <Button className="min-w-[193px]" danger size="large">
          Перенос
        </Button>
      </div>
    </div>
  );
};

export default DelayView;
