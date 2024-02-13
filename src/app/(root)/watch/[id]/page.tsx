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
  const [isClient, setIsClient] = useState(false);
  console.log(isClient, isDesktop);
  if (isClient && isDesktop) {
    window.location.href = window.location.pathname + "/about";
    return null; // Optional: You can return null or any other component if you want to render nothing
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <div>{/* <Watching params={params} /> */}</div>
          <div className=" bg-[#F3F4F8] pt-10 max-w-screen-xl mx-auto">
            <Navigation id={params.id} />
          </div>
        </Wrapper>
      )}
    </>
  );
}
