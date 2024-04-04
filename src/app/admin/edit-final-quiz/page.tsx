"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../add-lecture/components/Navbar";
import { parseCookies } from "nookies";
import EditQuiz from "./components/EditQuiz";
import Header from "@/components/Header";
import { getFinalQuiz } from "./services/getFinalQuiz";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export interface Quiz {
  answer: string[];
  correct_answer: string[];
  id: number;
  question: string;
  url: string | null;
  score: number;
}

interface Lecture {
  id: any;
  name: any;
}

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseData, setCourseData] = useState<any | null>(null);
  const [courseId, setCourseId] = useState<string | undefined | null>(undefined);

  const router = useRouter();
  useEffect(() => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      router.replace('/admin/');
    }
  }, [router]);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    const lecturesParam = searchParams.get("lectures");
    const courseDataParam = searchParams.get("courseData");
    const courseId = searchParams.get("courseId");

    setCourseId(courseId);
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

  return { lectureId, lectures, courseData, courseId };
};

const Page = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const { lectures, courseData, courseId } = useQueryParams();
  const [quizData, setQuizData] = useState<Quiz[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    if (courseId) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await getFinalQuiz(token, courseId);
          setQuizData(response.final_quizzes);
        } catch (error) {
          console.error("Error fetching courses:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [courseId, token]);

  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={courseData} />
        <div className="w-[45%] mt-6 mb-20">
          <EditQuiz quizzes={quizData} onDeleteAnswer={handleDeleteAnswer} onAddAnswer={handleAddAnswer} setQuizData={setQuizData} isLoading={isLoading} />
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
