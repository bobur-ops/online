import { toast } from "react-toastify";
import { useState } from "react";
import { AuthUserRole } from "@/lib/types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./Authorization.module.css";
import FancyButton from "@/components/ui/FancyButton";
import CusInput from "../ui/CusInput";

type Step2Props = {
  prev: () => void;
  next: (email: string) => void;
  role: null | AuthUserRole;
  subsidiaryId: null | string;
};

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Электронная почта должна быть строкой",
      required_error: "Необходимо ввести электронную почту",
    })
    .email("Неверный формат электронной почты"),
});

type FormData = z.infer<typeof schema>;

export default function Step2({ prev, next, role, subsidiaryId }: Step2Props) {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState } = useForm<FormData>({
    defaultValues: { email: "" },
    resolver: zodResolver(schema),
  });

  const checkEmail = async ({ email }: FormData) => {
    if (subsidiaryId == null) {
      toast("Филиал не выбран", { type: "error" });
      return;
    }
    if (role === null) {
      toast("Роль пользователя не выбрана", { type: "error" });
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/checkemail", {
      method: "post",
      body: JSON.stringify({
        email,
        role,
        subsidiaryId,
      }),
    });
    setLoading(false);
    if (res.status !== 200) {
      toast(res.status + " " + res.statusText, {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    const body = await res.json();
    if (!body.exist) {
      toast("Пользователь с такими почтой, ролью и филиалом не найден", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    next(email);
  };

  return (
    <main className={styles["step2"]}>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(checkEmail)}>
        <label>
          Эл.почта<span className={styles["error"]}>*</span>
        </label>

        <div className="mb-4">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <CusInput
                {...field}
                autoComplete="email"
                styles={{ root: { width: "100%" } }}
              />
            )}
          />
          {formState.errors.email && (
            <div className="text-center text-error mt-1">
              {formState.errors.email.message}
            </div>
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
