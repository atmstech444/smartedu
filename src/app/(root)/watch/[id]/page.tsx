"use client";
import React from "react";
import { GET_Courses, I_Course } from "@/api/GET_Courses";
import Wrapper from "@/layout/DefaultWrapper";
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import AboutCourse from "../components/AboutCourse";

export default function Page({ params }: { params: { id: number } }) {
  // const [isDesktop, setIsDesktop] = useState(false);
  //  const router = useRouter();
  // const pathname = usePathname();

  // const updateIsDesktop = () => {
  //   setIsDesktop(window.innerWidth > 768);
  // };
  // useEffect(() => {
  //   updateIsDesktop();
  //   window.addEventListener("resize", updateIsDesktop);
  //   return () => {
  //     window.removeEventListener("resize", updateIsDesktop);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isDesktop) {
  //     router.push(pathname + "/about");
  //   }
  // }, [isDesktop]);

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
              <Navigation id={params.id} />
              <AboutCourse />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
}
