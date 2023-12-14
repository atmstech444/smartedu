import React, { InputHTMLAttributes, useEffect } from "react";
import styled from "styled-components";
import { validate_confirm_password, validate_email, validate_login_password, validate_name, validate_password, validate_surname } from "./FormValidations";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: any;
  defaultValue?: any;
  placeholder?: string;
  noValidation?: boolean;
  custType?: "email" | "login_password" | "name" | "surname" | "confirm_password" | "password";
  addError: any;
  removeError: any;
  id: string;
  valStarted?: boolean;
  startVal?: any;
  password?: string;
}

export default function Input({ id, password, startVal, valStarted, label, addError, removeError, setValue, noValidation = false, defaultValue, placeholder, custType, ...rest }: InputProps) {
  const [currentValue, setCurrentValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [icon, setIcon] = React.useState<string>("");

  useEffect(() => {
    if (custType) {
      switch (custType) {
        case "name":
          setIcon("user");
          break;
        case "surname":
          setIcon("user");
          break;
        case "email":
          setIcon("envelope");
          break;
        case "login_password":
          setIcon("lock");
          break;
        case "password":
          setIcon("lock");
          break;
        case "confirm_password":
          setIcon("lock");
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    if (error) {
      addError(id);
    } else {
      removeError(id);
    }
  }, [error]);

  useEffect(() => {
    if (valStarted) {
      if (custType && !noValidation) {
        switch (custType) {
          case "surname":
            setError(validate_surname(currentValue));
            break;
          case "name":
            setError(validate_name(currentValue));
            break;
          case "email":
            setError(validate_email(currentValue));
            break;
          case "login_password":
            setError(validate_login_password(currentValue));
            break;
          case "password":
            setError(validate_password(currentValue));
            break;
          case "confirm_password":
            setError(validate_confirm_password(password || "", currentValue));
          default:
            break;
        }
      }
    }
  }, [currentValue, valStarted]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Inp
        onFocus={() => {
          startVal(true);
        }}
        {...rest}
        onChange={(event: any) => {
          setValue(event.target.value);
          setCurrentValue(event.target.value);
        }}
        placeholder={defaultValue || placeholder || label}
      />
      <I className={`fal fa-${icon}`}></I>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}

const I = styled.i`
  position: absolute;
  top: 52px;
  left: 16px;
  color: gray;
`;

const ErrorText = styled.p`
  color: red;
  position: absolute;
  font-size: 14px !important;
`;

const Wrapper = styled.div`
  position: relative;
  height: 120px;
`;

const Inp = styled.input`
  width: 100%;
  height: 60px;
  line-height: 52px;
  padding: 0 16px;
  font-size: 14px;
  /* border: 2px solid transparent; */
  background: #f6f6f7;
  color: #0e1133;
  border-radius: 6px;
  border: none;
  padding-left: 44px;
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
