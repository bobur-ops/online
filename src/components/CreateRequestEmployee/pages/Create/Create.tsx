import FancyButton from "@/components/ui/FancyButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./Create.module.css";
import { z } from "zod";
import { Radio, Space } from "antd-mobile";
import LegalEntitySelector from "./ui/LegalEntitySelector";
import CustomerSelector from "./ui/CustomerSelector";
import Field from "../../ui/Field";
import clsx from "clsx";

const schema = z.object({
  legalEntityId: z.string({
    invalid_type_error: "Необходимо выбрать юридическое лицо",
    required_error: "Необходимо выбрать юридическое лицо",
  }),
  customerId: z.string({
    invalid_type_error: "Необходимо выбрать юридическое лицо",
    required_error: "Необходимо выбрать заказчика",
  }),
  requestType: z.string({
    invalid_type_error: "Необходимо выбрать тип заявки",
    required_error: "Необходимо выбрать тип заявки",
  }),
  inspectionType: z.string({
    invalid_type_error: "Необходимо выбрать тип заявки",
    required_error: "Необходимо выбрать тип осмотра",
  }),
});

type FormDataSubmit = z.infer<typeof schema>;
type FormData = {
  legalEntityId: string | null;
  customerId: string | null;
  requestType: string | null;
  inspectionType: string | null;
};

type CreateProps = {
  mobile?: boolean
  onDone?: () => void
}

export default function Create({ mobile, onDone }: CreateProps) {
  const { control, formState, handleSubmit } = useForm<
    FormData,
    void,
    FormDataSubmit
  >({
    defaultValues: {
      legalEntityId: null,
      customerId: null,
      requestType: null,
      inspectionType: null,
    },
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (values: FormDataSubmit) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
    console.log(values);
    setLoading(false)
    onDone?.();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction="vertical" block>
        <Field>
          <label>
            Юр.лицо<i>*</i>
          </label>
          <Controller
            control={control}
            name="legalEntityId"
            render={({ field }) => <LegalEntitySelector {...field} fullWidth mobile={mobile} />}
          />
          {formState.errors.legalEntityId && (
            <div className="text-error text-center">
              {formState.errors.legalEntityId.message}
            </div>
          )}
        </Field>
        <Field>
          <label>
            Заказчик<i>*</i>
          </label>
          <Controller
            control={control}
            name="customerId"
            render={({ field }) => <CustomerSelector {...field} fullWidth mobile={mobile} />}
          />
          {formState.errors.customerId && (
            <div className="text-error text-center">
              {formState.errors.customerId.message}
            </div>
          )}
        </Field>
        <div className={clsx(styles["bottom-grid"], mobile && "mobile")}>
          <div>
            <Field>
              <label>
                Тип заявки<i>*</i>
              </label>
              <Controller
                control={control}
                name="requestType"
                render={({ field }) => (
                  <Radio.Group value={field.value} onChange={field.onChange}>
                    <Space direction="vertical">
                      <Radio value="ОСАГО">ОСАГО</Radio>
                      <Radio value="ПВУ">ПВУ</Radio>
                    </Space>
                  </Radio.Group>
                )}
              />
            </Field>
            {formState.errors.requestType && (
              <div className="text-error text-center">
                {formState.errors.requestType.message}
              </div>
            )}
          </div>
          <div>
            <Field>
              <label>
                Тип осмотра<i>*</i>
              </label>
              <Controller
                control={control}
                name="inspectionType"
                render={({ field }) => (
                  <Radio.Group value={field.value} onChange={field.onChange}>
                    <Space direction="vertical">
                      <Radio value="ПЕРВИЧНЫЙ">Первичный осмотр</Radio>
                      <Radio value="ДОПОЛНИТЕЛЬНЫЙ">
                        Дополнительный осмотр
                      </Radio>
                    </Space>
                  </Radio.Group>
                )}
              />
            </Field>
            {formState.errors.inspectionType && (
              <div className="text-error text-center">
                {formState.errors.inspectionType.message}
              </div>
            )}
          </div>
        </div>
        <FancyButton loading={loading} className="mt-4 mx-auto">Подтвердить</FancyButton>
      </Space>
    </form>
  );
}
