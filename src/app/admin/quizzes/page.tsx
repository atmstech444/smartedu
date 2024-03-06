"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../add-lecture/components/Navbar";
import QuizPage from "./components/QuizPage";
import { getQuiz } from "./services/getQuiz";
import { parseCookies } from "nookies";
import { useSearchParams } from "next/navigation";
import { deleteQuiz } from "./services/deleteQuiz";
import Swal from "sweetalert2";
import Header from "@/components/Header";
import { deleteQuizById } from "./services/deleteQuizById";

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
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseData, setCourseData] = useState<Quiz[] | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const lecturesParam = searchParams.get("lectures");
    const courseDataParam = searchParams.get("courseData");

    if (lecturesParam) {
      const lecturesArray: Lecture[] = JSON.parse(decodeURIComponent(lecturesParam));
      setLectures(lecturesArray);
    }

    if (courseDataParam) {
      const parsedCourseData = JSON.parse(decodeURIComponent(courseDataParam));
      setCourseData(parsedCourseData);
    }
  }, []);

  return { lectures, courseData };
};

const Page = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const { lectures, courseData } = useQueryParams();
  const [, setActiveTab] = useState("");
  const [, setRefreshTabs] = useState(false);
  const [quizData, setQuizData] = useState<any>();
  const [swalMessage, setSwalMessage] = useState<string>("");
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        const response = await getQuiz(token, lectureId);
        setQuizData(response.quizzes);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteQuiz = async () => {
    try {
      const response = await deleteQuiz(token, lectureId);
      setQuizData(response.quizzes);
      if (response.message === "All Quiz remove successfully") {
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

  const handleDeleteQuizById = async (id: number) => {
    console.log(lectureId);
    try {
      const response = await deleteQuizById(token, id, lectureId);
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
  console.log(quizData);
  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={courseData} />
        <div className="flex justify-between w-[85%] mt-6">
          <QuizPage quizzes={quizData} handleDeleteQuiz={handleDeleteQuiz} swalMessage={swalMessage} isLoading={isLoading} handleDeleteQuizById={handleDeleteQuizById} />
        </div>
      </div>
    </>
  );
};

const PageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
};

export default PageWrapper;
