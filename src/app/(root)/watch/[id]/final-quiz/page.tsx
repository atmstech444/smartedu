"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SecondaryNav from "../../components/SecondaryNav";
import QuizScore from "../quiz/[itemId]/components/QuizScore";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { setLecture } from "@/redux/slices/lectureDetail";
import { Navigation } from "../../components/Navigation";
import FinalQuiz from "./components/FinalQuiz";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="md:pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="lg:hidden mt-[20%] flex flex-col gap-[24px]">
              <FinalQuiz />
            </div>
            <div className="hidden lg:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <Navigation />
              <FinalQuiz />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
