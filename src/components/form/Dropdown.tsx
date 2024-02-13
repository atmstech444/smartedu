import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { StyleSheetManager } from "styled-components";

interface DropdownProps {
  label: string;
  options: {
    value: string | null;
    text: string;
  }[];
  exportValue: any;
  valStarted?: boolean;
  startVal?: any;
  addError?: any;
  removeError?: any;
  defaultValue?: any;
  id?: string;
}

export default function Dropdown({ label, id, options, exportValue, defaultValue, addError, removeError, valStarted, startVal }: DropdownProps) {
  const [expand, setExpand] = useState(false);
  const defaultOption = options.find((opt) => opt.value === defaultValue);
  const [value, setValue] = useState(defaultOption || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState<string | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExpand(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (valStarted) {
      if (value.value === null) {
        setError("აირჩიეთ ველი");
      } else {
        setError(null);
      }
    }
  }, [valStarted, value]);

  useEffect(() => {
    if (error) {
      addError(id);
    } else {
      removeError(id);
    }
  }, [error]);

  useEffect(() => {});

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "expand"}>
      <Wrapper expand={expand.toString()} ref={dropdownRef}>
        <Label>{label}</Label>
        <Select
          isblack={(value.value !== null).toString()}
          expand={expand.toString()}
          onClick={() => {
            startVal(true);
            setExpand(!expand);
          }}
        >
          <I expand={expand.toString()} className="fa-solid fa-chevron-down"></I>
          {value.text}
        </Select>
        <input type="text" value={value.value || value.text} hidden />
        {expand && (
          <Options>
            {options.map((option) => (
              <Option
                key={option.value}
                onClick={() => {
                  setExpand(false);
                  setValue(option);
                  exportValue(option.value);
                }}
              >
                {option.text}
              </Option>
            ))}
          </Options>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </Wrapper>
    </StyleSheetManager>
  );
}

const ErrorText = styled.p`
  color: red;
  position: absolute;
  font-size: 14px !important;
  z-index: 20;
`;
const I = styled.i<{ expand: string }>`
  transform: ${({ expand }) => (expand == "true" ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.1s;
  position: absolute;
  right: 16px;
  top: 20px;
`;

const Wrapper = styled.div<{ expand: string }>`
  position: relative;
  z-index: ${({ expand }) => (expand == "true" ? "20" : "10")};
  background-color: black;
`;

const Option = styled.p`
  padding: 4px;
  padding-inline: 16px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: #d7d7d7;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 89px;
  background-color: #f6f6f7;
  width: 100%;
  border: 1px solid gray;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 25;
`;

const Select = styled.div<{ expand: string; isblack: string }>`
  width: 100%;
  height: 60px;
  line-height: 52px;
  padding: 0 16px;
  padding-top: 5px;
  font-size: 14px;
  border: 2px solid transparent;
  background: #f6f6f7;
  color: ${({ isblack }) => (isblack == "true" ? "black" : "gray")};
  border-radius: 6px;
  cursor: pointer;
  overflow: visible;
  position: relative;
  border: 1px solid transparent;
  border-color: ${({ expand }) => (expand ? "gray" : "transparent")};
  border-bottom-left-radius: ${({ expand }) => (expand ? "0px" : "6px")};
  border-bottom-right-radius: ${({ expand }) => (expand ? "0px" : "6px")};
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #0e1133;
  margin-bottom: 4px;
`;
