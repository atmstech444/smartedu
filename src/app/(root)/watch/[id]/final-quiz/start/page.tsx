"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navigation } from "../../../components/Navigation";
import QuizStart from "../components/QuizStart";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="md:pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="md:hidden mt-[20%] flex flex-col gap-[24px]">
              <QuizStart />
            </div>
            <div className="hidden md:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <Navigation />
              <QuizStart />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
