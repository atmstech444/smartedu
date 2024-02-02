"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { Navigation } from "../../../Navigation";
import { useParams, useRouter } from "next/navigation";
import Lecture from "../Lecture";

const page = () => {
  const params = useParams();

  return (
    <Wrapper>
      <div className="pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
        <div className="md:hidden mt-[20%] flex flex-col gap-[24px]">
          {/* <AboutCourse /> */}
          <Lecture />
        </div>
        <div className="hidden md:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
          <Navigation id={params.id} />
          <Lecture />
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
