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
  console.log(course);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-[24px] flex-col p-[24px] md:w-[60%] lg:w-[80%]  bg-white rounded-md">
      <Image onClick={() => router.push(`/watch/${params.id}`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
      <Course>{course?.title}</Course>
      <Course>ლექციის აღწერა</Course>
      <AboutCours>{course?.description}</AboutCours>
      <Course>ლექტორი</Course>
      <div className="flex gap-3">
        <img className="w-[100px] h-[100px] rounded-full" src={`https://smarteducation.shop/smarteducation_backend/public/${course?.lecturer.image}`} />
        <div className="my-auto">
          <Lecturer>{course?.lecturer.first_name + " " + course?.lecturer.last_name}</Lecturer>
          <LecturerDesc>{course?.lecturer.description}</LecturerDesc>
        </div>
      </div>
      <Course>სილაბუსი</Course>

      {course &&
        course.syllabus.map((item, index) => (
          <div key={index}>
            <Lecture> {`${item.title}`}</Lecture>
            <div className="px-[32px]">
              {item.descriptions.map((desc) => (
                <LectureDesc>{desc.description}</LectureDesc>
              ))}
            </div>
          </div>
        ))}
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
