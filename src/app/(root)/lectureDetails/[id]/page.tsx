"use client";
import Wrapper from "@/layout/DefaultWrapper";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import LectureNav from "../components/LectureNav";

const page = ({ params }: { params: { id: number } }) => {
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
    router.push(currentPath + "/reading");
  }
  return (
    <>
      <Wrapper>
        <div className=" bg-[#F3F4F8] pt-10 max-w-screen-xl mx-auto">
          <LectureNav />
        </div>
      </Wrapper>
    </>
  );
};

export default page;
