"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
// internal
import ErrorMsg from "./error-msg";
import { register_schema } from "@/utils/validation-schema";
import Link from "next/link";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: register_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <h5>Full Name</h5>
        <div className="sign__input mb-25">
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Full name"
            id="name"
            required
          />
          <i className="fal fa-user"></i>
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>

        <div className="sign__input-wrapper mb-25">
          <h5>Work email</h5>
          <div className="sign__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
              required
            />
            <i className="fal fa-envelope"></i>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="sign__input-wrapper mb-25">
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
              required
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>

        <div className="sign__input-wrapper mb-10">
          <h5>Re-Password</h5>
          <div className="sign__input">
            <input
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showConPass ? "text" : "password"}
              placeholder="Confirm Password"
              id="passwordConfirmation"
              required
            />
            <i className="fal fa-lock"></i>
          </div>
          {touched.passwordConfirmation && (
            <ErrorMsg error={errors.passwordConfirmation} />
          )}
        </div>
      </div>
      <div className="sign__action d-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">
            I agree to the <Link href="#">Terms & Conditions</Link>
          </label>
        </div>
      </div>
      <button className="e-btn w-100">
        {" "}
        <span></span> Sign Up
      </button>
      <div className="sign__new text-center mt-20">
        <p>
          Already in Markit ? <Link href="/sign-in"> Sign In</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
