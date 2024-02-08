"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Select } from "antd";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { FaEdit } from "react-icons/fa";

const ResultTable = () => {
  return (
    <div className="flex-1 pb-5">
      <Scrollbars className="h-full" autoHide>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Название</Th>
              <Th>Дата расчета</Th>
              <Th>Менеджер</Th>
              <Th>Заказчик</Th>
              <Th>Этап</Th>
              <Th>Дата</Th>
              <Th>Автор</Th>
              <Th align="right">
                <FaEdit />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className="bg-[#E7FFDE]">
              <Td>2140256</Td>
              <Td>АО “АльфаСтрахование”</Td>
              <Td>01.11.13</Td>
              <Td>Кишин В.М.</Td>
              <Td>Экспресс тест</Td>
              <Td>Приём заявки</Td>
              <Td>02.05.2020</Td>
              <Td>Заказчик</Td>
              <Td></Td>
            </Tr>
            <Tr className="bg-[#FFD1CE]">
              <Td>2140256</Td>
              <Td>АО “АльфаСтрахование”</Td>
              <Td>01.11.13</Td>
              <Td>Кишин В.М.</Td>
              <Td>Экспресс тест</Td>
              <Td>Приём заявки</Td>
              <Td>02.05.2020</Td>
              <Td>Заказчик</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>2140256</Td>
              <Td>АО “АльфаСтрахование”</Td>
              <Td>01.11.13</Td>
              <Td>Кишин В.М.</Td>
              <Td>Экспресс тест</Td>
              <Td>Приём заявки</Td>
              <Td>02.05.2020</Td>
              <Td>Заказчик</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </Scrollbars>
      <div className="flex justify-end">
        <div className="flex gap-[35px] items-center">
          <Select
            value={30}
            options={[{ label: <span>30</span>, value: 30 }]}
          />
          <div>Сумма: 2102</div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
