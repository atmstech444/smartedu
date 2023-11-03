import React from "react";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import CouponArea from "./CouponArea";
import CheckoutArea from "./CheckoutArea";

const CheckoutMain = () => {
  return (
    <>
      <BreadcrumbTwo titleTwo="Checkout" subTitleTwo="Checkout" />
      <CouponArea />
      <CheckoutArea />
    </>
  );
};

export default CheckoutMain;
