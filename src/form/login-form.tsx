"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import ErrorMsg from "./error-msg";
import { POST_Login } from "@/api/POST_Login";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import ServerError from "./ServerError";
import Button from "./Button";
import Input from "@/components/form/Input";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<string[]>([]);
  const [validationsStarted, setValidationsStarted] = useState(false);
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
      POST_Login({ email, password }, setErrors, router, dispatch, setServerError).then(() => {
        setIsLoading(false);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="sign__input-wrapper mb-25">
        <Input valStarted={validationsStarted} startVal={setValidationsStarted} id="email" label="ელ.ფოსტა" custType="email" type="email" setValue={setEmail} addError={addError} removeError={removeError} />
        <Input valStarted={validationsStarted} startVal={setValidationsStarted} id="password" label="პაროლი" custType="login_password" type="password" setValue={setPassword} addError={addError} removeError={removeError} />
      </div>
      <div className="sign__action d-sm-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">
            დამახსოვრება
          </label>
        </div>
        <div className="sign__forgot">
          <Link href="/forgot-password">დაგავიწყდა პაროლი?</Link>
        </div>
      </div>
      <ServerError error={serverError} />
      <Button text="შესვლა" isLoading={isLoading} />
      <div className="sign__new text-center mt-20">
        <p>
          არ ხარ რეგისტრირებული? <Link href="/sign-up">დარეგისტრირდი</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
