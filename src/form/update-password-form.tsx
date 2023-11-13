"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
// internal
import ErrorMsg from "./error-msg";
import { register_schema } from "@/utils/validation-schema";
import styled from "styled-components";

const UpdatePasswordForm = () => {
  const [showOldPass, setShowOldPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: register_schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <H5>ძველი პაროლი</H5>
        <div className="sign__input mb-25">
          <input name="old_password" value={values.oldPassword} onChange={handleChange} onBlur={handleBlur} type={showOldPass ? "text" : "password"} placeholder="ძველი პაროლი" id="name" required />
          <i className="fal fa-user"></i>
          {touched.oldPassword && <ErrorMsg error={errors.oldPassword} />}
        </div>

        <div className="sign__input-wrapper mb-25">
          <H5>ახალი პაროლი</H5>
          <div className="sign__input">
            <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type={showPass ? "text" : "password"} placeholder="ახალი პაროლი" id="password" required />
            <i className="fal fa-lock"></i>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>

        <div className="sign__input-wrapper mb-10">
          <H5>გაიმეორე პაროლი</H5>
          <div className="sign__input">
            <input name="passwordConfirmation" value={values.passwordConfirmation} onChange={handleChange} onBlur={handleBlur} type={showConPass ? "text" : "password"} placeholder="გაიმეორე პაროლი" id="passwordConfirmation" required />
            <i className="fal fa-lock"></i>
          </div>
          {touched.passwordConfirmation && <ErrorMsg error={errors.passwordConfirmation} />}
        </div>
      </div>

      <button style={{ marginTop: "31px" }} className="e-btn w-100">
        {" "}
        <span></span> შენახვა
      </button>
    </form>
  );
};

const H5 = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #0e1133;
  margin-bottom: 11px;
`;

export default UpdatePasswordForm;
