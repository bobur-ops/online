import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./JobsTable.module.css";
import { CustomError } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Checkbox, InfiniteScroll, SpinLoading } from "antd-mobile";

import Scrollbars from "react-custom-scrollbars-2";
import { IoIosCheckmark } from "react-icons/io";
import { useDebounce } from "usehooks-ts";
import _ from "lodash";
import CusSearchBar from "@/components/ui/CusSearchBar";

export type JobType = {
  id: number;
  name: string;
  stage: string;
  isActive: boolean;
  isRegions: boolean;
  isTelegramma: boolean;
  period: string;
  tarrif: string;
};

async function getJobs(offset: number, limit: number, search: string) {
  try {
    const res = await fetch(
      `/api/get-jobs?search=${search}&offset=${offset}&limit=${limit}`
    );
    if (!res.ok) {
      throw new CustomError(
        "При загрузке списка филиалов произошла ошибка, статус ответа: " +
          res.status
      );
    }

    return (await res.json()) as JobType[];
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При загрузке списка городов произошла неизвестная ошибка");
  }
}

type JobsTableProps = ComponentPropsWithoutRef<"div"> & {
  mobile?: boolean;
  onEditJob: (job: JobType) => void;
};

export default function JobsTable({
  mobile,
  onEditJob,
  ...divProps
}: JobsTableProps) {
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

  const jobsQuery = useInfiniteQuery({
    queryKey: ["all-jobs", limit, searchDebounced],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getJobs(pageParam, limit, searchDebounced),
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
    if (jobsQuery.data) {
      const ids = jobsQuery.data.pages.flat().map((item) => item.id.toString());
      setSelected((prev) => {
        return _.intersection(prev, ids);
      });
    }
  }, [jobsQuery.data]);

  return (
    <div {...divProps} className={clsx(styles["root"], mobile && "mobile")}>
      <div className={styles["header"]}>
        <h2>Работы</h2>
        <CusSearchBar
          classes={{ root: styles["search"] }}
          placeholder="Поиск"
          value={search}
          onChange={setSearch}
        />
      </div>
      {jobsQuery.isLoading && (
        <div className={styles["message"]}>
          <SpinLoading />
        </div>
      )}
      {jobsQuery.isError && (
        <div className={styles["message"]}>
          <span>{jobsQuery.error.message}</span>
        </div>
      )}
      {jobsQuery.isSuccess && (
        <>
          {jobsQuery.data.pages[0].length === 0 && (
            <div className={styles["message"]}>
              <span>Ничего не найдено</span>
            </div>
          )}
          {jobsQuery.data.pages[0].length !== 0 && (
            <Scrollbars className={styles["body"]} autoHide>
              {mobile && (
                <div className={styles["mobile-list"]}>
                  {jobsQuery.data.pages.flat().map((subsidiary, index) => (
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
                          <div>{subsidiary.stage}</div>
                          <div>{subsidiary.period}</div>
                          <div>{subsidiary.tarrif}</div>
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
                      <th>Этап</th>
                      <th>Активен</th>
                      <th>По области</th>
                      <th>Телеграмма</th>
                      <th>Продолжительность</th>
                      <th>Тариф</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobsQuery.data.pages.flat().map((job, index) => (
                      <tr
                        key={index}
                        className="cursor-pointer hover:bg-blue-50"
                        onClick={() => onEditJob(job)}
                      >
                        <td align="center">
                          <Checkbox className={styles["checkbox"]} />
                        </td>
                        <td align="center">{job.id}</td>
                        <td align="center">{job.name}</td>
                        <td align="center">{job.stage}</td>
                        <td align="center">
                          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#0C77F8]">
                            <IoIosCheckmark color="white" />
                          </div>
                        </td>
                        <td align="center">
                          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#0C77F8]">
                            <IoIosCheckmark color="white" />
                          </div>
                        </td>
                        <td align="center">
                          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#0C77F8]">
                            <IoIosCheckmark color="white" />
                          </div>
                        </td>
                        <td align="center">{job.period}</td>
                        <td align="center">{job.tarrif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <InfiniteScroll
                hasMore={jobsQuery.hasNextPage}
                threshold={250}
                loadMore={async () => {
                  await jobsQuery.fetchNextPage();
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
