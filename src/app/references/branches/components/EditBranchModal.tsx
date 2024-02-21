import React, { useState } from "react";

import { Button, Input, Modal, ModalProps, Select } from "antd";

import { MdOutlineFileUpload } from "react-icons/md";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import FancyButton from "@/components/ui/FancyButton";
import PhoneInput from "@/components/ui/PhoneInput";
import { Show } from "@/components/ui/Show";

const TableRow = ({
  isVacation = false,
  weekDay,
}: {
  isVacation?: boolean;
  weekDay: string;
}) => {
  const [isVacationDay, setIsVacationDay] = useState<boolean>(isVacation);

  return (
    <Tr className="">
      <Td align="center">{weekDay}</Td>
      <Td align="center">
        <Show>
          <Show.When isTrue={!isVacationDay}>
            <Select
              size="small"
              value={"9:00"}
              options={[{ value: "9:00", label: "9:00" }]}
              variant="borderless"
            />
          </Show.When>
        </Show>
      </Td>
      <Td align="center">
        <Show>
          <Show.When isTrue={!isVacationDay}>
            <Select
              size="small"
              value={"18:00"}
              options={[{ value: "18:00", label: "18:00" }]}
              variant="borderless"
            />
          </Show.When>
        </Show>
      </Td>
      <Td align="center">
        <Show>
          <Show.When isTrue={!isVacationDay}>
            <Select
              size="small"
              value={"13:00 - 14:00"}
              options={[{ value: "13:00 - 14:00", label: "13:00 - 14:00" }]}
              variant="borderless"
            />
          </Show.When>
        </Show>
      </Td>
      <Td
        align="center"
        className="cursor-pointer"
        onClick={() => setIsVacationDay((prev) => !prev)}
      >
        {!isVacationDay ? "Нет" : "Да"}
      </Td>
    </Tr>
  );
};

const EditBranchModal = (props: ModalProps & { isCreatingBranch: boolean }) => {
  return (
    <Modal footer={false} centered width={1000} {...props}>
      <div>
        <div className="text-center font-semibold text-2xl mb-5">
          {props.isCreatingBranch
            ? "Создание филиала"
            : "Редактирование филиала"}
        </div>
        <form className="space-y-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Название<span className="text-red-500">*</span>
              </div>
              <Input size="large" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Адрес<span className="text-red-500">*</span>
              </div>
              <Input size="large" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Регион<span className="text-red-500">*</span>
              </div>
              <Input size="large" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Город<span className="text-red-500">*</span>
              </div>
              <Input size="large" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Улица<span className="text-red-500">*</span>
              </div>
              <Input size="large" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Дом<span className="text-red-500">*</span>
              </div>
              <Input size="large" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="space-y-2">
              <div className="text-sm font-medium">Станция метро</div>
              <Input size="large" />
            </div>
            <div className="space-y-2 min-w-[201px] relative transform -translate-y-[2px]">
              <input type="file" className="absolute w-full h-full opacity-0" />
              <div className="text-sm font-medium">Карта проезда</div>
              <Button
                className="bg-[#EC790F]"
                type="primary"
                icon={<MdOutlineFileUpload />}
              ></Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="space-y-2">
              <div className="text-sm font-medium">Телефон</div>
              <PhoneInput onChange={(value) => value} />
              {/* <Input size="large" /> */}
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Эл. почта</div>
              <Input size="large" />
            </div>
          </div>
          <div className="max-w-[721px] mx-auto">
            <div className="mb-3">Расписание</div>
            <div className="">
              <Table>
                <Thead>
                  <Tr>
                    <Th align="center">День недели</Th>
                    <Th align="center">Время открытия</Th>
                    <Th align="center">Время закрытия</Th>
                    <Th align="center">Обед</Th>
                    <Th align="center">Выходной день</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TableRow weekDay="Понедельник" isVacation={true} />
                  <TableRow weekDay="Вторник" />
                  <TableRow weekDay="Среда" />
                  <TableRow weekDay="Четверг" />
                  <TableRow weekDay="Пятница" />
                  <TableRow weekDay="Суббота" isVacation={true} />
                  <TableRow weekDay="Воскресенье" isVacation={true} />
                </Tbody>
              </Table>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="space-y-2 min-w-[201px]">
              <div className="text-sm font-medium">Частота записи</div>
              <Select
                className="w-full"
                options={[{ label: "30 минут" }]}
                value={"30 минут"}
                size="large"
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">
                Максимум заявок на осмотр
              </div>
              <Input value={"100"} size="large" />
            </div>
          </div>
          <FancyButton className="mx-auto">Подтвердить</FancyButton>
        </form>
      </div>
    </Modal>
  );
};

export default EditBranchModal;
