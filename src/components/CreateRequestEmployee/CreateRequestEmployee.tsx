import { useState } from "react";
import { useAppSelector } from "@/store";
import { selectCredentialsAuthorized } from "@/store/authSlice";
import CloseButton from "./ui/CloseButton";
import clsx from "clsx";
import MobileNav from "@/components/ui/MobileNav";
import { AuthUserRole } from "@/lib/types";
import styles from "./CreateRequestEmployee.module.css";
import Create from "./pages/Create";
import Reshedule from "./pages/Reshedule";
import Cancel from "./pages/Cancel";
import CustomModal from "@/components/ui/CusModal";
import CusPaper from "@/components/ui/CusPaper";

const roleMessageMap: Record<AuthUserRole, string> = {
  customer: "Заказчик",
  employee: "Сотрудник",
  guest: "Гость",
};

const pages = [
  {
    value: "create",
    label: "Создание",
  },
  {
    value: "reshedule",
    label: "Перенос",
  },
  {
    value: "cancel",
    label: "Отмена",
  },
] as const;

type CreateRequestEmployeeProps = {
  open: boolean;
  onClose: () => void;
  mobile?: boolean;
};

/**
 * Модальное окно создания заявки, только для сотрудника
 */
export default function CreateRequestEmployee({
  open,
  onClose,
  mobile,
}: CreateRequestEmployeeProps) {
  const [page, setPage] = useState<(typeof pages)[number]["value"]>("create");
  const credentails = useAppSelector(selectCredentialsAuthorized);

  return (
    <CustomModal open={open} onClose={onClose}>
      <div className={clsx(styles["root"], mobile && "mobile")}>
        {credentails.role !== "employee" && (
          <div>
            <CloseButton onClick={onClose} />
            Данный компонент предназначен для пользователей с ролью
            &quotСотрудник&quot, у Вашего пользователя роль&quot
            {roleMessageMap[credentails.role]}&quot
          </div>
        )}
        {credentails.role === "employee" && (
          <>
            <MobileNav
              text="Создание заявки"
              pages={pages.map((item) => ({
                key: item.value,
                text: item.label,
              }))}
              onPageChange={(value) => setPage(value as any)}
              className={clsx(styles["mobile-nav"], "w-full")}
              onCloseButtonClick={onClose}
            />
            <div className={styles["content-wrapper"]}>
              <CloseButton
                className={styles["desktop-close-button"]}
                onClick={onClose}
              />
              <nav className={styles["desktop-nav"]}>
                {pages.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setPage(item.value)}
                    className={clsx(page === item.value && "active")}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <CusPaper className={styles["content"]}>
                <h2 className="text-2xl text-center font-bold mb-4">
                  Новая заявка
                </h2>
                {page === "create" && (
                  <Create mobile={mobile} onDone={onClose} />
                )}
                {page === "reshedule" && (
                  <Reshedule mobile={mobile} onDone={onClose} />
                )}
                {page === "cancel" && <Cancel onDone={onClose} />}
              </CusPaper>
            </div>
          </>
        )}
      </div>
    </CustomModal>
  );
}
