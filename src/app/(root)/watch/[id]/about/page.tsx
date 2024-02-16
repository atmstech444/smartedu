"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AboutCourse from "../../components/AboutCourse";
import { Navigation } from "../../components/Navigation";
import Wrapper from "@/layout/DefaultWrapper";

const Page = () => {
  const params = useParams();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="md:hidden mt-[20%] flex flex-col gap-[24px]">
              <AboutCourse />
            </div>
            <div className="hidden md:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <Navigation id={params.id} />
              <AboutCourse />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
