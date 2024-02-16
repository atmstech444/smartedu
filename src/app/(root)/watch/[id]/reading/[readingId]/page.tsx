"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { Navigation } from "../../../components/Navigation";
import { useParams, useRouter } from "next/navigation";
import SecondaryNav from "../../../components/SecondaryNav";

const Page = (id: { id: any }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="md:hidden mt-[20%] flex flex-col gap-[24px]">{/* <AboutCourse /> */}</div>
            <div className="hidden md:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <SecondaryNav id={id} />
              <h1>hi</h1>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
