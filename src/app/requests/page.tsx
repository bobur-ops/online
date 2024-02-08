import RequestsTable from "./components/RequestsTable";

export default function Page() {
  return (
    <div className="px-2 py-3 md:py-12">
      <title>Заявки</title>
      <RequestsTable />
    </div>
  );
}
