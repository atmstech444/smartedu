"use client";
import { useSearchParams } from "next/navigation";
import { parseCookies } from "nookies";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../add-lecture/components/Navbar";
import Header from "@/components/Header";
import { getReadings } from "../main/[id]/services/getReadings";
import ReadingPage from "./components/ReadingPage";

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

type ReadingData = {
  id: number;
  description: string;
  lecture_id: number;
  url: string[];
};

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
  const searchParams = useSearchParams();
  const [readingsData, setReadingsData] = useState<ReadingData[]>([]);

  const lectureId = searchParams.get("lectureId");

  const fetchData = async () => {
    try {
      if (lectureId !== undefined) {
        const response = await getReadings(token, lectureId);
        const { reading } = response;
        setReadingsData(reading);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [lectureId]);

  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar
          lectures={lectures}
          courseData={undefined}
          onLectureClick={function (lectureId: number): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div className="flex justify-between w-[85%] mt-6">
          <ReadingPage readingsData={readingsData} setReadingsData={setReadingsData} />
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
