import React from "react";

import { Button, Input, Modal, ModalProps, Select } from "antd";

import { MdOutlineFileUpload } from "react-icons/md";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import FancyButton from "@/components/ui/FancyButton";

const EditBranchModal = (props: ModalProps) => {
  return (
    <Modal footer={false} centered width={1000} {...props}>
      <div>
        <div className="text-center font-semibold text-2xl mb-5">
          Редактирование филиала
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
            <div className="space-y-2 min-w-[201px]">
              <div className="text-sm font-medium">Карта проезда</div>
              <Button
                className="bg-[#EC790F]"
                type="primary"
                icon={<MdOutlineFileUpload />}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="space-y-2">
              <div className="text-sm font-medium">Телефон</div>
              <Input size="large" />
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
                  <Tr className="">
                    <Td align="center">Понедельник</Td>
                    <Td align="center"></Td>
                    <Td align="center"></Td>
                    <Td align="center"></Td>
                    <Td align="center">Да</Td>
                  </Tr>
                  <Tr className="">
                    <Td align="center">Вторник</Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"9:00"}
                        options={[{ value: "9:00", label: "9:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"18:00"}
                        options={[{ value: "18:00", label: "18:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"13:00 - 14:00"}
                        options={[
                          { value: "13:00 - 14:00", label: "13:00 - 14:00" },
                        ]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">Нет</Td>
                  </Tr>
                  <Tr className="">
                    <Td align="center">Среда</Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"9:00"}
                        options={[{ value: "9:00", label: "9:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"18:00"}
                        options={[{ value: "18:00", label: "18:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"13:00 - 14:00"}
                        options={[
                          { value: "13:00 - 14:00", label: "13:00 - 14:00" },
                        ]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">Нет</Td>
                  </Tr>
                  <Tr className="">
                    <Td align="center">Четверг</Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"9:00"}
                        options={[{ value: "9:00", label: "9:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"18:00"}
                        options={[{ value: "18:00", label: "18:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"13:00 - 14:00"}
                        options={[
                          { value: "13:00 - 14:00", label: "13:00 - 14:00" },
                        ]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">Нет</Td>
                  </Tr>
                  <Tr className="">
                    <Td align="center">Пятница</Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"9:00"}
                        options={[{ value: "9:00", label: "9:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"18:00"}
                        options={[{ value: "18:00", label: "18:00" }]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">
                      <Select
                        size="small"
                        value={"13:00 - 14:00"}
                        options={[
                          { value: "13:00 - 14:00", label: "13:00 - 14:00" },
                        ]}
                        variant="borderless"
                      />
                    </Td>
                    <Td align="center">Нет</Td>
                  </Tr>
                  <Tr className="">
                    <Td align="center">Суббота</Td>
                    <Td align="center"></Td>
                    <Td align="center"></Td>
                    <Td align="center"></Td>
                    <Td align="center">Да</Td>
                  </Tr>
                  <Tr className="">
                    <Td align="center">Воскресенье</Td>
                    <Td align="center"></Td>
                    <Td align="center"></Td>
                    <Td align="center"></Td>
                    <Td align="center">Да</Td>
                  </Tr>
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
