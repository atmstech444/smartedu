"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import ErrorMsg from "./error-msg";
// internal

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper mb-25">
        <h5>Work email</h5>
        <div className="sign__input">
          <div className="login__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <i className="fal fa-envelope"></i>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
        <div className="sign__input-wrapper mb-10">
          <h5>Password</h5>
          <div className="sign__input">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>
      </div>

      <div className="sign__action d-sm-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">
            Keep me signed in
          </label>
        </div>
        <div className="sign__forgot">
          <Link href="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
      <button className="e-btn  w-100">
        {" "}
        <span></span> Sign In
      </button>
      <div className="sign__new text-center mt-20">
        <p>
          New to Markit? <Link href="/sign-up">Sign Up</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
