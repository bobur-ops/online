"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Input } from "antd";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { FaEdit } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";
import EditRequestModal from "./EditRequestModal";

const filters = [
  {
    label: "Предварительная запись",
  },
  {
    label: "Согласование выезда",
  },
  {
    label: "На обработку",
  },
  {
    label: "Прием заявки",
  },
  {
    label: "Осмотр",
  },
  {
    label: "Проверка",
  },
  {
    label: "История",
  },
  {
    label: "Расчет",
  },
  {
    label: "Расчет 2",
  },
  {
    label: "Финальная подготовка",
  },
  {
    label: "Выставление счета",
  },
];

const RequestsTable = () => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="h-full">
      <EditRequestModal
        open={isEditModal}
        onCancel={() => setIsEditModal(false)}
      />
      <div className="hidden md:flex gap-[15px] px-[34px]">
        {filters.map((f, index) => (
          <div
            key={index}
            className={twMerge(
              "max-w-[173px] bg-white rounded-t-xl py-[5px] px-[14px] flex justify-center items-center cursor-pointer"
            )}
            onClick={() => setSelectedTab(index)}
          >
            <div
              className={twMerge(
                "text-center font-medium opacity-50 transition-all",
                index === selectedTab && "opacity-100"
              )}
            >
              {f.label}
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-7 rounded-3xl bg-white space-y-[18px] h-full lg:h-[50vh] flex flex-col">
        <div className="flex-col md:flex-row flex justify-between md:items-center gap-5">
          <div className="text-[28px] md:pl-10">Заявки</div>
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <Input
                placeholder="Поиск"
                className="w-full"
                prefix={<IoMdSearch />}
              />
            </div>
            <div className="md:hidden">
              <FaEdit />
            </div>
          </div>
        </div>
        <Scrollbars className="h-full" autoHide>
          {isMobile ? (
            <div className="space-y-5">
              <div
                className="p-2.5 rounded-xl bg-[#DDFFD1]"
                onClick={() => setIsEditModal(true)}
              >
                <div className="flex justify-between items-center flex-wrap mb-1.5">
                  <span className="text-lg">АО “АльфаСтрахование”</span>
                  <div className="text-lg">№2140256</div>
                </div>
                <div className="grid md:grid-cols-3 gap-2.5">
                  <div className="grid grid-cols-3 text-xs col-span-2 gap-y-[3px]">
                    <div className="font-semibold">Менеджер</div>
                    <div className="col-span-2">Кашин М.В.</div>
                    <div className="font-semibold">Заказчик</div>
                    <div className="col-span-2">17-й Автобусный парк</div>
                    <div className="font-semibold">Этап</div>
                    <div className="col-span-2">Приём заявки</div>
                    <div className="font-semibold">Автор</div>
                    <div className="col-span-2">Заказчик</div>
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">Дата расчета</div>
                    <div className="">01.11.23</div>
                    <div className="font-semibold">Дата (?)</div>
                    <div className="">02.05.23</div>
                  </div>
                </div>
              </div>
              <div
                className="p-2.5 rounded-xl bg-[#FFD1CE]"
                onClick={() => setIsEditModal(true)}
              >
                <div className="flex justify-between flex-wrap items-center mb-1.5">
                  <span className="text-lg">АО “АльфаСтрахование”</span>
                  <div className="text-lg">№2140256</div>
                </div>
                <div className="grid md:grid-cols-3 gap-2.5">
                  <div className="grid grid-cols-3 text-xs col-span-2 gap-y-[3px]">
                    <div className="font-semibold">Менеджер</div>
                    <div className="col-span-2">Кашин М.В.</div>
                    <div className="font-semibold">Заказчик</div>
                    <div className="col-span-2">17-й Автобусный парк</div>
                    <div className="font-semibold">Этап</div>
                    <div className="col-span-2">Приём заявки</div>
                    <div className="font-semibold">Автор</div>
                    <div className="col-span-2">Заказчик</div>
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">Дата расчета</div>
                    <div className="">01.11.23</div>
                    <div className="font-semibold">Дата (?)</div>
                    <div className="">02.05.23</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
                  <Th align="center">
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
                  <Td
                    align="center"
                    className="cursor-pointer"
                    onClick={() => setIsEditModal(true)}
                  >
                    <FaEdit />
                  </Td>
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
                  <Td
                    align="center"
                    className="cursor-pointer"
                    onClick={() => setIsEditModal(true)}
                  >
                    <FaEdit />
                  </Td>
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
          )}
        </Scrollbars>
      </div>
    </div>
  );
};

export default RequestsTable;
