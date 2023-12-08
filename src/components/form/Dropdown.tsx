import React, { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  label: string;
  options: {
    value: string;
    text: string;
  }[];
  exportValue: any;
  defaultValue?: any;
}

export default function Dropdown({ label, options, exportValue, defaultValue }: DropdownProps) {
  const [expand, setExpand] = useState(false);
  const defaultOption = options.find((opt) => opt.value === defaultValue);
  const [value, setValue] = useState(defaultOption || options[0]);
  return (
    <Wrapper expand={expand}>
      <Label>{label}</Label>
      <Select
        expand={expand}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <I expand={expand} className="fa-solid fa-chevron-down"></I>
        {value.text}
      </Select>
      <input type="text" value={value.value} hidden />
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
    </Wrapper>
  );
}

const I = styled.i<{ expand: boolean }>`
  transform: ${({ expand }) => (expand ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.1s;
  position: absolute;
  right: 16px;
  top: 20px;
`;

const Wrapper = styled.div<{ expand: boolean }>`
  position: relative;
  z-index: ${({ expand }) => (expand ? "20" : "10")};
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
  top: 92px;
  background-color: #f6f6f7;
  width: 100%;
  border: 1px solid gray;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const Select = styled.div<{ expand: boolean }>`
  width: 100%;
  height: 60px;
  line-height: 52px;
  padding: 0 16px;
  padding-top: 5px;
  font-size: 14px;
  border: 2px solid transparent;
  background: #f6f6f7;
  color: gray;
  border-radius: 6px;
  cursor: pointer;
  overflow: visible;
  position: relative;
  border: 1px solid transparent;
  border-color: ${({ expand }) => (expand ? "gray" : "transparent")};
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #0e1133;
  margin-bottom: 11px;
`;
