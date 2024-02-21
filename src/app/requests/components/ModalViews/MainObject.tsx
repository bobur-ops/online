import { DatePicker, Input, InputNumber, Radio, Select } from "antd";
import { Checkbox } from "antd-mobile";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const MainObject = () => {
  return (
    <div>
      <div className="text-primary text-base font-semibold mb-1.5"></div>
      <div className="grid lg:grid-cols-2 gap-y-2.5 gap-x-10">
        <div className="grid items-center  lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">
            <span>Владелец: </span>
            <br />
            <span className="flex items-center">
              (Юр.лицо)
              <Checkbox className="w-5" />
              {/* <IoIosCheckmarkCircle color="#0C77F8" /> */}
            </span>
          </div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Марка а/м:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Адрес владельца:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Марка а/м:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Паспортные данные:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Объект оценки:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Телефон владельца:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Цель оценки:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">e-mail:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Тип оценки:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Доверенное лицо:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Гос.№</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Адрес.дов.лица:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">VIN:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Телефон.дов.лица</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Год выпуска:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Экономический район:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Цвет:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">№ полиса:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Пробег,км:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Код задачи:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">№ двигателя:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">№ убытка:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">СТС:</div>
          <div className="col-span-3">
            <Input />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Форма оплаты услуг:</div>
          <div className="col-span-3">
            <div className="space-y-[7px]">
              <Select size="small" value={"наличными"} />
              <div className="flex flex-wrap gap-2.5">
                <div className="flex items-center gap-1">
                  <p className="text-sm">счет</p>
                  <span>
                    <Checkbox />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-sm">чек</p>
                  <span>
                    <Checkbox />
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  (Оплатил
                  <span>
                    <InputNumber
                      className="w-[54px] rounded-[10px]"
                      size="small"
                      precision={2}
                      value={1}
                    />
                  </span>
                  руб. )
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-sm">оплатить отдельно</p>
                  <span>
                    <Checkbox />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-sm">предоплата</p>
                  <span>
                    <Checkbox />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">ПТС:</div>
            <div className="col-span-3">
              <Input />
            </div>
          </div>
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Справка ГИБДД/ОВД:</div>
            <div className="col-span-3">
              <Input />
            </div>
          </div>
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Виноват в ДТП:</div>
            <div className="col-span-3">
              <Radio.Group>
                <Radio value="yes">да</Radio>
                <Radio value="no">нет</Radio>
              </Radio.Group>
            </div>
          </div>
        </div>
        <div className="grid gap-1 lg:grid-cols-5">
          <div className="text-sm col-span-2">Место аварии:</div>
          <div className="col-span-3">
            <Input.TextArea />
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">
              Дата ДТП/СС: <span className="text-red-500">*</span>
            </div>
            <div className="col-span-3">
              <DatePicker placeholder="" className="w-full" />
            </div>
          </div>
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Франшиза:</div>
            <div className="col-span-3">
              <Input />
            </div>
          </div>
        </div>
        <div className="grid gap-1 lg:grid-cols-5">
          <div className="text-sm col-span-2">Комментарий:</div>
          <div className="col-span-3">
            <Input.TextArea />
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Лимит ответственности:</div>
            <div className="col-span-3">
              <Input />
            </div>
          </div>
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Действие полиса:</div>
            <div className="col-span-3 flex items-center gap-2">
              <div className="text-sm">с: </div>
              <DatePicker placeholder="" size="small" />
              <div className="text-sm">по: </div>
              <DatePicker placeholder="" size="small" />
            </div>
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-5 gap-1">
          <div className="text-sm col-span-2">Доп. действия:</div>
          <div className="col-span-3">
            <Select className="w-full" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Соглашение/СТО:</div>
            <div className="col-span-3">
              <Select className="w-full" />
            </div>
          </div>
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Отделение ГИБДД:</div>
            <div className="col-span-3">
              <Select className="w-full" />
            </div>
          </div>
          <div className="grid items-center lg:grid-cols-5 gap-1">
            <div className="text-sm col-span-2">Сумма, руб.:</div>
            <div className="col-span-3">
              <Select className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainObject;
