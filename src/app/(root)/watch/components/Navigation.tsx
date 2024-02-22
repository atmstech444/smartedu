"use client";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Arrow from "../../../../public/assets/icons/arrowLeft.svg";
import Image from "next/image";
import arrow from "../../../../public/assets/icons/courserow.svg";
import { Get_Lecture } from "@/services/AllCourses";
import Link from "next/link";
import { API_STORAGE } from "@/api/API_PATH";
import { closeNavbar } from "@/redux/slices/mobileMenuSlice";
import { useAppDispatch } from "@/redux/store";

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
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toggleCourseLectures = () => {
    console.log("bla");
    setIsOpened((prev) => !prev);
  };
  const closeNavMenu = () => {
    dispatch(closeNavbar());
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
  const navigateToAboutCourse = () => {
    closeNavMenu();
    router.push(`/watch/${id.id}`);
  };
  const navigateToLecture = (lectureId: number) => {
    closeNavMenu();
    router.push(`/watch/${id.id}/course/${lectureId}`);
  };
  return (
    <div className="mt-[20%] p-[24px] md:mt-0 md:w-[30%] lg:w-[30%] bg-white rounded-md md:h-full ">
      <div>
        <Image onClick={closeNavMenu} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
        <div className="w-full h-full">
          <Image width={500} height={70} alt="image" className="rounded-md " src={`${API_STORAGE}${course?.cover_image}`} />
        </div>
        <h1 className="text-dark mb-8 text-lg p-3 font-medium">{course?.title}</h1>
        <div className={`text-dark text-base rounded-md p-3 font-semibold cursor-pointer ${pathname === `/watch/${id.id}` ? "bg-lightestBlue" : "bg-transparent"}`} onClick={navigateToAboutCourse}>
          კურსის შესახებ
        </div>
        <main>
          <div className="self-start flex items-center my-3 gap-2 cursor-pointer relative" onClick={toggleCourseLectures}>
            <span className="text-base font-semibold p-3 text-dark">კურსი</span>
            <Image src={arrow} height="25" width="25" alt="arrow" />
          </div>
          {isOpened && (
            <>
              {lecture &&
                lecture.map((item) => (
                  <div
                    onClick={() => navigateToLecture(item.id)}
                    key={item.id}
                    className={`text-mainGray flex flex-col text-base rounded-md p-3  cursor-pointer ${pathname === `/watch/${id.id}/course/${item.id}` ? "bg-lightestBlue" : "bg-transparent"}`}
                  >
                    {item.lecture_name}
                  </div>
                ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
};
