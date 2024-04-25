import { z } from "zod";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import styles from "./Form.module.css";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Field from "./ui/Field";
import CusInput from "../ui/CusInput";
import FancyButton from "../ui/FancyButton";
import ModelSelector from "./fragments/ModelSelector";
import MarkSelector from "./fragments/MarkSelector";
import { useCallback, useReducer, useState } from "react";
import FilePicker from "./fragments/FilePicker";

const schema = z.object({
  lastName: z.string().min(1, "Необходимо указать фамилию"),
  firstName: z.string().min(1, "Необходимо указать имя"),
  patronymic: z.string(),
  phone: z
    .string()
    .refine(
      (value) => isValidPhoneNumber(value, "RU"),
      "Телефон указан неверно"
    ),
  email: z.string().optional(),
  mark: z.string({
    invalid_type_error: "Необходимо указать марку",
  }),
  model: z.string().optional().nullable(),
  polisNumber: z.string().optional(),
  deptNumber: z.string().optional(),
  gosNumber: z.string().min(1, "Необходимо ввести гос. номер"),
  comment: z.string().optional(),
  filesCount: z.number(),
});

type FormDataSubmit = z.infer<typeof schema>;
type FormData = Omit<FormDataSubmit, "mark" | "model"> & {
  mark: string | null;
  model: string | null;
};

type FormProps = {
  /** switch to mobile version, true by default */
  mobile?: boolean;
  onDone?: () => void;
};

/**
 * Модальное окно создания предварительной записи
 */
export default function Form({ mobile, onDone }: FormProps) {
  const { control, formState, handleSubmit, setValue } = useForm<
    FormData,
    void,
    FormDataSubmit
  >({
    mode: "onSubmit",
    defaultValues: {
      lastName: "",
      firstName: "",
      patronymic: "",
      phone: "+7",
      email: "",
      mark: null,
      model: null,
      polisNumber: "",
      deptNumber: "",
      gosNumber: "",
      comment: "",
      filesCount: 0,
    },
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const [files, setFiles] = useReducer((state: File[], action: File[]) => {
    setValue("filesCount", action.length);
    return action;
  }, []);

  const onSubmit = useCallback(
    async (values: FormDataSubmit) => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
      values.phone = parsePhoneNumber(values.phone, "RU").number;
      console.log(values);
      console.log(files.map((item) => item.name));
      setLoading(false);
      onDone?.();
    },
    [files]
  );

  return (
    <form
      className={clsx(styles["form"], mobile && "mobile")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field>
        <label>
          Фамилия<i>*</i>
        </label>
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <CusInput {...field} placeholder="Иванов" fullWidth />
          )}
        />
        {formState.errors.lastName && (
          <div className="text-error text-center">
            {formState.errors.lastName.message}
          </div>
        )}
      </Field>
      <Field>
        <label>
          Имя<i>*</i>
        </label>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <CusInput {...field} placeholder="Иван" fullWidth />
          )}
        />
        {formState.errors.firstName && (
          <div className="text-error text-center">
            {formState.errors.firstName.message}
          </div>
        )}
      </Field>
      <Field>
        <label>Отчество</label>
        <Controller
          control={control}
          name="patronymic"
          render={({ field }) => (
            <CusInput {...field} placeholder="Иван" fullWidth />
          )}
        />
        {formState.errors.patronymic && (
          <div className="text-error text-center">
            {formState.errors.patronymic.message}
          </div>
        )}
      </Field>
      <Field>
        <label>
          Телефон<i>*</i>
        </label>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => <CusInput {...field} fullWidth />}
        />
        {formState.errors.phone && (
          <div className="text-error text-center">
            {formState.errors.phone.message}
          </div>
        )}
      </Field>
      <Field>
        <label>Эл.почта</label>
        <Controller
          control={control}
          name="email"
          render={({ field }) => <CusInput {...field} fullWidth />}
        />
        {formState.errors.email && (
          <div className="text-error text-center">
            {formState.errors.email.message}
          </div>
        )}
      </Field>
      <Field>
        <label>
          Марка<i>*</i>
        </label>
        <Controller
          control={control}
          name="mark"
          render={({ field }) => (
            <MarkSelector
              value={field.value}
              onChange={field.onChange}
              fullWidth
              mobile={mobile}
            />
          )}
        />
        {formState.errors.mark && (
          <div className="text-error text-center">
            {formState.errors.mark.message}
          </div>
        )}
      </Field>
      <Field>
        <label>Модель</label>
        <Controller
          control={control}
          name="model"
          render={({ field }) => (
            <ModelSelector
              value={field.value}
              onChange={field.onChange}
              fullWidth
              mobile={mobile}
            />
          )}
        />
        {formState.errors.model && (
          <div className="text-error text-center">
            {formState.errors.model.message}
          </div>
        )}
      </Field>
      <Field>
        <label>Номер полиса</label>
        <Controller
          control={control}
          name="polisNumber"
          render={({ field }) => (
            <CusInput {...field} placeholder="XXX1234567890" fullWidth />
          )}
        />
        {formState.errors.polisNumber && (
          <div className="text-error text-center">
            {formState.errors.polisNumber.message}
          </div>
        )}
      </Field>
      <Field>
        <label>Номер убытка</label>
        <Controller
          control={control}
          name="deptNumber"
          render={({ field }) => <CusInput {...field} fullWidth />}
        />
        {formState.errors.deptNumber && (
          <div className="text-error text-center">
            {formState.errors.deptNumber.message}
          </div>
        )}
      </Field>
      <Field>
        <label>
          Гос. номер<i>*</i>
        </label>
        <Controller
          control={control}
          name="gosNumber"
          render={({ field }) => (
            <CusInput {...field} placeholder="A001AA77" fullWidth />
          )}
        />
        {formState.errors.gosNumber && (
          <div className="text-error text-center">
            {formState.errors.gosNumber.message}
          </div>
        )}
      </Field>
      <Field>
        <label>Комментарий</label>
        <Controller
          control={control}
          name="comment"
          render={({ field }) => <CusInput {...field} fullWidth />}
        />
        {formState.errors.comment && (
          <div className="text-error text-center">
            {formState.errors.comment.message}
          </div>
        )}
      </Field>
      <FilePicker value={files} onChange={setFiles} mobile={mobile} />
      <FancyButton className="justify-self-center mt-4" loading={loading}>
        Сохранить
      </FancyButton>
    </form>
  );
}
