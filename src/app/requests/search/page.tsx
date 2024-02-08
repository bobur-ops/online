import ResultTable from "./components/ResultTable";
import SearchForm from "./components/SearchForm";

export default function Page() {
  return (
    <div className="px-2 py-12 h-full">
      <title>Расширенный поиск заявок</title>
      <div className="p-[30px] flex flex-col rounded-[25px] h-full bg-white space-y-5">
        <SearchForm />
        <ResultTable />
      </div>
    </div>
  );
}
