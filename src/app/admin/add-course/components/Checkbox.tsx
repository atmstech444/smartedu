import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
      <label className="pl-6">{label}</label>
    </div>
  );
};

export default Checkbox;
