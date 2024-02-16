"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../add-lecture/components/Navbar";
import { parseCookies } from "nookies";
import { useSearchParams } from "next/navigation";
import EditQuiz from "./components/EditQuiz";
import { getQuiz } from "../quizzes/services/getQuiz";
import Header from "@/components/Header";

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
  const { lectures } = useQueryParams();
  const [, setActiveTab] = useState("");
  const [, setRefreshTabs] = useState(false);
  const [quizData, setQuizData] = useState<Quiz[] | null>(null);
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

  const handleDeleteAnswer = (quizId: number, answerIndex: number) => {
    if (quizData) {
      const updatedQuizData = quizData.map((quiz) => {
        if (quiz.id === quizId) {
          return {
            ...quiz,
            answer: quiz.answer.filter((_, index) => index !== answerIndex),
            correct_answer: quiz.correct_answer.filter((_, index) => index !== answerIndex),
          };
        }
        return quiz;
      });
      setQuizData(updatedQuizData);
    }
  };

  // New function to add a new answer to a quiz
  const handleAddAnswer = (quizId: number) => {
    if (quizData) {
      const updatedQuizData = quizData.map((quiz) => {
        if (quiz.id === quizId) {
          return {
            ...quiz,
            answer: [...quiz.answer, ""],
            correct_answer: [...quiz.correct_answer, ""],
          };
        }
        return quiz;
      });
      setQuizData(updatedQuizData);
    }
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

  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={undefined} onLectureClick={handleLectureClick} />
        <div className="w-[45%] mt-6">
          <EditQuiz quizzes={quizData} onDeleteAnswer={handleDeleteAnswer} onAddAnswer={handleAddAnswer} setQuizData={setQuizData} />
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
