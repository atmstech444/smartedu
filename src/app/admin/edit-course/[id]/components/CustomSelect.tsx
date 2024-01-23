import LoadingSpinner from "@/components/LoadingSpinner";
import React, { useState, useRef, useEffect } from "react";

const CustomSelect = ({ options, onChange, value }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setRotation] = useState(0);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: React.Key | null | undefined) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
    setRotation((rotation) => rotation + 180);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
      setRotation(0);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select relative" ref={selectRef}>
      <div
        className="w-full border border-[#c1c1c1] rounded-[32px] outline-none p-1 pl-2"
        onClick={handleSelectClick}
      >
        {options?.length > 0 ? (
          options.find((option: any) => option.value === value)?.label ||
          "Select"
        ) : (
          <LoadingSpinner />
        )}
        <span
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform text-xl ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9662;
        </span>
      </div>
      {isOpen && (
        <div className="absolute border border-[#c1c1c1] rounded-faqBordeR bg-white w-full mt-2 p-1">
          {options?.length > 0 ? (
            options.map(
              (option: {
                value: React.Key | null | undefined;
                label:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined;
              }) => (
                <div
                  key={option.value}
                  className="p-1 hover:bg-[#D9EBF4]"
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </div>
              )
            )
          ) : (
            <LoadingSpinner />
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
