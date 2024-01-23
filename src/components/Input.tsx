import React from "react";
import { useFormContext } from "react-hook-form";
interface InputProps {
  placeholder?: string;
  label: string;
  type?: string;
  name: string;
  error?: string;
  id: any;
}
const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  label,
  error,
  id,
}) => {
  const { register } = useFormContext();
  return (
    <>
      <div className="flex flex-col mt-3 desktop:mt-2 relative  w-[310px] sm:w-full mx-auto">
        <label htmlFor={name} className="text-base mt-4 mb-2 ">
          {label}
        </label>

        <input
          className="bg-[#F1F1F1] p-4 gap-2 rounded-faqBordeR  text-sm focus:outline-none"
          {...register(name)}
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
        />
        <p className="text-sm text-red absolute -bottom-[26px] ">{error}</p>
      </div>
    </>
  );
};

export default Input;
