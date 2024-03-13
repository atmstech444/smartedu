"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { Navigation } from "../../../components/Navigation";
import { useParams } from "next/navigation";
import Lecture from "../Lecture";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="lg:hidden mt-[150px] flex flex-col gap-[24px]">
              <Lecture />
            </div>
            <div className="hidden lg:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <Navigation />
              <Lecture />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
