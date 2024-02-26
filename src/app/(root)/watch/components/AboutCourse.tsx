"use client";
import { I_Course_Details } from "@/api/GET_CourseDetails";
// import Wrapper from "@/layout/DefaultWrapper";
import { Get_Course_Detail } from "@/services/AllCourses";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Arrow from "../../../../public/assets/icons/arrowLeft.svg";
import { API_STORAGE } from "@/api/API_PATH";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import { Navigation } from "./Navigation";
import UserMobileMenu from "./UserMobileMenu";

const AboutCourse = () => {
  const id = useParams();
  const [course, setCourse] = useState<I_Course_Details | null>(null);
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const dispatch = useAppDispatch();
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
  const fetchData = async () => {
    try {
      const courseDetail = await Get_Course_Detail(id.id);
      setCourse(courseDetail.course);
    } catch (error) {
      console.error("Error fetching course detail:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(course?.syllabus);
  return (
    <main className="relative w-full flex items-center justify-center lg:block">
      {isMenuOpened && (
        <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
          <Navigation id={id.id} />
        </UserMobileMenu>
      )}
      <div className="flex gap-[24px] flex-col p-[24px] w-[90%]  bg-white rounded-md">
        <Image onClick={toggleMenuVisibility} src={Arrow} width={24} height={24} alt="Back" className="lg:hidden mb-4" />
        <Course>{course?.title}</Course>
        <Course>კურსის აღწერა</Course>
        <AboutCourseText>{course?.description}</AboutCourseText>
        <Course>ლექტორი</Course>
        <LecturerContainer>
          <LecturerImage src={`${API_STORAGE} ${course && course.lecturer?.image ? course.lecturer.image : null}`} alt="Lecturer Image" />
          <div>
            <Lecturer>{`${course?.lecturer?.first_name} ${course?.lecturer?.last_name}`}</Lecturer>
            <LecturerDesc>{course?.lecturer?.description}</LecturerDesc>
          </div>
        </LecturerContainer>
        <Course>სილაბუსი</Course>
        {course &&
          course.syllabus.map((item, index) => (
            <div key={index}>
              <Lecture>{item.title}</Lecture>
              <LectureDesc>
                <ul>
                  {item.descriptions.map((desc, i) => (
                    <li style={{ listStyle: "disc" }} key={i}>
                      {desc.description}
                    </li>
                  ))}
                </ul>
              </LectureDesc>
            </div>
          ))}
      </div>
    </main>
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
