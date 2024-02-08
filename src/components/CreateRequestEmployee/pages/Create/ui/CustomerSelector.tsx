import CusSelect, { CusSelectProps } from "@/components/ui/CusSelect/CusSelect";
import { CustomError, authFetch } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { forwardRef, useMemo } from "react";

async function getAllCustomers() {
  try {
    const res = await authFetch("/api/get-customers", { method: "GET" });
    if (!res.ok) {
      throw new CustomError(
        `При загрузке списка заказчиков произошла ошибка, статус ответа: ${res.status}`
      );
    }
    return (await res.json()) as Array<{ id: string; name: string }>;
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error(
      "При загрузке списка заказчиков произошла непредвиденная ошибка"
    );
  }
}

const CustomerSelector = forwardRef<
  HTMLInputElement,
  Omit<CusSelectProps, "options" | "loading">
>((props, ref) => {
  const customersQuery = useQuery({
    queryKey: ["customers"],
    queryFn: getAllCustomers,
  });

  const customerOptions = useMemo(() => {
    return (
      customersQuery.data?.map((item) => ({
        label: item.name,
        value: item.id.toString(),
      })) ?? []
    );
  }, [customersQuery.data]);

  return (
    <>
      <CusSelect
        ref={ref}
        {...props}
        options={customerOptions}
        loading={customersQuery.status === "pending"}
      />
      {customersQuery.error && (
        <div className="text-error text-center">
          {customersQuery.error.message}
        </div>
      )}
    </>
  );
});

CustomerSelector.displayName = "CustomerSelector";

export default CustomerSelector;
