import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import React from "react";
import { FaEdit } from "react-icons/fa";

const ClaimView = () => {
  return (
    <div className=" overflow-x-scroll">
      <Table>
        <Thead>
          <Tr>
            <Th className="px-3">№ заявки</Th>
            <Th className="px-3">№ претензии</Th>
            <Th className="px-3">Штраф</Th>
            <Th className="px-3">Заказчик</Th>
            <Th className="px-3">№ а/м</Th>
            <Th className="px-3">№ полиса</Th>
            <Th className="px-3">№ убытка</Th>
            <Th className="px-3">Объект оценки</Th>
            <Th className="px-3">Обнаружил</Th>
            <Th className="px-3">Тип ошибки</Th>
            <Th className="px-3">Текст</Th>
            <Th className="px-3">Ответ</Th>
            <Th className="px-3">Дата штрафа</Th>
            <Th className="px-3">Дата исправления</Th>
            <Th className="px-3">Статус</Th>
            <Th className="px-3">
              <FaEdit />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Tr key={i}>
                <Td className="px-3">2140523</Td>
                <Td className="px-3">5522</Td>
                <Td className="px-3">3500</Td>
                <Td className="px-3">17-й Автобусный парк</Td>
                <Td className="px-3">1234</Td>
                <Td className="px-3">123456789</Td>
                <Td className="px-3">123456789</Td>
                <Td className="px-3">Автомобиль</Td>
                <Td className="px-3">Иванов И.И.</Td>
                <Td className="px-3">1263546</Td>
                <Td className="px-3">1263546</Td>
                <Td className="px-3"></Td>
                <Td className="px-3">12.12.2023 12:00</Td>
                <Td className="px-3">12.12.2023 12:00</Td>
                <Td className="px-3">Активен</Td>
                <Td className="px-3"></Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ClaimView;
