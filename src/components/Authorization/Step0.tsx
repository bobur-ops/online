import { useState } from "react";
import styles from "./Authorization.module.css";
import TownSelector from "./TownSelector";
import SubsidiarySelector from "./SubsidiarySelector";
import FancyButton from "@/components/ui/FancyButton";
import { useEffectOnce, useMediaQuery } from "usehooks-ts";
import { MapPin } from "lucide-react";
import { SpinLoading } from "antd-mobile";

type Step0Props = {
  next: (subsidiaryId: string) => void;
};

function MobileStep0({ next }: Step0Props) {
  const [townId, setTownId] = useState<null | string>(null);
  const [subsidiaryId, setSubsidiaryId] = useState<null | string>(null);

  return (
    <main className={styles["step0-mobile"]}>
      <h1>Филиалы</h1>
      <h2>Выберите филиал</h2>
      <label>Город</label>
      <div className="flex gap-2 mb-4">
        <TownSelector
          classes={{ root: "flex-1" }}
          value={townId}
          onChange={setTownId}
          mobile
        />
        <div className={styles["map-icon"]}>
          <MapPin
            color={
              townId === null
                ? "rgb(var(--border-rgb))"
                : "rgb(var(--error-rgb))"
            }
          />
        </div>
      </div>
      {townId && (
        <>
          <label>Филиал</label>
          <SubsidiarySelector
            classes={{ root: "mb-4" }}
            fullWidth
            townId={townId}
            value={subsidiaryId}
            onChange={setSubsidiaryId}
            mobile
          />
        </>
      )}
      <FancyButton
        disabled={subsidiaryId === null}
        onClick={() => next(subsidiaryId!)}
        className="mx-auto"
      >
        Подтвердить
      </FancyButton>
    </main>
  );
}

function DesktopStep0({ next }: Step0Props) {
  const [townId, setTownId] = useState<null | string>(null);
  const [subsidiaryId, setSubsidiaryId] = useState<null | string>(null);

  return (
    <div className={styles["step0-desktop"]}>
      <aside>
        <h1>Филиалы</h1>
        <h2>Выберите филиал</h2>
        <label>Город</label>
        <TownSelector
          classes={{ root: "mb-4" }}
          value={townId}
          onChange={setTownId}
        />
        {townId && (
          <>
            <label>Филиал</label>
            <SubsidiarySelector
              classes={{ root: "mb-4" }}
              townId={townId}
              value={subsidiaryId}
              onChange={setSubsidiaryId}
            />
          </>
        )}
        <FancyButton
          disabled={subsidiaryId === null}
          onClick={() => next(subsidiaryId!)}
          className="mx-auto"
        >
          Подтвердить
        </FancyButton>
      </aside>
      <div className={styles["map"]}>
        <div>map</div>
      </div>
    </div>
  );
}

export default function Step0({ next }: Step0Props) {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffectOnce(() => {
    setDomLoaded(true);
  });

  if (!domLoaded) {
    return <SpinLoading className={styles["step-0-unmounted-spin"]} />;
  }

  return (
    <>
      {!isMobile && <DesktopStep0 next={next} />}
      {isMobile && <MobileStep0 next={next} />}
    </>
  );
}
