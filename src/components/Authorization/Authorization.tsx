import { useState } from "react";
import { AuthUserRole, Credentials } from "@/lib/types";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step0 from "./Step0";
import styles from "./Authorization.module.css";
import { useAppDispatch } from "@/store";
import { setCredentials } from "@/store/authSlice";
import { setAccessToken } from "@/services/accessToken";

export default function Authorization() {
  const [step, setStep] = useState<number>(0);
  const [subsidiaryId, setSubsidiaryId] = useState<null | string>(null);
  const [role, setRole] = useState<null | AuthUserRole>(null);
  const [email, setEmail] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  const handleNextStep0 = (subsidiaryId: string) => {
    setSubsidiaryId(subsidiaryId);
    setStep(1);
  };

  const handlePrevStep1 = () => {
    setStep(0);
  };

  const handleNextStep1 = (newRole: typeof role) => {
    setRole(newRole);
    setStep(2);
  };

  const handlePrevStep2 = () => {
    setStep(1);
  };

  const handleNextStep2 = (email: string) => {
    setEmail(email);
    setStep(3);
  };

  const handlePrevStep3 = () => {
    setStep(2);
  };

  const handleNextStep3 = (token: string, credentials: Credentials) => {
    setAccessToken(token);
    dispatch(setCredentials(credentials));
  };

  return (
    <div className={styles["holder"]}>
      {step === 0 && <Step0 next={handleNextStep0} />}
      {step === 1 && <Step1 prev={handlePrevStep1} next={handleNextStep1} />}
      {step === 2 && (
        <Step2
          prev={handlePrevStep2}
          next={handleNextStep3}
          role={role}
          subsidiaryId={subsidiaryId}
        />
      )}
      {/* {step === 3 && (
        <Step3
          prev={handlePrevStep3}
          next={handleNextStep3}
          role={role}
          subsidiaryId={subsidiaryId}
          email={email}
        />
      )} */}
    </div>
  );
}
