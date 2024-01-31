"use client";
import { I_Course_Details } from "@/api/GET_CourseDetails";
import Wrapper from "@/layout/DefaultWrapper";
import { useAppSelector } from "@/redux/store";
import { Get_Course_Detail } from "@/services/AllCourses";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Arrow from "../../../public/assets/icons/arrowLeft.svg";

const AboutCourse = () => {
  const params = useParams();
  const [course, setCourse] = useState<I_Course_Details | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const courseDetail = await Get_Course_Detail(params?.id);
      setCourse(courseDetail.course);
    } catch (error) {
      console.error("Error fetching course detail:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(course);

  return (
    <div className="flex flex-col p-[24px] md:w-[60%]  bg-white rounded-md">
      <Image onClick={() => router.push(`/watch/${params.id}`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
      <Course>{course?.title}</Course>
      <Course>ლექციის აღწერა</Course>
      <AboutCours>{course?.description}</AboutCours>
      <Course>ლექტორი</Course>
      <div className="flex gap-3">
        <img className=" rounded-full" src={`https://smarteducation.shop/smarteducation_backend/public/${course?.lecturer.image}`} />
        <div>
          <Lecturer>{course?.lecturer.first_name + " " + course?.lecturer.last_name}</Lecturer>
          <LecturerDesc>{course?.lecturer.description}</LecturerDesc>
        </div>
      </div>
      <Course>სილაბუსი</Course>
      <Lecture>ლექცია 1</Lecture>
      <div className="px-[32px]">
        <LectureName>შესავალი პროგრამირებაში</LectureName>
        <LectureDesc>
          To interact with our programs, we need mechanisms for taking information from the outside world and for presenting information to the outside world. This lecture describes several such mechanisms: for text, drawings, and animation. Detailed
          examples... for text, drawings, and animation. Detailed examples...
        </LectureDesc>
      </div>
    </div>
  );
};

export default AboutCourse;

const LectureName = styled.p`
  color: #5a5454;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const LectureDesc = styled.p`
  color: #000;
  font-family: FiraGO;
  margin-top: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Lecture = styled.p`
  padding: 5px;
  border-radius: 4px;
  background: #f3f4f8;
  color: #5a5454;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const LecturerDesc = styled.p`
  font-family: FiraGO;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const Lecturer = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
`;

const AboutCours = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Course = styled.h3`
  color: #000;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
