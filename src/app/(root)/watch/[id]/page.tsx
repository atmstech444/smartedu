"use client";
import React from "react";
import { GET_Courses, I_Course } from "@/api/GET_Courses";
import Wrapper from "@/layout/DefaultWrapper";
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  useEffect(() => {
    if (isDesktop) {
      router.push(pathname + "/about");
    }
  }, [isDesktop]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <div className=" bg-[#F3F4F8] pt-10 max-w-screen-xl mx-auto">
            <Navigation id={params.id} />
          </div>
        </Wrapper>
      )}
    </>
  );
}
