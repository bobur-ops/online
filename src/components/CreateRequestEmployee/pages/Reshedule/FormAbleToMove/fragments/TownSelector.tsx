import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { CustomError } from "@/lib/utils";
import CusSelect from "@/components/ui/CusSelect";
import { CusSelectProps } from "@/components/ui/CusSelect/CusSelect";

async function getTowns() {
  try {
    const res = await fetch("/api/get-towns");
    if (!res.ok) {
      throw new CustomError(
        "При загрузке списка городов произошла ошибка, статус ответа: " +
          res.status
      );
    }
    type Town = {
      id: number;
      name: string;
      x: number;
      y: number;
    };
    return ((await res.json()) as Town[]).sort((a, b) =>
      a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При загрузке списка городов произошла неизвестная ошибка");
  }
}

type TownSelectorProps =  Omit<CusSelectProps, 'options' | 'loading'>

export default function TownSelector(props: TownSelectorProps) {
  const townsQuery = useQuery({ queryKey: ["towns"], queryFn: getTowns });

  const options = useMemo(() => {
    if (!townsQuery.data) {
      return [];
    }
    return townsQuery.data.map((item) => ({
      label: item.name,
      value: item.id.toString(),
    }));
  }, [townsQuery.data]);

  return (
    <CusSelect
      {...props}
      loading={townsQuery.status === 'pending'}
      options={options}
    />
  );
}
