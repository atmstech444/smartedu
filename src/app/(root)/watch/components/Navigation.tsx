"use client";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Arrow from "../../../../public/assets/icons/arrowLeft.svg";
import Image from "next/image";
import arrow from "../../../../public/assets/icons/courserow.svg";
import { Get_Lecture } from "@/services/AllCourses";

interface LectureTypes {
  course_id: number;
  id: number;
  lecture_name: string;
}
export const Navigation = (id: { id: any }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const courses = useAppSelector((state) => state.courses.courses);
  const course = courses.find((cours) => cours.id == id.id);
  const [lecture, setLecture] = useState<LectureTypes[]>([]);
  const router = useRouter();

  const navigateToAboutPage = () => {
    router.push(`/watch/${id.id}/about`);
  };
  const navigateToLectureDetails = (lectureId: number) => {
    router.push(`/watch/${id.id}/course/${lectureId}`);
  };
  const toggleCourseLectures = () => {
    setIsOpened((prev) => !prev);
  };
  const token = useAppSelector((state) => state.user.user?.token);

  const fetchData = async () => {
    try {
      const lecture = await Get_Lecture(id.id, token);
      setLecture(lecture.lectures);
    } catch (error) {
      console.error("Error fetching lecture:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-[20%] p-[24px] md:mt-0 md:w-[30%] lg:w-[20%] bg-white rounded-md md:h-full">
      <div>
        <Image onClick={() => router.push(`/profile`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
        <div className="w-full h-full">
          <Image width={500} height={500} alt="image" className="rounded-md " src={`https://smarteducation.shop/smarteducation_backend/public/${course?.cover_image}`} />
        </div>
        <CourseName>{course?.title}</CourseName>
        <AboutCourse onClick={navigateToAboutPage}>კურსის შესახებ</AboutCourse>
        <main>
          <div className="self-start flex items-center my-3 gap-2 cursor-pointer relative" onClick={toggleCourseLectures}>
            <span className="text-base font-semibold text-dark">კურსი</span>
            <Image src={arrow} height="25" width="25" alt="arrow" />
          </div>
          {isOpened && (
            <>
              {lecture &&
                lecture.map((item) => (
                  <p onClick={() => navigateToLectureDetails(item.id)} key={item.id}>
                    {item.lecture_name}
                  </p>
                ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

const AboutCourse = styled.button`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
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
