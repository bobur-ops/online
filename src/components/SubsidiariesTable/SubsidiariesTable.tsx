import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./SubsidiariesTable.module.css";
import { CustomError } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Checkbox, InfiniteScroll, SpinLoading } from "antd-mobile";
import CusSearchBar from "../ui/CusSearchBar";
import Scrollbars from "react-custom-scrollbars-2";
import { BiCalendar } from "react-icons/bi";
import { useDebounce } from "usehooks-ts";
import _ from "lodash";

async function getSubsidiaries(offset: number, limit: number, search: string) {
  try {
    const res = await fetch(
      `/api/get-subsidiaries?search=${search}&offset=${offset}&limit=${limit}`
    );
    if (!res.ok) {
      throw new CustomError(
        "При загрузке списка филиалов произошла ошибка, статус ответа: " +
          res.status
      );
    }
    type Subsidiary = {
      id: number;
      townId: number;
      townName: null | string;
      name: string;
      address: null | string;
      metro: null | string;
      phone: null | string;
      email: null | string;
      actual: boolean;
      havePathMap: boolean;
    };
    return (await res.json()) as Subsidiary[];
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При загрузке списка городов произошла неизвестная ошибка");
  }
}

type SubsidiariesTableProps = ComponentPropsWithoutRef<"div"> & {
  mobile?: boolean;
  setPreEntryModal: Dispatch<SetStateAction<boolean>>;
};

export default function SubsidiariesTable({
  mobile,
  setPreEntryModal,
  ...divProps
}: SubsidiariesTableProps) {
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const searchDebounced = useDebounce(search, 500);
  const [selected, setSelected] = useState<string[]>([]);

  const addSelect = useCallback(
    (id: string) => {
      setSelected((prev) => {
        const found = prev.find((item) => item === id);
        return found ? prev : [...prev, id].sort();
      });
    },
    [setSelected]
  );

  const removeSelect = useCallback(
    (id: string) => {
      setSelected((prev) => {
        return prev.filter((item) => item !== id);
      });
    },
    [setSelected]
  );

  const toggleSelect = useCallback(
    (id: string) => {
      setSelected((prev) => {
        const found = prev.find((item) => item === id);
        return found
          ? prev.filter((item) => item !== id)
          : [...prev, id].sort();
      });
    },
    [setSelected]
  );

  const subsidiariesQuery = useInfiniteQuery({
    queryKey: ["all-subsidiaries", limit, searchDebounced],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      getSubsidiaries(pageParam, limit, searchDebounced),
    getNextPageParam(lastPage, allPages, lastPageParam, allPageParams) {
      return lastPage.length < limit ? null : lastPageParam + limit;
    },
    getPreviousPageParam(firstPage, allPages, firstpageParam, allPageParams) {
      if (firstpageParam - limit < 0) {
        return null;
      }
      return firstpageParam - limit;
    },
    // maxPages: 2,
  });

  useEffect(() => {
    if (subsidiariesQuery.data) {
      const ids = subsidiariesQuery.data.pages
        .flat()
        .map((item) => item.id.toString());
      setSelected((prev) => {
        return _.intersection(prev, ids);
      });
    }
  }, [subsidiariesQuery.data]);

  return (
    <div {...divProps} className={clsx(styles["root"], mobile && "mobile")}>
      <div className={styles["header"]}>
        <h2>Филиалы</h2>
        <CusSearchBar
          classes={{ root: styles["search"] }}
          placeholder="Поиск"
          value={search}
          onChange={setSearch}
        />
      </div>
      {subsidiariesQuery.isLoading && (
        <div className={styles["message"]}>
          <SpinLoading />
        </div>
      )}
      {subsidiariesQuery.isError && (
        <div className={styles["message"]}>
          <span>{subsidiariesQuery.error.message}</span>
        </div>
      )}
      {subsidiariesQuery.isSuccess && (
        <>
          {subsidiariesQuery.data.pages[0].length === 0 && (
            <div className={styles["message"]}>
              <span>Ничего не найдено</span>
            </div>
          )}
          {subsidiariesQuery.data.pages[0].length !== 0 && (
            <Scrollbars className={styles["body"]} autoHide>
              {mobile && (
                <div className={styles["mobile-list"]}>
                  {subsidiariesQuery.data.pages
                    .flat()
                    .map((subsidiary, index) => (
                      <div
                        key={index}
                        className={styles["mobile-list-item"]}
                        onClick={() => toggleSelect(subsidiary.id.toString())}
                      >
                        <div className={styles["item-left"]}>
                          <div>
                            <Checkbox
                              className={styles["checkbox"]}
                              checked={Boolean(
                                selected.find(
                                  (item) => item === subsidiary.id.toString()
                                )
                              )}
                            />
                            {subsidiary.name}
                          </div>
                          <div>
                            <div>{subsidiary.townName}</div>
                            <div>{subsidiary.email}</div>
                            <div>{subsidiary.address}</div>
                            <div>{subsidiary.phone}</div>
                          </div>
                        </div>

                        <div className={styles["item-right"]}>
                          <div
                            className={clsx(
                              styles["path-map"],
                              subsidiary.havePathMap && "active"
                            )}
                          >
                            схема проезда
                          </div>
                          <div onClick={() => setPreEntryModal(true)}>
                            <BiCalendar className={styles["calendar"]} />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
              {!mobile && (
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>#</th>
                      <th>Название</th>
                      <th>Записаться</th>
                      <th>Город</th>
                      <th>Адрес</th>
                      <th>Эл.почта</th>
                      <th>Телефон</th>
                      <th>Маршрут</th>
                      <th>Актуальное</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subsidiariesQuery.data.pages.flat().map((subsidiary) => (
                      <tr key={subsidiary.id}>
                        <td align="center">
                          <Checkbox
                            className={styles["checkbox"]}
                            checked={Boolean(
                              selected.find(
                                (item) => item === subsidiary.id.toString()
                              )
                            )}
                            onClick={() =>
                              toggleSelect(subsidiary.id.toString())
                            }
                          />
                        </td>
                        <td align="center">{subsidiary.id}</td>
                        <td align="left">{subsidiary.name}</td>
                        <td
                          align="center"
                          onClick={() => setPreEntryModal(true)}
                        >
                          <BiCalendar className={styles["calendar"]} />
                        </td>
                        <td align="center">{subsidiary.townName}</td>
                        <td align="left">{subsidiary.address}</td>
                        <td align="center">{subsidiary.email}</td>
                        <td align="center">{subsidiary.phone}</td>
                        <td align="center">
                          <div
                            className={clsx(
                              styles["path-map"],
                              subsidiary.havePathMap && "active"
                            )}
                          >
                            схема проезда
                          </div>
                        </td>
                        <td align="center">
                          {subsidiary.actual ? "Да" : "Нет"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <InfiniteScroll
                hasMore={subsidiariesQuery.hasNextPage}
                threshold={250}
                loadMore={async () => {
                  await subsidiariesQuery.fetchNextPage();
                }}
              >
                {(hasMore, failed, retry) => (
                  <div className="flex flex-col items-center justify-center">
                    {!failed && (
                      <>
                        {hasMore && <SpinLoading />}
                        {!hasMore && <span>конец списка</span>}
                      </>
                    )}
                    {failed && (
                      <div className="flex gap-2">
                        <span>При загрузке произошла ошибка</span>
                        <span
                          className="text-secondary hover:underline hover:cursor-pointer"
                          onClick={retry}
                        >
                          Попробовать снова
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </InfiniteScroll>
            </Scrollbars>
          )}
        </>
      )}
    </div>
  );
}
