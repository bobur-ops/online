import { CustomError } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Radio, Space, SpinLoading } from "antd-mobile";
import styles from "./SubsidiariesSelector.module.css";
import Scrollbars from "react-custom-scrollbars-2";
import clsx from "clsx";

async function getSubsidiaries(townId: string | null) {
  if (townId === null) {
    return [];
  }
  try {
    const res = await fetch(`/api/get-town-subsidiaries/${townId}`);
    if (!res.ok) {
      throw new CustomError(
        "При загрузке списка филиалов произошла ошибка, статус ответа: " +
          res.status
      );
    }
    type Subsidiary = {
      id: number;
      townId: number;
      name: string;
      address: null | string;
      metro: null | string;
      phone: null | string;
      email: null | string;
    };
    return (await res.json()) as Subsidiary[];
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw e;
    }
    throw new Error("При загрузке списка городов произошла неизвестная ошибка");
  }
}

type SubsidiariesTableProps = {
  townId: string | null;
  value: null | string;
  onChange: (value: null | string) => void;
  mobile?: boolean;
};

export default function SubsidiariesTable({
  townId,
  value,
  onChange,
  mobile,
}: SubsidiariesTableProps) {
  const subsidiariesQuery = useQuery({
    queryKey: ["subsidiaries", townId],
    queryFn: () => getSubsidiaries(townId),
  });

  const message = (
    <>
      {townId === null && (
        <div className={styles["message"]}>
          <div>Чтобы выбрать филиал, для начала выберите город</div>
        </div>
      )}
      {townId !== null && (
        <>
          {subsidiariesQuery.status === "pending" && (
            <div className={styles["message"]}>
              <SpinLoading style={{ "--size": "50px" }} />
            </div>
          )}
          {subsidiariesQuery.status === "error" && (
            <div className={styles["message"]}>
              <div className="text-error">
                {subsidiariesQuery.error.message}
              </div>
            </div>
          )}
          {subsidiariesQuery.status === "success" &&
            subsidiariesQuery.data.length === 0 && (
              <div className={styles["message"]}>
                <div>Ничего не найдено</div>
              </div>
            )}
        </>
      )}
    </>
  );

  return (
    <div className={clsx(styles["root"], mobile && "mobile")}>
      {!mobile && (
        <Scrollbars autoHide autoHeight autoHeightMax={"var(--max-height)"}>
          {message}
          {townId !== null &&
            subsidiariesQuery.status === "success" &&
            subsidiariesQuery.data.length !== 0 && (
              <table className={styles["table"]}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Название</th>
                    <th>Адрес</th>
                    <th>Метро</th>
                    <th>Телефон</th>
                    <th>Эл. почта</th>
                  </tr>
                </thead>
                <tbody>
                  {subsidiariesQuery.data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Radio
                          checked={value === item.id.toString()}
                          onChange={() => onChange(item.id.toString())}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.metro}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
        </Scrollbars>
      )}
      {mobile && (
        <div className={styles["mobile-wrapper"]}>
          {message}
          <Space direction="vertical" block>
            {townId !== null &&
              subsidiariesQuery.status === "success" &&
              subsidiariesQuery.data.map((item) => (
                <div
                  key={item.id}
                  className={styles["mobile-item"]}
                  onClick={() => onChange(item.id.toString())}
                >
                  <div>
                    <Radio checked={value === item.id.toString()} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <div className={styles["mobile-item-grid"]}>
                      <div>Адрес</div>
                      <div>{item.address}</div>
                      <div>Метро</div>
                      <div>{item.metro}</div>
                      <div>Телефон</div>
                      <div>{item.phone}</div>
                      <div>Эл.почта</div>
                      <div>{item.email}</div>
                    </div>
                  </div>
                </div>
              ))}
          </Space>
        </div>
      )}
    </div>
  );
}
