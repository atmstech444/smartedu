"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import ErrorMsg from "./error-msg";
import { POST_Login } from "@/api/POST_Login";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: login_schema,
    onSubmit: (values, { resetForm, setErrors }) => {
      POST_Login(values, setErrors, router, dispatch);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper mb-25">
        <h5>ელ. ფოსტა</h5>
        <div className="sign__input">
          <div className="login__input">
            <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="ელ. ფოსტა" id="email" />
            <i className={`fal fa-envelope`}></i>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
        <div className="sign__input-wrapper mt-20 mb-10">
          <h5>პაროლი</h5>
          <div className="sign__input">
            <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type={showPass ? "text" : "password"} placeholder="პაროლი" id="password" />
            <i className="fal fa-lock"></i>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>
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
      <button className="e-btn  w-100">
        {" "}
        <span></span> შესვლა
      </button>
      <div className="sign__new text-center mt-20">
        <p>
          არ ხარ რეგისტრირებული? <Link href="/sign-up">დარეგისტრირდი</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
