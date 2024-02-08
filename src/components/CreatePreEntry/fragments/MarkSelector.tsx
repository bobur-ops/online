import CusSelect from "@/components/ui/CusSelect";
import { CusSelectProps } from "@/components/ui/CusSelect/CusSelect";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type Mark = {
  id: string,
  name: string
}

async function getAllMarks() {
  return new Promise<Mark[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: '0', name: "Mark 1" },
        { id: '1', name: "Mark 2" }
      ])
    }, 1000);
  })
}

type MarkSelectorProps = Omit<CusSelectProps, 'options'>

export default function MarkSelector(props: MarkSelectorProps) {
  const marksQuery = useQuery({ queryKey: ['marks'], queryFn: getAllMarks })

  const marksOptions = useMemo(() => {
    return (
      marksQuery.data?.map((item) => ({
        label: item.name,
        value: item.id.toString(),
      })) ?? []
    );
  }, [marksQuery.data]);
  
  
  return (
    <>
      <CusSelect
        {...props}
        options={marksOptions}
      />
      {marksQuery.error && (
        <div className="text-error text-center">
          {marksQuery.error.message}
        </div>
      )}
    </>
  )
}
