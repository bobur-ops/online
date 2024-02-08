import CusSelect from "@/components/ui/CusSelect";
import { CusSelectProps } from "@/components/ui/CusSelect/CusSelect";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type Model = {
  id: string,
  name: string
}

async function getAllModels() {
  return new Promise<Model[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: '0', name: "Model 1" },
        { id: '1', name: "Model 2" }
      ])
    }, 1000);
  })
}

type ModelSelectorProps = Omit<CusSelectProps, 'options'>

export default function ModelSelector(props: ModelSelectorProps) {
  const modelsQuery = useQuery({ queryKey: ['models'], queryFn: getAllModels })

  const modelsOptions = useMemo(() => {
    return (
      modelsQuery.data?.map((item) => ({
        label: item.name,
        value: item.id.toString(),
      })) ?? []
    );
  }, [modelsQuery.data]);
  
  
  return (
    <>
      <CusSelect
        {...props}
        options={modelsOptions}
      />
      {modelsQuery.error && (
        <div className="text-error text-center">
          {modelsQuery.error.message}
        </div>
      )}
    </>
  ) 
}
