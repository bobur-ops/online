import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import React from "react";
import { GrAttachment } from "react-icons/gr";
import { IoCameraOutline, IoSearchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Button, Input } from "antd";

const MobileDocItem = () => {
  return (
    <div className="p-2 rounded-10 space-y-2.5 border">
      <div className="flex gap-6 items-center">
        <div className="flex-1 text-error">Название документа</div>
        <IoSearchOutline className="text-secondary" />
        <GrAttachment className="text-secondary " />
        <IoCameraOutline className="text-secondary" />
      </div>
      <div className="flex items-center gap-1">
        <div className="font-semibold">Оригинал</div>
        <IoIosCheckmarkCircle className="text-primary" />
        <div className="text-xs">01.11.23 19:11</div>
        <div className="font-semibold">Копия</div>
        <IoIosCheckmarkCircle className="text-primary" />
        <div className="text-xs">01.11.23 19:11</div>
      </div>
    </div>
  );
};

const DocumentsView = () => {
  return (
    <div>
      <Table className="hidden lg:table">
        <Thead>
          <Tr>
            <Th>Документы</Th>
            <Th>Интеграция</Th>
            <Th align="center">@</Th>
            <Th></Th>
            <Th>Дата</Th>
            <Th align="center">Оригинал</Th>
            <Th align="center">Копия</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Tr key={i}>
                <Td>Акт осмотра</Td>
                <Td></Td>
                <Td></Td>
                <Td>
                  <div className="flex justify-center items-center gap-6">
                    <IoSearchOutline className="text-secondary" />

                    <GrAttachment className="text-secondary " />
                    <IoCameraOutline className="text-secondary" />
                  </div>
                </Td>
                <Td>01.11.13 19:11</Td>
                <Td align="center">
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-primary" />
                    <p>01.11.13 19:11</p>
                  </div>
                </Td>
                <Td align="center">
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-primary" />
                    <p>01.11.13 19:11</p>
                  </div>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <div className="mt-5">
        <div className="text-primary font-semibold text-base mb-2">
          Отправка файлов
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-[118px] lg:items-center mb-2.5 lg:mb-1">
          <div className="text-xs font-medium">Email:</div>
          <Input className="max-w-[465px]" />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-[118px] lg:items-center">
          <div className="text-xs font-medium">Тема:</div>
          <Input className="max-w-[465px]" />
        </div>
      </div>
      <div className="mt-5 space-y-5 lg:hidden">
        <MobileDocItem />
        <MobileDocItem />
      </div>
      <div className="space-y-[35px] flex lg:hidden flex-col items-center mt-8">
        <Button type="primary" ghost size="large">
          Подтвердить
        </Button>
        <Button type="primary" ghost size="large" danger>
          Подтвердить
        </Button>
      </div>
    </div>
  );
};

export default DocumentsView;
