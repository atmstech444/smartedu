"use client";
import { I_Course_Details } from "@/api/GET_CourseDetails";
import Wrapper from "@/layout/DefaultWrapper";
import { useAppSelector } from "@/redux/store";
import { Get_Course_Detail } from "@/services/AllCourses";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import AboutCourse from "../../AboutCourse";
import { Navigation } from "../../Navigation";

const page = () => {
  const params = useParams();
  return (
    <Wrapper>
      <div className="p-[24px]">
        <div className="md:hidden mt-[20%] flex flex-col gap-[24px]">
          <AboutCourse />
        </div>
        <div className="hidden md:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
          <Navigation id={params.id} />
          <AboutCourse />
        </div>
      </div>
    </Wrapper>
  );
};

export default page;

// const LectureName = styled.p`
//   color: #5a5454;
//   font-family: FiraGO;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 150%;
// `;

// const LectureDesc = styled.p`
//   color: #000;
//   font-family: FiraGO;
//   margin-top: 10px;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%;
// `;

// const Lecture = styled.p`
//   padding: 5px;
//   border-radius: 4px;
//   background: #f3f4f8;
//   color: #5a5454;
//   font-family: FiraGO;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%;
// `;

// const LecturerDesc = styled.p`
//   font-family: FiraGO;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%;
//   margin: 0;
// `;

// const Lecturer = styled.p`
//   color: #000;
//   font-family: FiraGO;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 150%;
//   margin: 0;
// `;

// const AboutCourse = styled.p`
//   color: #000;
//   font-family: FiraGO;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%;
// `;

// const Course = styled.h3`
//   color: #000;
//   font-family: FiraGO;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 150%;
// `;
