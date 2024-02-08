import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Input } from "antd";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="px-2 py-11">
      <title>История отработанных заявок</title>
      <div className="px-5 py-6 rounded-[25px] bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-5">
          <div className="text-[28px]">История отработанных заявок</div>
          <div className="w-full lg:w-auto">
            <Input prefix={<IoSearch />} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Table>
            <Thead>
              <Tr>
                <Th>№</Th>
                <Th>Дата расчета</Th>
                <Th>Менеджер</Th>
                <Th>Этап</Th>
                <Th>Дата завершения</Th>
                <Th>Работы</Th>
                <Th>Автор</Th>
                <Th>
                  <FaEdit />
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className="underline">2140256</Td>
                <Td>01.11.13</Td>
                <Td>Кишин В.М.</Td>
                <Td>Согласование детализации</Td>
                <Td>23.11.13 18:41</Td>
                <Td>
                  Расчет калькуляции, <br /> Составление акта осмотра
                </Td>
                <Td>Заказчик</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
        <div className="lg:hidden">
          <div className="bg-[#EFEFEF] p-2.5 rounded-xl">
            <div className="flex justify-between items-center mb-2.5">
              <div className="text-xl">АО “АльфаСтрахование”</div>
              <div className="text-xl">№ 2140256</div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div className="text-xs font-semibold">Тип заявки</div>
              <div className=" col-span-3">
                <FaCar />
              </div>
              <div className="text-xs font-semibold">Менеджер</div>
              <div className="text-xs col-span-3">Кашин М.В.</div>
              <div className="text-xs font-semibold">Адрес</div>
              <div className="text-xs col-span-3">
                г. Москва, ул. Радужная, д.40
              </div>
              <div className="text-xs font-semibold">Марка</div>
              <div className="text-xs col-span-3">Audi</div>
              <div className="text-xs font-semibold">Модель</div>

              <div className="text-xs col-span-3"> RS6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
