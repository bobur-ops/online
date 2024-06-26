import { useCallback, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import { useAppSelector } from "@/store";
import { selectCredentialsAuthorized } from "@/store/authSlice";
import { Collapse, Mask } from "antd-mobile";
import clsx from "clsx";
import { useEffectOnce } from "usehooks-ts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import FancyButton from "../ui/FancyButton";
import { logout } from "@/services/accessToken";

type NavItem = {
  url: string;
  label: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  // {
  //   url: "/dashboard",
  //   label: "Главная страница"
  // },
  // {
  //   url: "/search",
  //   label: "Поиск",
  //   children: [
  //     {
  //       url: "/search/simple",
  //       label: "Простой",
  //     },
  //     {
  //       url: "/search/advanced",
  //       label: "Расширенный",
  //     },
  //   ],
  // },
  {
    url: "/personal-account",
    label: "Личный кабинет",
    children: [
      {
        url: "/personal-account/pre-entry",
        label: "Предварительная запись",
      },
      {
        url: "/personal-account/coordinate-departure",
        label: "Согласовать выезд",
      },
      // {
      //   url: "/personal-account/auto-examination",
      //   label: "Автоэкспертиза",
      // },
      // {
      //   url: "/personal-account/rating",
      //   label: "Оценка",
      // },
      {
        url: "/personal-account/progress-ratings",
        label: "Заявки на обработке",
      },
      {
        url: "/personal-account/create-claim",
        label: "Создать претензию",
      },
      // {
      //   url: "/personal-account/claims/create",
      //   label: "Создать претензию",
      // },
      {
        url: "/personal-account/claims",
        label: "Претензии",
      },
    ],
  },
  {
    url: "/requests",
    label: "Заявки",
    children: [
      {
        url: "/requests",
        label: "Все заявки",
      },
      // {
      //   url: "/requests/in-progress",
      //   label: "На обработке",
      // },
      // {
      //   url: "/requests/create",
      //   label: "Прием заявки",
      // },
      {
        url: "/requests/search",
        label: "Расширенный поиск",
      },
      {
        url: "/personal-account/claims/create",
        label: "Создать претензию",
      },
      {
        url: "/requests/history",
        label: "История отработанных заявок",
      },
      {
        url: "/personal-account/journal-blocked-entries",
        label: "Журнал блокировок",
      },
    ],
  },
  {
    url: "/references",
    label: "Справочники",
    children: [
      {
        url: "/references/employees",
        label: "Cотрудники",
      },
      {
        url: "/references/branches",
        label: "Филиалы",
      },
      // {
      //   url: "/references/jobs",
      //   label: "Работы",
      // },
      {
        url: "/references/insurance-companies",
        label: "Страховые компании",
      },
    ],
  },
];

function Navitem({
  item,
  onLinkClick,
}: {
  item: NavItem;
  onLinkClick?: () => void;
}) {
  const router = useRouter();

  return (
    <>
      {item.children && (
        <div>
          <Collapse key={item.url}>
            <Collapse.Panel key={item.url} title={item.label}>
              {item.children.map((subItem) => (
                <Navitem key={subItem.url} item={subItem} />
              ))}
            </Collapse.Panel>
          </Collapse>
        </div>
      )}
      {!item.children && (
        <Link href={item.url} onClick={onLinkClick} className={styles["link"]}>
          {item.label}
        </Link>
      )}
    </>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const handleToggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);
  const router = useRouter();

  const credentials = useAppSelector(selectCredentialsAuthorized);

  // handle click outside
  useEffectOnce(() => {
    function fn(event: MouseEvent) {
      if (rootRef.current && event.target instanceof Node) {
        if (!rootRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    }
    document.addEventListener("click", fn);
    return () => {
      document.removeEventListener("click", fn);
    };
  });

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <>
      <Mask visible={open} className={styles["mask"]} />
      <div ref={rootRef} className={clsx(styles["root"], open && "open")}>
        <div
          onClick={() => router.push("/dashboard")}
          className={styles["avatar"]}
        >
          <span>{open ? credentials.name : credentials.name[0] ?? ""}</span>
        </div>
        <button className={styles["toggle-button"]} onClick={handleToggleOpen}>
          {open ? "<<<" : ">>>"}
        </button>
        {open && (
          <>
            <nav>
              {navItems.map((item) => (
                <Navitem
                  key={item.url}
                  item={item}
                  onLinkClick={() => setOpen(false)}
                />
              ))}
            </nav>
            <div className="w-full mt-3 flex justify-center">
              <FancyButton onClick={handleLogout}>Выход</FancyButton>
            </div>
          </>
        )}
      </div>
    </>
  );
}
