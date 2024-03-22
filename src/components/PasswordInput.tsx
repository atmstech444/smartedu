"use client";
import React from "react";
import { useState } from "react";
import Eye from "../public/assets/dynamic_icons/Eye";
import EyeClose from "../public/assets/dynamic_icons/EyeClose";
import Input from "./Input";

interface PasswordInputProps {
  error?: string;
  placeholder: string;
  label: string;
  name: string;
  id: any
}
const PasswordInput: React.FC<PasswordInputProps> = ({
  error,
  placeholder,
  label,
  name,
  id,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative desktop:w-full">
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          label={label}
          placeholder={placeholder}
          error={error}
          id={id}
        />
        <button
          type="button"
          className="absolute top-[68%]  right-6  desktop:right-15 tablet:right-4"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <Eye /> : <EyeClose />}
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
