"use client";
import React from "react";
import Wrapper from "@/layout/DefaultWrapper";
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import AboutCourse from "../components/AboutCourse";

export default function Page({ params }: { params: { id: number } }) {
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
              <AboutCourse />
            </div>
            <div className="hidden lg:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <Navigation />
              <AboutCourse />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
}
