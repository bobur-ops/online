import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Button, DatePicker, Input } from "antd";
import React from "react";

const AgreementView = () => {
  return (
    <div className="">
      <div className="text-base mb-2">
        Согласовано: <span className="text-error">Нет</span>
      </div>
      <div className="text-xs mb-2.5 lg:hidden">
        Адрес: г.Москва, ул.Радужная, д.41
      </div>
      <div className="mb-5">
        <div className="text-xs mb-2">Дата осмотра</div>
        <DatePicker
          className="w-full lg:w-auto"
          size="large"
          placeholder="Выберите дату.."
        />
      </div>
      <div className="mb-5">
        <div className="text-xs mb-2">Сообщение</div>
        <Input />
      </div>
      <Table className="hidden lg:table">
        <Thead>
          <Tr>
            <Th className="text-base" align="center">
              Дата
            </Th>
            <Th className="text-base">Автор</Th>
            <Th className="text-base">Сообщение</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td className="text-lg" align="center">
              07.11.2023 12:00{" "}
            </Td>
            <Td className="text-lg">Кашин В.М. </Td>
            <Td className="text-lg">
              Согласование в филиале города Москвы и т.д.{" "}
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <div className="lg:hidden">
        <div className="bg-[#f1f1f1] rounded-xl p-2.5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-lg">от Кашим М.В.</div>
            <div className="text-lg">07.11.2023 12:00</div>
          </div>
          <div className="">“Согласование в филиале города Москвы и т.д.”</div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8 lg:hidden">
        <Button size="large" type="primary" ghost>
          Предложить дату
        </Button>
      </div>
    </div>
  );
};

export default AgreementView;
