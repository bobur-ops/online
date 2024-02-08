import CusInput from "@/components/ui/CusInput"
import FancyButton from "@/components/ui/FancyButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  reason: z.string({
  }).optional()
})

type FormData = z.infer<typeof schema>

type CancelProps = {
  onDone?: () => void
}

export default function Cancel({ onDone }: CancelProps) {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      reason: ''
    },
    resolver: zodResolver(schema)
  })

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (values: FormData) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
    console.log(values);
    setLoading(false)
    onDone?.()
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4">
        <div className="text-error text-center mb-1">Причина отмены</div>
        <Controller
          control={control}
          name="reason"
          render={({ field }) => (
            <CusInput {...field} fullWidth styles={{ root: { "--focus-outline-color": "rgb(var(--error-rgb))" } as any }} />
          )}
        />
      </div>
      <FancyButton loading={loading} className="mx-auto mt-4" style={{ "--color": "rgb(var(--error-rgb))" }}>Отменить заявку</FancyButton>
    </form>
  )
}