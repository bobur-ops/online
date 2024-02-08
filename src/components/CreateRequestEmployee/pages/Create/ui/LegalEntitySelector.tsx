import CusSelect, { CusSelectProps } from "@/components/ui/CusSelect/CusSelect";
import { CustomError, authFetch } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { forwardRef, useMemo } from "react";

async function getAllLegalEntities() {
  try {
    const res = await authFetch("/api/get-legal-entities", { method: "GET" });
    if (!res.ok) {
      throw new CustomError(
        `При загрузке списка юридических лиц произошла ошибка, статус ответа: ${res.status}`
      );
    }
    return (await res.json()) as Array<{ id: string; name: string }>;
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error(
      "При загрузке списка юридических лиц произошла непредвиденная ошибка"
    );
  }
}

const LegalEntitySelector = forwardRef<
  HTMLInputElement,
  Omit<CusSelectProps, "options" | "loading">
>((props, ref) => {
  const legalEntitiesQuery = useQuery({
    queryKey: ["legal-entities"],
    queryFn: getAllLegalEntities,
  });

  const legalEntityOptions = useMemo(() => {
    return (
      legalEntitiesQuery.data?.map((item) => ({
        label: item.name,
        value: item.id.toString(),
      })) ?? []
    );
  }, [legalEntitiesQuery.data]);

  return (
    <>
      <CusSelect
        ref={ref}
        {...props}
        options={legalEntityOptions}
        loading={legalEntitiesQuery.status === "pending"}
      />
      {legalEntitiesQuery.error && (
        <div className="text-error text-center">
          {legalEntitiesQuery.error.message}
        </div>
      )}
    </>
  );
});

export default LegalEntitySelector;
