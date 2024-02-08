"use client";

import CusSearchBar from "@/components/ui/CusSearchBar";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Checkbox } from "antd";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { FaEdit } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { PiMinusCircleFill } from "react-icons/pi";
import EditBranchModal from "./EditBranchModal";

const BranchesTable = () => {
  const [search, setSearch] = useState("");
  const [isEditModal, setIsEditModal] = useState(false);

  return (
    <div className="px-5 py-7 rounded-3xl bg-white space-y-[18px] h-[50vh] flex flex-col">
      <EditBranchModal
        open={isEditModal}
        onCancel={() => setIsEditModal(false)}
      />
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="text-[28px]">Страховые компании</div>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
          <div className="divide-x-2 divide-[#DCDBDD] flex h-[38px] border-2 border-[#DCDBDD] rounded-xl">
            <div className="cursor-pointer flex items-center gap-2.5 py-1.5 px-6">
              <FcPlus />
              Добавить
            </div>
            <div className="cursor-pointer flex items-center gap-2.5 py-1.5 px-6">
              <PiMinusCircleFill color="red" />
              Удалить
            </div>
          </div>
          <div className="">
            <CusSearchBar
              classes={{ root: "!h-[38px] !rounded-xl" }}
              placeholder="Поиск"
              value={search}
              onChange={setSearch}
            />
          </div>
        </div>
      </div>
      <Scrollbars>
        <Table className="hidden lg:table">
          <Thead>
            <Tr>
              <Th className="w-[80px]"></Th>
              <Th>№</Th>
              <Th>Название</Th>
              <Th>Город</Th>
              <Th>Адрес</Th>
              <Th>Эл.почта</Th>
              <Th>Телефон</Th>
              <Th>Актуальность</Th>
              <Th>Обед</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td align="center">
                <Checkbox />
              </Td>
              <Td>1</Td>
              <Td>АО “АльфаСтрахование”</Td>
              <Td>Адыгея</Td>
              <Td>Тургеневская ш.20Д.</Td>
              <Td>arkhangelsk@mail.ru</Td>
              <Td>+7(8182)444470</Td>
              <Td>Да</Td>
              <Td>13:00-14:00</Td>
              <Td
                align="center"
                className="cursor-pointer"
                onClick={() => setIsEditModal(true)}
              >
                <FaEdit />
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <div className="lg:hidden">
          <div className="bg-[#EFEFEF] p-2.5 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-base">АО “АльфаСтрахование”</div>
              <div className="">
                <FaEdit />
              </div>
            </div>
            <div className="grid gap-2 grid-cols-2">
              <div className="">
                <div className="font-medium">Город</div>
                <div className="">Адыгея</div>
              </div>
              <div className="">
                <div className="font-medium">Адрес</div>
                <div className="">Тургеневская ш.20Д.</div>
              </div>
              <div className="">
                <div className="font-medium">Эл.почта</div>
                <div className="">arkhangelsk@mail.ru</div>
              </div>
              <div className="">
                <div className="font-medium">Телефон</div>
                <div className="">+7(8182)444470</div>
              </div>
              <div className="">
                <div className="font-medium">Актуальность</div>
                <div className="">Да</div>
              </div>
              <div className="">
                <div className="font-medium">Обед</div>
                <div className="">13:00-14:00</div>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default BranchesTable;
