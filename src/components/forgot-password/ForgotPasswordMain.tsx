import React from "react";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import ForgotForm from "@/form/forgot-form";

const ForgotPasswordMain = () => {
  return (
    <>
      <BreadcrumbTwo titleTwo="Forgot-Password" subTitleTwo="Forgot-Password" />
      <ForgotForm />
    </>
  );
};

export default ForgotPasswordMain;
