import { Button, Dropdown, MenuProps, Modal, ModalProps } from "antd";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { twMerge } from "tailwind-merge";
import MainView from "./ModalViews/MainView";
import DocumentsView from "./ModalViews/DocumentsView";
import AgreementView from "./ModalViews/AgreementView";
import DelayView from "./ModalViews/DelayView";
import HistoryView from "./ModalViews/HistoryView";
import ClaimView from "./ModalViews/ClaimView";
import { useMediaQuery } from "usehooks-ts";

const EditRequestModal = (props: ModalProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const mobile = useMediaQuery("(max-width: 970px)");

  const items: MenuProps["items"] = [
    {
      label: "Основные данные",
      key: 0,
      className: "",
      onClick: (value) => {
        setCurrentTab(+value.key);
      },
    },
    {
      label: "Документы и файлы",
      key: 1,
      className: "",
      onClick: (value) => {
        setCurrentTab(+value.key);
      },
    },
    {
      label: "Согласование выезда",
      key: 2,
      className: "",
      onClick: (value) => {
        setCurrentTab(+value.key);
      },
    },
    {
      label: "Перенос",
      key: 3,
      className: "",
      onClick: (value) => {
        setCurrentTab(+value.key);
      },
    },
    {
      label: "История",
      key: 4,
      className: "",
      onClick: (value) => {
        setCurrentTab(+value.key);
      },
    },
    {
      label: "Претензия",
      key: 5,
      className: "",
      onClick: (value) => {
        setCurrentTab(+value.key);
      },
    },
  ];

  const renderContent = () => {
    if (currentTab === 0) {
      return <MainView />;
    }

    if (currentTab === 1) {
      return <DocumentsView />;
    }

    if (currentTab === 2) {
      return <AgreementView />;
    }
    if (currentTab === 3) {
      return <DelayView />;
    }
    if (currentTab === 4) {
      return <HistoryView />;
    }
    if (currentTab === 5) {
      return <ClaimView />;
    }
  };

  return (
    <Modal
      footer={false}
      centered
      width={[4, 5].includes(currentTab) ? 1100 : 1000}
      closeIcon={!mobile}
      classNames={{ wrapper: "" }}
      {...props}
    >
      <div className="relative min-h-[530px] flex flex-col ">
        <div className="hidden lg:block absolute right-[calc(100%+24px)]  space-y-2.5 w-[178px]">
          <div
            className={twMerge(
              "transition-all cursor-pointer py-2 w-[178px] flex text-xl items-center justify-center  text-center bg-[#DADADA] rounded-l-[15px]",
              currentTab === 0 && "bg-white"
            )}
            onClick={() => setCurrentTab(0)}
          >
            Основные <br /> данные
          </div>
          <div
            className={twMerge(
              "transition-all cursor-pointer py-2 w-[178px] flex text-xl items-center justify-center  text-center bg-[#DADADA] rounded-l-[15px]",
              currentTab === 1 && "bg-white"
            )}
            onClick={() => setCurrentTab(1)}
          >
            Документы <br /> и файлы
          </div>
          <div
            className={twMerge(
              "transition-all cursor-pointer py-2 w-[178px] flex text-xl items-center justify-center  text-center bg-[#DADADA] rounded-l-[15px]",
              currentTab === 2 && "bg-white"
            )}
            onClick={() => setCurrentTab(2)}
          >
            Согласование
          </div>
          <div
            className={twMerge(
              "transition-all cursor-pointer py-2 w-[178px] flex text-xl items-center justify-center  text-center bg-[#DADADA] rounded-l-[15px]",
              currentTab === 3 && "bg-white"
            )}
            onClick={() => setCurrentTab(3)}
          >
            Перенос
          </div>
          <div
            className={twMerge(
              "transition-all cursor-pointer py-2 w-[178px] flex text-xl items-center justify-center  text-center bg-[#DADADA] rounded-l-[15px]",
              currentTab === 4 && "bg-white"
            )}
            onClick={() => setCurrentTab(4)}
          >
            История
          </div>
          <div
            className={twMerge(
              "transition-all cursor-pointer py-2 w-[178px] flex text-xl items-center justify-center  text-center bg-[#DADADA] rounded-l-[15px]",
              currentTab === 5 && "bg-white"
            )}
            onClick={() => setCurrentTab(5)}
          >
            Претензия
          </div>
        </div>
        <div className="mb-5 relative items-center justify-center gap-20">
          <p className="font-semibold text-2xl text-center">Заявка № 121212</p>
          <div className="lg:hidden absolute top-0 right-0">
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottom"
              dropdownRender={(menu) => {
                return <div className=""> {menu}</div>;
              }}
            >
              <Button
                className="bg-[#0C77F8]"
                icon={<GiHamburgerMenu />}
                type="primary"
                shape="circle"
              />
            </Dropdown>
          </div>
        </div>
        <div className="">{renderContent()}</div>
      </div>
    </Modal>
  );
};

export default EditRequestModal;
