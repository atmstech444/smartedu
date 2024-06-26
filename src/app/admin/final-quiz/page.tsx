"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../add-lecture/components/Navbar";
import QuizPage from "./components/QuizPage";
import { getQuiz } from "./services/getQuiz";
import { parseCookies } from "nookies";
import { deleteQuiz } from "./services/deleteQuiz";
import Swal from "sweetalert2";
import Header from "@/components/Header";
import { deleteQuizById } from "./services/deleteQuizById";
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
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseData, setCourseData] = useState<Quiz[] | null>(null);
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
    const lecturesParam = searchParams.get("lectures");
    const courseDataParam = searchParams.get("courseData");
    const courseId = searchParams.get("courseId");

    setCourseId(courseId);
    if (lecturesParam) {
      const lecturesArray: Lecture[] = JSON.parse(decodeURIComponent(lecturesParam));
      setLectures(lecturesArray);
    }

    if (courseDataParam) {
      const parsedCourseData = JSON.parse(decodeURIComponent(courseDataParam));
      setCourseData(parsedCourseData);
    }
  }, []);

  return { lectures, courseData, courseId };
};

const Page = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const { lectures, courseData, courseId } = useQueryParams();
  const [quizData, setQuizData] = useState<any>();
  const [swalMessage, setSwalMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (courseId) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await getQuiz(token, courseId);
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

  const handleDeleteQuiz = async () => {
    try {
      setLoading(true);
      const response = await deleteQuiz(token, courseId);
      setQuizData(response.quizzes);
      if (response.message === "All Final Quiz remove successfully") {
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
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteQuizById = async (id: number) => {
    try {
      setLoading(true);
      const response = await deleteQuizById(token, id, courseId);
      setQuizData(response.final_quizzes);
      if (response.message === "Final Quiz remove successfully") {
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={courseData} />
        <div className="flex justify-between w-[85%] mt-6">
          <QuizPage quizzes={quizData} handleDeleteQuiz={handleDeleteQuiz} swalMessage={swalMessage} isLoading={isLoading} handleDeleteQuizById={handleDeleteQuizById} loading={loading} />
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
