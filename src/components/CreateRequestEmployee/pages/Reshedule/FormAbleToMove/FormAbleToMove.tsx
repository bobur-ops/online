import Field from "../../../ui/Field";
import TownSelector from "./fragments/TownSelector";
import SubsidiariesSelector from "./fragments/SubsidiariesSelector";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Space } from "antd-mobile";
import FancyButton from "@/components/ui/FancyButton";
import { useCallback, useState } from "react";

const schema =  z.object({
  townId: z.string({
    invalid_type_error: "Необходимо выбрать город",
    required_error: "Необходимо выбрать город"
  }),
  subsidiaryId: z.string({
    invalid_type_error: "Необходимо выбрать филиал",
    required_error: "Необходимо выбрать филиал"
  }),
});

type FormDataSubmit = {
  townId: null | string
  subsidiaryId: null | string
}

type FormData = z.infer<typeof schema>

type FormAbleToMoveProps = {
  mobile?: boolean
  onDone?: () => void
}

export default function FormAbleToMove({ mobile, onDone }: FormAbleToMoveProps) {
  const { control, watch, formState, handleSubmit } = useForm<FormDataSubmit, void, FormData>({
    defaultValues: {
      townId: null,
      subsidiaryId: null
    },
    resolver: zodResolver(schema)
  })

  const [loading, setLoading] = useState(false);
  const townId = watch("townId");

  const onSubmit = useCallback(async (values: FormDataSubmit) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
    console.log(values);
    setLoading(false);
    onDone?.();
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction="vertical" block>
        <Field>
          <label>Город<i>*</i></label>
          <Controller
            control={control}
            name="townId"
            render={({ field }) => (
              <TownSelector value={field.value} onChange={field.onChange} fullWidth mobile={mobile} />
            )}
          />
          {formState.errors.townId && (
            <div className="text-error text-center">{formState.errors.townId.message}</div>
          )}
        </Field>
        <Field>
          <label>Филиал<i>*</i></label>
          <Controller
            control={control}
            name="subsidiaryId"
            render={({ field }) => (
              <SubsidiariesSelector value={field.value} onChange={field.onChange} townId={townId} mobile={mobile} />
            )}
          />
          {formState.errors.subsidiaryId && (
            <div className="text-error text-center">{formState.errors.subsidiaryId.message}</div>
          )}
        </Field>
        <FancyButton loading={loading} className="mt-4 mx-auto">Перенести заявку</FancyButton>
      </Space>
    </form>
  );
}
