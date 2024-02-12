"use client";
import React from "react";
// import Watching from "./Watching";
import { GET_Courses, I_Course } from "@/api/GET_Courses";
import Wrapper from "@/layout/DefaultWrapper";
import { useState, useEffect } from "react";
import { Navigation } from "../Navigation";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const currentPath = window.location.pathname;

  const updateIsDesktop = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);
  if (isDesktop) {
    router.push(currentPath + "/about");
  }
  return (
    <Wrapper>
      <div>{/* <Watching params={params} /> */}</div>
      <div className=" bg-[#F3F4F8] pt-10 max-w-screen-xl mx-auto">
        <Navigation id={params.id} />
      </div>
    </Wrapper>
  );
}
