"use client";

import React, { useState } from "react";
import InputMask from "react-input-mask";

interface PropsInterface {
  onChange: (value: any) => void;
  value?: string;
  label?: string;
  error?: string;
}

const PhoneInput = ({ onChange, value, label, error }: PropsInterface) => {
  const [phoneNumber, setPhoneNumber] = useState(value || "");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPhoneNumber = e.target.value.replace(/[^0-9]/g, "");

    setPhoneNumber(`${rawPhoneNumber}`);
    onChange(rawPhoneNumber);
  };

  return (
    <div>
      {!!label && <div className="mb-2.5">{label}</div>}
      <InputMask
        className="px-2.5 h-10 rounded-[7px] border border-[#d9d9d9] outline-none w-full transition-all focus:border-[#1677ff]"
        mask="+7 999 999 99 99"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="+7"
        maskChar={""}
      />
      {!!error && (
        <div className="mt-2.5 text-xs md:text-sm text-red-500">{error}</div>
      )}
    </div>
  );
};

export default PhoneInput;
