"use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import Navbar from "../add-lecture/components/Navbar";
import SeeCertificate from "./components/SeeCertificate";

interface Lecture {
  id: any;
  name: any;
}

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseData, setCourseData] = useState<any | null>(null);

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
const Page = () => {
  const { lectures, courseData } = useQueryParams();
  return (
    <div className="flex flex-col gap-8 w-[100%]">
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={courseData} />

        <div className="flex flex-col gap-10  mt-11 w-[97%]">
          <SeeCertificate courseId={courseData?.id} courseData={courseData} lectures={lectures} />
        </div>
      </div>
    </div>
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
