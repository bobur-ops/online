"use client";

import CreatePreEntry from "@/components/CreatePreEntry";
import CreateRequestEmployee from "@/components/CreateRequestEmployee";
import SubsidiariesTable from "@/components/SubsidiariesTable";
import FancyButton from "@/components/ui/FancyButton";
import { Space } from "antd-mobile";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Dashboard() {
  const [openCreateRequest, setOpenCreateRequest] = useState(false);
  const [openCreatePreEntry, setOpenCreatePreEntry] = useState(false);
  const mobile = useMediaQuery("(max-width: 970px)");

  return (
    <div className="p-2">
      <title>Главная страница</title>
      <Space direction="vertical" block>
        <FancyButton onClick={() => setOpenCreateRequest(true)}>
          Создать заявку
        </FancyButton>
        {/* <FancyButton onClick={() => setOpenCreatePreEntry(true)}>
          Создать Предварительную запись
        </FancyButton> */}
        <SubsidiariesTable
          setPreEntryModal={setOpenCreatePreEntry}
          mobile={mobile}
        />
      </Space>
      <CreateRequestEmployee
        open={openCreateRequest}
        onClose={() => setOpenCreateRequest(false)}
        mobile={mobile}
      />
      <CreatePreEntry
        open={openCreatePreEntry}
        onClose={() => setOpenCreatePreEntry(false)}
        mobile={mobile}
      />
    </div>
  );
}
