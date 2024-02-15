"use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import Navbar from "../add-lecture/components/Navbar";
import QuizPage from "./components/QuizPage";
import { getQuiz } from "./services/getQuiz";
import { parseCookies } from "nookies";
import { useSearchParams } from "next/navigation";
import { deleteQuiz } from "./services/deleteQuiz";
import Swal from "sweetalert2";

export interface Quiz {
  answer: string[];
  correct_answer: string[];
  id: number;
  question: string;
  url: string | null;
}

interface Lecture {
  id: any;
  name: any;
}

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseData, setCourseData] = useState<Quiz[] | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    const lecturesParam = searchParams.get("lectures");
    const courseDataParam = searchParams.get("courseData");

    setLectureId(id);
    if (lecturesParam) {
      const lecturesArray: Lecture[] = JSON.parse(decodeURIComponent(lecturesParam));
      setLectures(lecturesArray);
    }

    if (courseDataParam) {
      const parsedCourseData = JSON.parse(decodeURIComponent(courseDataParam));
      setCourseData(parsedCourseData);
    }
  }, []);

  return { lectureId, lectures, courseData };
};

const page = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const { lectures } = useQueryParams();
  const [, setActiveTab] = useState("");
  const [, setRefreshTabs] = useState(false);
  const [quizData, setQuizData] = useState<any>();
  const [swalMessage, setSwalMessage] = useState<string>("");
  const searchParams = useSearchParams();

  const lectureId = searchParams.get("lectureId");

  const handleRefreshTabs = () => {
    setRefreshTabs(true);
  };

  const handleLectureClick = (lectureId: number) => {
    setActiveTab("");
    handleRefreshTabs();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuiz(token, lectureId);
        setQuizData(response.quizzes);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteQuiz = async () => {
    try {
      const response = await deleteQuiz(token, lectureId);
      setQuizData(response.quizzes);
      if (response.message === "Quiz remove successfully") {
        setSwalMessage(response.message);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete quiz");
        Swal.fire({
          icon: "warning",
          title: "Failed to delete quiz",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error deleting quiz:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={undefined} onLectureClick={handleLectureClick} />
        <div className="flex justify-between w-[85%] mt-6">
          <Suspense>
            <QuizPage quizzes={quizData} handleDeleteQuiz={handleDeleteQuiz} swalMessage={swalMessage} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
