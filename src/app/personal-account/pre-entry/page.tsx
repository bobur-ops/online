"use client";

import styles from "@/components/CreatePreEntry/CreatePreEntry.module.css";
import clsx from "clsx";
import { useBoolean, useMediaQuery } from "usehooks-ts";
import DelayCalendar from "@/app/requests/components/DelayCalendar";

import CreatePreEntry from "@/components/CreatePreEntry";
import MobileNav from "@/components/ui/MobileNav";
import CusPaper from "@/components/ui/CusPaper";
import FancyButton from "@/components/ui/FancyButton";
import Form from "@/components/CreatePreEntry/Form";

export default function PreEntryPage() {
  const isCalendarView = useBoolean(true);
  const mobile = useMediaQuery("(max-width: 970px)");

  return (
    <div className="flex h-full justify-center items-center">
      <div className={clsx(styles["root"], mobile && "mobile")}>
        <MobileNav
          className={styles["mobile-nav"]}
          pages={[]}
          text="Главное меню"
          onPageChange={() => {}}
          onCloseButtonClick={() => {}}
        />
        {isCalendarView.value ? (
          <CusPaper>
            <div className="p-3">
              <DelayCalendar />
              <div className="mt-5 flex justify-center ">
                <FancyButton onClick={() => isCalendarView.setFalse()}>
                  Дальше
                </FancyButton>
              </div>
            </div>
          </CusPaper>
        ) : (
          <CusPaper>
            <Form mobile={mobile} onDone={() => {}} />
          </CusPaper>
        )}
      </div>
    </div>
  );
}
