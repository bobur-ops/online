import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { Button, Input, Select } from "antd";
import { Checkbox } from "antd-mobile";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const MainDamages = () => {
  return (
    <div>
      <div className="space-y-2.5 mb-[30px]">
        <div className="flex items-center justify-between lg:justify-start gap-2">
          <div className="w-[135px] text-xs">
            Новая деталь <span className="text-error">*</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <Input placeholder="Код" className="lg:max-w-[117px]" />
            <Input placeholder="Название" />
            <Button type="primary" ghost>
              Сохранить
            </Button>
          </div>
        </div>
        <div className="flex justify-between lg:justify-start items-center gap-2">
          <div className="w-[135px] text-xs">
            Новое повреждение<span className="text-error">*</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <Input placeholder="Название" />
            <Button type="primary" ghost className="w-full">
              Сохранить
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:table hidden w-full">
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Код детали</Th>
              <Th>Деталь</Th>
              <Th align="center">Повреждения</Th>
              <Th align="center">с/у</Th>
              <Th align="center">зам.</Th>
              <Th>рем.</Th>
              <Th align="center">окр.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <Tr key={i}>
                  <Td>1</Td>
                  <Td>44167</Td>
                  <Td className="w-[200px]">
                    <Select className="w-[80%]" />
                  </Td>
                  <Td className="w-[150px]">
                    <div className="space-y-[5px]">
                      <div className="flex gap-2 items-center">
                        <Select size="small" className="w-full" />
                        <MdCancel className="text-error" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <Select size="small" className="w-full" />
                        <MdCancel className="text-error" />
                      </div>
                    </div>
                  </Td>
                  <Td align="center">
                    <Checkbox />
                  </Td>
                  <Td align="center">
                    <Checkbox />
                  </Td>
                  <Td className="w-[98px]">
                    <Select size="small" className="w-full" />
                  </Td>
                  <Td align="center">
                    <Checkbox />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </div>
      <div className="p-2.5 rounded-xl bg-white lg:hidden shadow-lg">
        <div className="flex gap-5 items-center mb-2.5">
          <div className="">Код детали</div>
          <div className="flex-1">44167</div>
          <div className="">№1</div>
        </div>
        <div className="space-y-1 mb-2.5">
          <div className="text-xs font-medium">Деталь:</div>
          <Select className="w-full" />
        </div>
        <div className="space-y-2">
          <div className="text-xs font-medium">Повреждения:</div>
          <div className="flex items-center gap-1.5">
            <Select className="w-full" />
            <MdCancel className="text-error" />
          </div>
          <div className="flex items-center gap-1.5">
            <Select className="w-full" />
            <MdCancel className="text-error" />
          </div>
        </div>
        <div className="space-y-2 mt-2.5 mb-5">
          <div className="text-xs font-medium">Рем.:</div>
          <div className="flex items-center gap-1.5">
            <Select className="w-full" />
            <MdCancel className="text-error" />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="">С/У</div>
            <IoIosCheckmarkCircle className="text-primary" />
          </div>
          <div className="flex flex-col items-center">
            <div className="">Зам.</div>
            <IoIosCheckmarkCircle className="text-primary" />
          </div>
          <div className="flex flex-col items-center">
            <div className="">Окр.</div>
            <IoIosCheckmarkCircle className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDamages;
