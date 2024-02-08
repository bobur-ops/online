// import { useIsMobile } from "@/lib/utils";
// import { Empty, Select } from "antd";
// import { useEffect, useMemo, useState } from "react";
// import { useDebounce } from "usehooks-ts";
// import { Picker, SearchBar } from "antd-mobile";
// import styles from './CustomSelector.module.css';
// import clsx from "clsx";

// type CustomSelectorProps = {
//   value: string | null;
//   onChange: (value: string | null) => void;
//   status: "pending" | "error" | "success";
//   options: Array<{ label: string; value: string }>;
//   placeholder: string
// };

// export default function CustomSelector({
//   value,
//   onChange,
//   status,
//   options,
//   placeholder,
// }: CustomSelectorProps) {
//   const [visible, setVisible] = useState(false);
//   const [search, setSearch] = useState("");
//   const searchDebounced = useDebounce(search, 500);
//   const isMobile = useIsMobile();

//   const filteredOptions = useMemo(() => {
//     if (searchDebounced === '') {
//       return options;
//     }
//     return options
//       .filter((item) => item.label.toUpperCase().includes(searchDebounced.toUpperCase()))
//       .sort((a,b) => a.label.toUpperCase().localeCompare(b.label.toUpperCase()))
//   }, [options, searchDebounced])

//   // drop value if it is not in options
//   useEffect(() => {
//     if (!options.find((item) => item.value === value)) {
//       onChange(null)
//     }
//   }, [options])

//   const isDisabled = status === 'error'

//   return (
//     <>
//       <Select
//         disabled={isDisabled}
//         loading={status === "pending"}
//         className={clsx(styles["custom-select"], isMobile && "mobile")}
//         placeholder={placeholder}
//         onClick={
//           isMobile && !isDisabled
//             ? () => setVisible(true)
//             : undefined
//         }
//         open={isMobile ? false : undefined}
//         value={value === "" ? null : value}
//         showSearch={!isMobile}
//         searchValue={search}
//         onSearch={setSearch}
//         defaultActiveFirstOption={false}
//         filterOption={false}
//         onChange={(value) => onChange(value)}
//         options={filteredOptions}
//       />
//       {isMobile && (
//         <Picker

//           loading={status === "pending"}
//           style={
//             {
//               "--title-font-size": "1rem",
//               "--header-button-font-size": "13px",
//               "--item-font-size": "1rem",
//               "--item-height": "30px",
//               "--picker-margin-bottom": "65px",
//             } as any
//           }
//           popupClassName={styles["mobile-popup"]}
//           columns={[filteredOptions]}
//           cancelText="Назад"
//           confirmText="Выбрать"
//           title={
//             <div>
//               <b>{placeholder}</b>
//               <SearchBar
//                 style={{ "--height": "48px", "--border-radius": "10px" }}
//                 value={search}
//                 onChange={setSearch}
//                 className={styles["picker-search-bar"]}
//               />
//             </div>
//           }
//           onConfirm={(value) => onChange(value[0] as string)}
//           visible={visible}
//           onClose={() => {
//             setVisible(false);
//           }}
//         />
//       )}
//     </>
//   );
// }


export {}