"use client";
import React from "react";
import { useFormik } from "formik";
// internal
import ErrorMsg from "./error-msg";
import { register_schema } from "@/utils/validation-schema";
import Link from "next/link";
import styled from "styled-components";

const UpdateAccountForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: "ნანუკა",
      surname: "როინიშვილი",
      email: "nanuka.roinishvili@gamil.com",
    },
    validationSchema: register_schema,
    onSubmit: (values, { resetForm }) => {
      // resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <H5>სახელი</H5>
        <div className="sign__input mb-25">
          <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="სახელი" id="name" required />
          <i className="fal fa-user"></i>
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>

        <div className="sign__input-wrapper mb-25">
          <H5>გვარი</H5>
          <div className="sign__input">
            <input name="surname" value={values.surname} onChange={handleChange} onBlur={handleBlur} type="surname" placeholder="გვარი" id="surname" required />
            <i className="fal fa-user"></i>
          </div>
          {touched.email && <ErrorMsg error={errors.surname} />}
        </div>

        <div className="sign__input-wrapper mb-25">
          <H5>ელ. ფოსტა</H5>
          <div className="sign__input">
            <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="ელ. ფოსტა" id="email" required />
            <i className="fal fa-envelope"></i>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
      </div>

      <button style={{ marginTop: "16px" }} className="e-btn w-100">
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

export default UpdateAccountForm;
