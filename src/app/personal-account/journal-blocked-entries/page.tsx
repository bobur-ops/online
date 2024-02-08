import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Button, Checkbox, Input } from "antd";
import React from "react";
import { FaCircleMinus } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="px-2 py-12">
      <title>Журнал блокировок записи осмотров</title>
      <div className="px-5 py-6 rounded-[25px] bg-white">
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          <div className="text-[28px]">Журнал блокировок записи осмотров</div>
          <div className="">
            <Input />
          </div>
        </div>
        <div className="hidden lg:block">
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>№</Th>
                <Th>Название</Th>
                <Th>Пользователь</Th>
                <Th>Дата блокировки</Th>
                <Th>Заблокированное время</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>1</Td>
                <Td>АО “АльфаСтрахование”</Td>
                <Td>Кишин В. М.</Td>
                <Td>25.02.2023 12:00</Td>
                <Td>22.02.2023 12:00</Td>
                <Td align="right">
                  <Button
                    size="small"
                    icon={<FaCircleMinus className="text-error" />}
                  >
                    Отменить
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
        <div className="block lg:hidden">
          <div className="p-3 bg-[#EFEFEF] rounded-10">
            <div className="flex mb-2 justify-between items-center">
              <div className="">АО “АльфаСтрахование”</div>
              <div className="">№ 1</div>
            </div>
            <div className="grid gap-2 grid-cols-2">
              <div className="flex flex-col">
                <div className="font-medium">Пользователь</div>
                <div className="">Кишин В. М.</div>
              </div>
              <div className="flex flex-col">
                <div className="font-medium">Дата блокировки</div>
                <div className="">24.02.2023 12:00</div>
              </div>
              <div className="flex flex-col">
                <div className="font-medium">Заблокированное время</div>
                <div className="">22.02.2023 12:00</div>
              </div>
            </div>
            <Button
              className="w-full mt-2"
              icon={<FaCircleMinus className="text-error" />}
            >
              Отменить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
