"use client";
import React, { useState } from "react";

import Link from "next/link";
import { POST_Register, POST_Register_Error } from "@/api/POST_Register";
import { useRouter } from "next/navigation";
import Input from "@/components/form/Input";
import Button from "./Button";
import AcceptTerms from "@/components/form/AcceptTerms";

const RegisterForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [validationsStarted, setValidationsStarted] = useState(false);
  const [serverErrors, setServerErrors] = useState<null | POST_Register_Error>(null);
  const addError = (error: string) => {
    if (!errors.includes(error)) setErrors([...errors, error]);
  };
  const removeError = (error: string) => {
    const errorArray = errors;
    const index = errorArray.indexOf(error);
    if (index > -1) {
      errorArray.splice(index, 1);
    }
    setErrors([...errorArray]);
  };
  const handleSubmit = (event: any) => {
    setValidationsStarted(true);
    event.preventDefault();
    if (errors.length === 0) {
      setIsLoading(true);
      POST_Register({ name, surname, email, password, passwordConfirmation: confirmPassword }, router, setServerErrors).then(() => {
        setIsLoading(false);
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <Input serverError={serverErrors?.name} valStarted={validationsStarted} startVal={setValidationsStarted} id="name" label="სახელი" custType="name" type="text" setValue={setName} addError={addError} removeError={removeError} />
        <Input serverError={serverErrors?.surname} valStarted={validationsStarted} startVal={setValidationsStarted} id="surname" label="გვარი" custType="surname" type="text" setValue={setSurname} addError={addError} removeError={removeError} />
        <Input serverError={serverErrors?.email} valStarted={validationsStarted} startVal={setValidationsStarted} id="email" label="ელ.ფოსტა" custType="email" type="email" setValue={setEmail} addError={addError} removeError={removeError} />
        <Input
          serverError={serverErrors?.password}
          valStarted={validationsStarted}
          startVal={setValidationsStarted}
          id="password"
          label="პაროლი"
          custType="password"
          type="password"
          setValue={setPassword}
          addError={addError}
          removeError={removeError}
        />
        <Input
          valStarted={validationsStarted}
          startVal={setValidationsStarted}
          setValue={setConfirmPassword}
          addError={addError}
          removeError={removeError}
          id="confirm_password"
          password={password}
          label="დაადასტურე პაროლი"
          serverError={serverErrors?.passwordConfirmation}
          custType="confirm_password"
          type="password"
        />
        <AcceptTerms startVal={setValidationsStarted} valStarted={validationsStarted} addError={addError} id="terms" removeError={removeError} />
      </div>

      <Button text="რეგისტრაცია" isLoading={isLoading} />
      <div className="sign__new text-center mt-20">
        <p>
          რეგისტრირებული ხარ? <Link href="/sign-in">შესვლა</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
