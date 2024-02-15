import React, { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import { validate_confirm_password, validate_email, validate_login_password, validate_name, validate_password, validate_phone_number, validate_required_string, validate_surname } from "./FormValidations";
import { current } from "@reduxjs/toolkit";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: any;
  defaultValue?: any;
  placeholder?: string;
  noValidation?: boolean;
  custType?: "email" | "login_password" | "industry" | "position" | "faculty" | "name" | "surname" | "confirm_password" | "password" | "phone" | "city";
  id: string;
  valStarted?: boolean;
  startVal?: any;
  addError: any;
  serverError?: any;
  removeError: any;
  password?: string;
}

export default function Input({ id, serverError, password, startVal, valStarted, label, addError, removeError, setValue, noValidation = false, defaultValue, placeholder, custType, ...rest }: InputProps) {
  const [currentValue, setCurrentValue] = React.useState<string>(defaultValue || "");
  const [error, setError] = React.useState<string | null>(null);
  const [icon, setIcon] = React.useState<string>("");
  const [isHidden, setIsHidden] = useState<null | boolean>(null);

  useEffect(() => {
    if (custType) {
      switch (custType) {
        case "position":
          setIcon("briefcase");
          break;
        case "industry":
          setIcon("industry");
          break;
        case "faculty":
          setIcon("graduation-cap");
          break;
        case "city":
          setIcon("city");
          break;
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
          setIsHidden(true);
          break;
        case "password":
          setIcon("lock");
          setIsHidden(true);
          break;
        case "confirm_password":
          setIcon("lock");
          setIsHidden(true);
          break;
        case "phone":
          setIcon("phone");
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    setError(serverError);
  }, [serverError]);

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
          case "position":
            setError(validate_required_string(currentValue));
            break;
          case "industry":
            setError(validate_required_string(currentValue));
            break;
          case "city":
            setError(validate_required_string(currentValue));
            break;
          case "faculty":
            setError(validate_required_string(currentValue));
            break;
          case "phone":
            setError(validate_phone_number(currentValue));
            break;
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
            break;
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
        defaultValue={defaultValue}
        placeholder={placeholder || label}
        type={isHidden !== null ? (isHidden ? "password" : "text") : rest.type}
      />
      {isHidden !== null && (
        <Eye
          onClick={() => {
            setIsHidden(!isHidden);
          }}
          className={`fa-regular fa-${isHidden ? "eye-slash" : "eye"}`}
        ></Eye>
      )}
      <I className={`fal fa-${icon}`}></I>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}

const Eye = styled.i`
  position: absolute;
  top: 52px;
  right: 24px;
  transform: translateX(50%);
  color: gray;
  cursor: pointer;
`;

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
  line-height: 18px !important;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px !important;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 138px;
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
  border: 1px solid #e5e7eb;
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
