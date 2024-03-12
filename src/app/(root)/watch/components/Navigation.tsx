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

interface QuizesTypes {
  answer: string[];
  id: number;
  question: string;
  score: number;
  correct_answer: string[];
}
export const Navigation = (id: { id: any }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [finalQuiz, setFinalQuiz] = useState<QuizesTypes[]>([]);
  const courses = useAppSelector((state) => state.courses.courses);
  const course = courses.find((cours) => cours.id == id.id);
  const [lecture, setLecture] = useState<LectureTypes[]>([]);
  const [percent, setPercent] = useState<number>();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const storedState = localStorage.getItem("lecturesOpened");
    if (storedState) {
      setIsOpened(JSON.parse(storedState));
    }
  }, []);

  const toggleCourseLectures = () => {
    setIsOpened((prev) => {
      const newState = !prev;
      localStorage.setItem("lecturesOpened", JSON.stringify(newState));
      return newState;
    });
  };
  const closeNavMenu = () => {
    dispatch(closeNavbar());
  };
  const token = useAppSelector((state) => state.user.user?.token);

  const fetchData = async () => {
    try {
      const lecture = await Get_Lecture(id.id, token);
      setFinalQuiz(lecture.final_quiz);
      setLecture(lecture.lectures);
      setPercent(lecture.final_quiz_percent);
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

  const navigateToFinalQuiz = () => {
    closeNavMenu();
    router.push(`/watch/${id.id}/final-quiz`);
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
        <div>
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
              {finalQuiz.length > 0 && (
                <div
                  className={`flex gap-2 items-center text-mainGray text-base rounded-md p-3 cursor-pointer ${pathname === `/watch/${id.id}/final-quiz` || pathname === `/watch/${id.id}/final-quiz/start` ? "bg-lightestBlue" : "bg-transparent"}`}
                  onClick={navigateToFinalQuiz}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17.5 5.83335V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V5.83335C2.5 3.33335 3.75 1.66669 6.66667 1.66669H13.3333C16.25 1.66669 17.5 3.33335 17.5 5.83335Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.9163 1.66669V8.21668C12.9163 8.58334 12.483 8.76667 12.2163 8.525L10.283 6.74171C10.1247 6.59171 9.87465 6.59171 9.71632 6.74171L7.78303 8.525C7.51636 8.76667 7.08301 8.58334 7.08301 8.21668V1.66669H12.9163Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M11.042 11.6667H14.5837" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 15H14.5833" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className=" my-auto">ქვიზი</p>
                </div>
              )}
              <div
                className={`flex gap-2 items-center text-mainGray text-base rounded-md p-3 cursor-pointer ${pathname === `/watch/${id.id}/certificate` ? "bg-lightestBlue" : "bg-transparent"}`}
                onClick={() => router.push(`/watch/${id.id}/certificate`)}
              >
                {percent && percent > 49 && <p>სერთიფიკატი</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
