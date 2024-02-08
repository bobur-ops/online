import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { CustomError } from "@/lib/utils";
import CusSelect from "../ui/CusSelect";
import { CusSelectProps } from "../ui/CusSelect/CusSelect";

async function getSubsidiaries(townId: string) {
  try {
    const res = await fetch(`/api/get-town-subsidiaries/${townId}`);
    if (!res.ok) {
      throw new CustomError(
        "При загрузке списка филиалов произошла ошибка, статус ответа: " +
          res.status
      );
    }
    type Subsidiary = {
      id: number;
      townId: number;
      name: string;
    };
    return (await res.json()) as Subsidiary[];
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При загрузке списка городов произошла неизвестная ошибка");
  }
}

type TownSelectorProps = Omit<CusSelectProps, "options" | "loading"> & {
  townId: string;
};

export default function SubsidiarySelector({
  townId,
  ...props
}: TownSelectorProps) {
  const subsidiariesQuery = useQuery({
    queryKey: ["subsidiaries", townId],
    queryFn: () => getSubsidiaries(townId),
  });

  const options = useMemo(() => {
    if (!subsidiariesQuery.data) {
      return [];
    }
    return subsidiariesQuery.data.map((item) => ({
      label: item.name,
      value: item.id.toString(),
    }));
  }, [subsidiariesQuery]);

  return (
    <>
      <CusSelect
        {...props}
        loading={subsidiariesQuery.status === "pending"}
        options={options}
      />
      {subsidiariesQuery.status === "error" && (
        <div className="text-error mt-1 text-center">
          {subsidiariesQuery.error.message}
        </div>
      )}
    </>
  );
}
