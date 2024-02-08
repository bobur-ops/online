"use client";

import CusSearchBar from "@/components/ui/CusSearchBar";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/CustomTable";
import { CustomError } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Checkbox, InfiniteScroll, SpinLoading } from "antd-mobile";

import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { PiMinusCircleFill } from "react-icons/pi";
import { useDebounce } from "usehooks-ts";
import _ from "lodash";
import Scrollbars from "react-custom-scrollbars-2";

export type CompanyType = {
  id: number;
  name: string;
};

async function getCompanies(offset: number, limit: number, search: string) {
  try {
    const res = await fetch(
      `/api/get-insurance-companies?search=${search}&offset=${offset}&limit=${limit}`
    );
    if (!res.ok) {
      throw new CustomError(
        "При загрузке списка филиалов произошла ошибка, статус ответа: " +
          res.status
      );
    }

    return (await res.json()) as CompanyType[];
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При загрузке списка городов произошла неизвестная ошибка");
  }
}

const CompaniesTable = () => {
  const [search, setSearch] = useState("");
  const searchDebounced = useDebounce(search, 500);
  const [limit, setLimit] = useState(20);
  const [selected, setSelected] = useState<string[]>([]);

  const companyQuery = useInfiniteQuery({
    queryKey: ["all-companies", limit, searchDebounced],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getCompanies(pageParam, limit, searchDebounced),
    getNextPageParam(lastPage, allPages, lastPageParam, allPageParams) {
      return lastPage.length < limit ? null : lastPageParam + limit;
    },
    getPreviousPageParam(firstPage, allPages, firstpageParam, allPageParams) {
      if (firstpageParam - limit < 0) {
        return null;
      }
      return firstpageParam - limit;
    },
  });

  useEffect(() => {
    if (companyQuery.data) {
      const ids = companyQuery.data.pages
        .flat()
        .map((item) => item.id.toString());
      setSelected((prev) => {
        return _.intersection(prev, ids);
      });
    }
  }, [companyQuery.data]);

  return (
    <div className="px-5 py-7 rounded-3xl bg-white space-y-[18px] h-[50vh] flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="text-[28px]">Страховые компании</div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
          <div className="divide-x-2 divide-[#DCDBDD] flex h-[38px] border-2 border-[#DCDBDD] rounded-xl">
            <div className="cursor-pointer flex-1 flex items-center gap-2.5 py-1.5 px-6">
              <FcPlus />
              Добавить
            </div>
            <div className="cursor-pointer flex flex-1 items-center gap-2.5 py-1.5 px-6">
              <PiMinusCircleFill color="red" />
              Удалить
            </div>
          </div>
          <div className="">
            <CusSearchBar
              classes={{ root: "!h-[38px] !rounded-xl" }}
              placeholder="Поиск"
              value={search}
              onChange={setSearch}
            />
          </div>
        </div>
      </div>
      {companyQuery.isLoading && (
        <div className="flex items-center justify-center flex-1">
          <SpinLoading />
        </div>
      )}
      {companyQuery.isError && (
        <div className="flex items-center justify-center flex-1">
          <span>{companyQuery.error.message}</span>
        </div>
      )}
      {companyQuery.isSuccess && (
        <>
          {companyQuery.data.pages[0].length === 0 && (
            <div className={"flex items-center justify-center flex-1"}>
              <span>Ничего не найдено</span>
            </div>
          )}
          {companyQuery.data.pages[0].length !== 0 && (
            <Scrollbars className="scrollbars" autoHide>
              <Table>
                <Thead>
                  <Tr>
                    <Th>{/* <div className="w-2" /> */}</Th>
                    <Th align="left">№</Th>
                    <Th colSpan={2} align="left">
                      Название
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {companyQuery.data.pages.flat().map((company, index) => (
                    <Tr key={index}>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td align="left">{company.id}</Td>
                      <Td align="left">{company.name}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <InfiniteScroll
                hasMore={companyQuery.hasNextPage}
                threshold={250}
                loadMore={async () => {
                  await companyQuery.fetchNextPage();
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
};

export default CompaniesTable;
