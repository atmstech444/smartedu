"use client";
import React from "react";
import Link from "next/link";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { productsType } from "@/interFace/interFace";
import Image from "next/image";

const CartMain = () => {
  const dispatch = useDispatch();

  const handleChange = () => {};

  return (
    <>
      {/* <BreadcrumbTwo titleTwo="My Cart" subTitleTwo="My Cart" /> */}
      
    </>
  );
};

export default CartMain;
