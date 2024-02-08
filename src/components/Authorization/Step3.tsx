import { toast } from "react-toastify";
import styles from "./Authorization.module.css";
import { useState } from "react";
import FancyButton from "@/components/ui/FancyButton";
import { AuthUserRole, Credentials } from "@/lib/types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CusPassword from "@/components/ui/CusPassword";

type Step3Props = {
  subsidiaryId: null | string;
  role: null | AuthUserRole;
  email: null | string;
  prev: () => void;
  next: (token: string, credentials: Credentials) => void;
};

const schema = z.object({
  password: z.string({
    invalid_type_error: "Пароль должен быть строкой",
    required_error: "Необходимо ввести пароль"
  }),
});

type FormData = z.infer<typeof schema>;

export default function Step3({ email, role, subsidiaryId, prev, next }: Step3Props) {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState } = useForm<FormData>({
    defaultValues: { password: "" },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    if (subsidiaryId == null) {
      toast("Филиал не выбран", { type: "error" })
      return;
    }
    if (role === null) {
      toast("Роль пользователя не выбрана", { type: "error" })
      return;
    }
    if (email === null) {
      toast("Электронная почта не указана", { type: "error" })
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signin", {
      method: "post",
      body: JSON.stringify({ email, password: values.password }),
    });
    setLoading(false);
    if (res.status === 401) {
      toast("Пароль указан неверно", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    if (res.status !== 200) {
      toast(res.status + " " + res.statusText, {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    const body = await res.json();
    next(body.token, body.credentials);
  };

  return (
    <main className={styles["step2"]}>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Пароль<span className={styles["error"]}>*</span>
        </label>

        <div className="mb-4">
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <CusPassword {...field} classes={{ root: "mb-4" }} styles={{ root: { width: '100%' }}} />
            )}
          />
          {formState.errors.password && (
            <span className="text-center text-error mt-1">{formState.errors.password.message}</span>
          )}
        </div>

        <FancyButton className="mx-auto" loading={loading}>Войти</FancyButton>
      </form>
      <button onClick={() => prev()} className={styles["underground"]}>
        назад
      </button>
    </main>
  );
}
