"use client";

import store from "@/store";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider as AntdMobileConfigProvider } from "antd-mobile";
import { IconContext } from "react-icons";
import ruRU_mobile from "antd-mobile/es/locales/ru-RU";
import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import Protected from "@/components/Protected";
import MainLayout from "@/components/MainLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function AppWrapper(props: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <AntdMobileConfigProvider locale={ruRU_mobile}>
          <IconContext.Provider value={{ className: "react-icon" }}>
            <Protected>
              <MainLayout>{props.children}</MainLayout>
            </Protected>
          </IconContext.Provider>
        </AntdMobileConfigProvider>
        <ToastContainer />
      </ReduxProvider>
    </QueryClientProvider>
  );
}
