import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  exportValue: any;
  defaultValue?: any;
  placeholder?: string;
}

export default function PlainInput({ label, exportValue, defaultValue, placeholder, ...rest }: InputProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Inp
        {...rest}
        onChange={(event: any) => {
          exportValue(event.target.value);
        }}
        placeholder={defaultValue || placeholder}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Inp = styled.input`
  width: 100%;
  height: 60px;
  line-height: 52px;
  padding: 0 16px;
  padding-top: 5px;
  font-size: 14px;
  /* border: 2px solid transparent; */
  background: #f6f6f7;
  color: #0e1133;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #0e1133;
  margin-bottom: 4px;
`;
