"use client";

import { Space } from "antd-mobile";
import JobsTable, { JobType } from "./components/JobsTable";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import EditJobForm from "./components/EditJobForm";

export default function Page() {
  const mobile = useMediaQuery("(max-width: 970px)");

  const [currentJob, setCurrentJob] = useState<null | JobType>(null);

  return (
    <div className="px-2 py-12">
      <title>Работы</title>
      <Space block direction="vertical">
        <JobsTable
          mobile={mobile}
          onEditJob={(value) => setCurrentJob(value)}
        />
      </Space>
      {!!currentJob && (
        <EditJobForm
          jobDefault={currentJob}
          open={!!currentJob}
          onClose={() => setCurrentJob(null)}
          mobile={mobile}
        />
      )}
    </div>
  );
}
