import React, { useState } from "react";
import MainMain from "./MainMain";
import { twMerge } from "tailwind-merge";
import MainJobs from "./MainJobs";

import MainObject from "./MainObject";
import MainRequisits from "./MainRequisits";
import MainObject2 from "./MainObject2";
import MainDamages from "./MainDamages";
import { Button } from "antd";

const MainView = () => {
  const [currentTab, setCurrentTab] = useState("Основное");

  const renderContent = () => {
    switch (currentTab) {
      case "Основное":
        return <MainMain />;
        break;
      case "Работы":
        return <MainJobs />;
        break;
      case "Объект":
        return <MainObject />;
        break;
      case "Объект 2":
        return <MainObject2 />;
        break;
      case "Реквизиты":
        return <MainRequisits />;
        break;

      case "Повреждения":
        return <MainDamages />;
        break;

      default:
        return <MainMain />;
        break;
    }
  };

  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-[calc(100%+24px)] -top-12 space-y-2.5 w-[178px]">
        <div
          className={twMerge(
            "transition-all cursor-pointer py-2 h-[48px] flex text-xl items-center justify-center w-full text-center bg-[#DADADA] rounded-r-[15px]",
            currentTab === "Основное" && "bg-white"
          )}
          onClick={() => setCurrentTab("Основное")}
        >
          Основное
        </div>
        <div
          className={twMerge(
            "transition-all cursor-pointer py-2 h-[48px] flex text-xl items-center justify-center w-full text-center bg-[#DADADA] rounded-r-[15px]",
            currentTab === "Работы" && "bg-white"
          )}
          onClick={() => setCurrentTab("Работы")}
        >
          Работы
        </div>
        <div
          className={twMerge(
            "transition-all cursor-pointer py-2 h-[48px] flex text-xl items-center justify-center w-full text-center bg-[#DADADA] rounded-r-[15px] text-error",
            currentTab === "Объект" && "bg-white"
          )}
          onClick={() => setCurrentTab("Объект")}
        >
          Объект
        </div>
        <div
          className={twMerge(
            "transition-all cursor-pointer py-2 h-[48px] flex text-xl items-center justify-center w-full text-center bg-[#DADADA] rounded-r-[15px] text-error",
            currentTab === "Объект 2" && "bg-white"
          )}
          onClick={() => setCurrentTab("Объект 2")}
        >
          Объект 2
        </div>
        <div
          className={twMerge(
            "transition-all cursor-pointer py-2 h-[48px] flex text-xl items-center justify-center w-full text-center bg-[#DADADA] rounded-r-[15px]",
            currentTab === "Реквизиты" && "bg-white"
          )}
          onClick={() => setCurrentTab("Реквизиты")}
        >
          Реквизиты
        </div>
        <div
          className={twMerge(
            "transition-all cursor-pointer py-2 h-[48px] flex text-xl items-center justify-center w-full text-center bg-[#DADADA] rounded-r-[15px]",
            currentTab === "Повреждения" && "bg-white"
          )}
          onClick={() => setCurrentTab("Повреждения")}
        >
          Повреждения
        </div>
      </div>

      {renderContent()}
      <div className="lg:hidden space-y-[35px] flex flex-col items-center mt-8">
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

export default MainView;
