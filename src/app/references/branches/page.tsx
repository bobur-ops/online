import { useState } from "react";
import BranchesTable from "./components/BranchesTable";

export default function Page() {
  return (
    <div className="px-2 py-2 md:py-11 h-full">
      <title>Филиалы</title>
      <BranchesTable />
    </div>
  );
}
