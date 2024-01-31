"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

export const Navigation = (id: any) => {
  const courses = useAppSelector((state) => state.courses.courses);
  const course = courses.find((cours) => cours.id == id.id);
  const router = useRouter();

  const navigateToAboutPage = () => {
    router.push(`/watch/${id.id}/about`);
  };

  console.log(course);
  return (
    <div className=" mt-[20%] p-[24px] md:mt-0 md:p-0  md:w-[30%] lg:w-[20%]">
      <div className="">
        <img className=" rounded-md" src={`https://smarteducation.shop/smarteducation_backend/public/${course?.cover_image}`} />
        <CourseName>{course?.title}</CourseName>
        <AboutCourse onClick={navigateToAboutPage}>კურსის შესახებ</AboutCourse>
      </div>

      {/* <div className="hidden md:flex">
        <h1>{course?.title}</h1>
        <button onClick={navigateToAboutPage}>კურსის შესახებ</button>
      </div> */}
    </div>
  );
};
const AboutCourse = styled.button`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;

const CourseName = styled.h1`
  margin-bottom: 32px;
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
