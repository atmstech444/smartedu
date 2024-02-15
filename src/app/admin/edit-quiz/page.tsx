"use client";
import React, { Suspense, useEffect, useState } from "react";
// import Header from "@/components/Header";

import Navbar from "../add-lecture/components/Navbar";
import { parseCookies } from "nookies";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
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

  return (
    <Suspense>
      <>
        <Header />
        <div className="flex gap-8 w-[100%]">
          <Navbar lectures={lectures} courseData={undefined} onLectureClick={handleLectureClick} />
          <div className="flex justify-between w-[85%] mt-6">
            <EditQuiz quizzes={quizData} />
          </div>
        </div>
      </>
    </Suspense>
  );
};

export default page;
