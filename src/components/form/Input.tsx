import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Inp {...rest} />
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
  border: 2px solid transparent;
  background: #f6f6f7;
  color: #0e1133;
  border-radius: 6px;
  border: 1px solid gray;
  font-size: 16px;
  &::placeholder{
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #0e1133;
  margin-bottom: 11px;
`;
