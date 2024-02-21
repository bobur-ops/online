import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Show } from "@/components/ui/Show";
import { DatePicker, Input } from "antd";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const TableRow = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Tr>
      {/* <Td>2140523</Td> */}
      <Td className="cursor-pointer">
        <GrAttachment className="text-secondary" />
      </Td>
      <Td align="center" className="cursor-pointer">
        {isEditing ? (
          <Input
            size="small"
            defaultValue={"Кашин М.В."}
            className="w-[110px]"
          />
        ) : (
          <>Кашин М.В.</>
        )}
      </Td>
      <Td className="cursor-pointer" align="center">
        {isEditing ? (
          <Input
            size="small"
            defaultValue={"17-й Автобусный парк"}
            className="w-[110px]"
          />
        ) : (
          <>17-й Автобусный парк</>
        )}
      </Td>
      <Td className="cursor-pointer" align="center">
        {isEditing ? (
          <Input
            size="small"
            defaultValue={"Выставление счета"}
            className="w-[110px]"
          />
        ) : (
          <>Выставление счета</>
        )}
      </Td>
      <Td className="cursor-pointer" align="center">
        {isEditing ? (
          <DatePicker size="small" className="w-fit" showTime placeholder="" />
        ) : (
          <>01.12.2023 19:11</>
        )}
      </Td>
      <Td className="cursor-pointer" align="center">
        {isEditing ? (
          <Input
            size="small"
            defaultValue={"Выставление счета"}
            className="w-[110px]"
          />
        ) : (
          <>Составление акта осмотра</>
        )}
      </Td>
      <Td className="cursor-pointer" align="center">
        {isEditing ? (
          <Input
            size="small"
            defaultValue={"Считать Н.Н."}
            className="w-[110px]"
          />
        ) : (
          <>Считать Н.Н.</>
        )}
      </Td>
      <Td
        className="cursor-pointer"
        align="center"
        onClick={() => setIsEditing((prev) => !prev)}
      >
        <FaEdit />
      </Td>
    </Tr>
  );
};

const HistoryView = () => {
  return (
    <div>
      <Table className="hidden lg:table">
        <Thead>
          <Tr>
            {/* <Th>№ заявки</Th> */}
            <Th></Th>
            <Th align="center">Менеджер</Th>
            <Th align="center">Заказчик</Th>
            <Th align="center">Этап</Th>
            <Th align="center">Дата завершения</Th>
            <Th align="center">Работы</Th>
            <Th>Исполнитель 2</Th>
            <Th>
              <FaEdit />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRow />
        </Tbody>
      </Table>
      <div className="lg:hidden">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-[#efefef] p-[15px] rounded-10 grid grid-cols-2 gap-3 mb-5"
            >
              <div className="flex items-center justify-between col-span-2">
                <div className="text-lg font-semibold">№ заявки: 2140523</div>
                <div className="flex items-center gap-2">
                  <GrAttachment className="text-secondary" />
                  <FaEdit className="text-secondary" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-medium">Менеджер</div>
                <div className="">Кашин М.В.</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-medium">Заказчик</div>
                <div className="">17-й Автобусный парк</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-medium">Этап</div>
                <div className="">Выставление счета</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-medium">Дата завершения</div>
                <div className="">01.12.2023 19:11</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-medium">Работы</div>
                <div className="">Составление акта осмотра</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-medium">Исполнитель 2</div>
                <div className="">Считать Н.Н.</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HistoryView;
