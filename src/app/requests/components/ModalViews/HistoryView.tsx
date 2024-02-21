import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const HistoryView = () => {
  return (
    <div>
      <Table className="hidden lg:table">
        <Thead>
          <Tr>
            {/* <Th>№ заявки</Th> */}
            <Th></Th>
            <Th>Менеджер</Th>
            <Th>Заказчик</Th>
            <Th>Этап</Th>
            <Th>Дата завершения</Th>
            <Th>Работы</Th>
            <Th>Исполнитель 2</Th>
            <Th>
              <FaEdit />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {/* <Td>2140523</Td> */}
            <Td>
              <GrAttachment className="text-secondary" />
            </Td>
            <Td>Кашин М.В.</Td>
            <Td>17-й Автобусный парк</Td>
            <Td>Выставление счета</Td>
            <Td>01.12.2023 19:11</Td>
            <Td>Составление акта осмотра</Td>
            <Td>Считать Н.Н.</Td>
            <Td></Td>
          </Tr>
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
