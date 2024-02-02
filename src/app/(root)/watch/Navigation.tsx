"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import Arrow from "../../../public/assets/icons/arrowLeft.svg";
import Image from "next/image";

export const Navigation = (id: any) => {
  const courses = useAppSelector((state) => state.courses.courses);
  const course = courses.find((cours) => cours.id == id.id);
  const router = useRouter();

  const navigateToAboutPage = () => {
    router.push(`/watch/${id.id}/about`);
  };

  return (
    <div className="mt-[20%] p-[24px] md:mt-0 md:w-[30%] lg:w-[20%] bg-white rounded-md md:h-full">
      <div>
        <Image onClick={() => router.push(`/profile`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
        <div className="w-full h-full">
          <Image width={500} height={500} alt="image" className="rounded-md " src={`https://smarteducation.shop/smarteducation_backend/public/${course?.cover_image}`} />
        </div>
        <CourseName>{course?.title}</CourseName>
        <AboutCourse onClick={navigateToAboutPage}>კურსის შესახებ</AboutCourse>
        <p onClick={() => router.push(`/watch/${id.id}/course/1`)}>კურსი</p>
      </div>
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
