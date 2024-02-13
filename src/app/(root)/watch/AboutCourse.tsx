"use client";
import { I_Course_Details } from "@/api/GET_CourseDetails";
// import Wrapper from "@/layout/DefaultWrapper";
import { useAppSelector } from "@/redux/store";
import { Get_Course_Detail } from "@/services/AllCourses";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Arrow from "../../../public/assets/icons/arrowLeft.svg";

const AboutCourse = () => {
  const id = useParams();

  const [course, setCourse] = useState<I_Course_Details | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const courseDetail = await Get_Course_Detail(id.id);
      console.log(courseDetail, "detail");
      setCourse(courseDetail.course);
    } catch (error) {
      console.error("Error fetching course detail:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-[24px] flex-col p-[24px] md:w-[60%] lg:w-[80%]  bg-white rounded-md">
      <Image onClick={() => router.push(`/watch/${id.id}`)} src={Arrow} width={24} height={24} alt="Back" className="md:hidden mb-4" />
      <Course>{course?.title}</Course>
      <Course>ლექციის აღწერა</Course>
      <AboutCourseText>{course?.description}</AboutCourseText>
      <Course>ლექტორი</Course>
      <LecturerContainer>
        <LecturerImage src={`https://smarteducation.shop/smarteducation_backend/public/${course?.lecturer.image}`} alt="Lecturer Image" />
        <div>
          <Lecturer>{`${course?.lecturer.first_name} ${course?.lecturer.last_name}`}</Lecturer>
          <LecturerDesc>{course?.lecturer.description}</LecturerDesc>
        </div>
      </LecturerContainer>
      <Course>სილაბუსი</Course>
      {course &&
        course.syllabus.map((item, index) => (
          <div key={index}>
            <Lecture>{item.title}</Lecture>
            <LectureDesc>
              {item.descriptions.map((desc, i) => (
                <div key={i}>{desc.description}</div>
              ))}
            </LectureDesc>
          </div>
        ))}
    </div>
  );
};

export default AboutCourse;

// Styled components
const Course = styled.h3`
  color: #000;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const AboutCourseText = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const LecturerContainer = styled.div`
  display: flex;
  gap: 3px;
`;

const LecturerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
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

const LecturerDesc = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
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

const LectureDesc = styled.div`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
