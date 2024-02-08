"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { selectCredentials, setCredentials } from "@/store/authSlice";
import Authorization from "../Authorization";
import { ReactNode, useEffect } from "react";
import { useAccessToken } from "@/services/accessToken";
import { useQuery } from "@tanstack/react-query";
import { CustomError } from "@/lib/utils";
import { Credentials } from "@/lib/types";
import LoadingFullScreen from "../LoadingFullScreen";

async function checkToken(token: string | null) {
  if (token === null) {
    return null;
  }
  try {
    const res = await fetch("/api/auth/checktoken", {
      method: "POST",
      body: JSON.stringify({
        token,
      }),
    });
    if (!res.ok) {
      if (res.status === 401 || res.status === 400) {
        throw new CustomError((await res.json()).message);
      }
    }
    return (await res.json()) as NonNullable<Credentials>;
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При проверке токена произошла неизвестная ошибка");
  }
}

type ProtectedProps = {
  children: ReactNode;
};

export default function Protected({ children }: ProtectedProps) {
  const accessToken = useAccessToken();
  const credentials = useAppSelector(selectCredentials);
  const dispatch = useAppDispatch();
  const checkTokenQuery = useQuery({
    queryKey: ["checktoken", accessToken],
    queryFn: () => checkToken(accessToken),
  });

  useEffect(() => {
    if (checkTokenQuery.status === "error") {
      dispatch(setCredentials(null));
    }
    if (checkTokenQuery.status === "success") {
      dispatch(setCredentials(checkTokenQuery.data));
    }
  }, [checkTokenQuery.status]);

  if (checkTokenQuery.status === "pending") {
    return <LoadingFullScreen message="Проверка авторизации" />;
  }

  if (!credentials) {
    return <Authorization />;
  }

  return children;
}
