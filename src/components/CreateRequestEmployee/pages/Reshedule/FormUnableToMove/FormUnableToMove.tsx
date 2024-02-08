import Field from "../../../ui/Field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FancyButton from "@/components/ui/FancyButton";
import { Space } from "antd-mobile";
import { useCallback, useState } from "react";
import CusInput from "@/components/ui/CusInput";
import SpecificTimePicker from "./fragments/SpecificTimePicker";
import SpecificCalendarPicker from "./fragments/SpecificCalendarPicker";

const schema =  z.object({
  address: z.string().min(1, "Необходимо указать адрес"),
  date: z.date({ invalid_type_error: "Необходимо указать дату" }),
  time: z.union([z.literal('УТРО'), z.literal('ДЕНЬ'), z.literal('ВЕЧЕР'), z.date()], { invalid_type_error: "Необходимо указать время" })
});

type FormDataSubmit = z.infer<typeof schema>

type FormData = {
  address: string
  date: null | Date
  time: null | FormDataSubmit['time']
}

type FormUnableToMoveProps = {
  mobile?: boolean
  onDone?: () => void
}

export default function FormUnableToMove({ mobile, onDone }: FormUnableToMoveProps) {

  const { control, formState, handleSubmit } = useForm<FormData, void, FormDataSubmit>({
    defaultValues: {
      address: '',
      date: null,
      time: null,
    },
    resolver: zodResolver(schema)
  })

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (values: FormData) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
    console.log(values);
    setLoading(false)
    onDone?.();
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction="vertical" block>
        <Field>
          <label>Адрес<i>*</i></label>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <CusInput {...field} value={field.value ?? ''} fullWidth placeholder="Введите адрес" />
            )}
          />
          {formState.errors.address && (
            <div className="text-error text-center">{formState.errors.address.message}</div>
          )}
        </Field>
        <Field>
          <label>Дата<i>*</i></label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <SpecificCalendarPicker value={field.value} onChange={field.onChange} mobile={mobile} />
            )}
          />
          {formState.errors.date && (
            <div className="text-error text-center">{formState.errors.date.message}</div>
          )}
        </Field>
        <Field>
          <label>Время<i>*</i></label>
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <SpecificTimePicker value={field.value} onChange={field.onChange} />
            )}
          />
          {formState.errors.time && (
            <div className="text-error text-center">{formState.errors.time.message}</div>
          )}
        </Field>
        <FancyButton loading={loading} className="mx-auto mt-4">Перенести заявку</FancyButton>
      </Space>
    </form>
  );
}
