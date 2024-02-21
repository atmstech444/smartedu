"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllCourses } from "../../main/services/getCourses";
import { parseCookies } from "nookies";

interface Lecture {
  id: any;
  name: any;
}

interface CourseDataProps {
  title: string;
  cover_image: string;
}

const Navbar = ({ lectures, courseData  }: { lectures: Lecture[], courseData: any }) => {
  const router = useRouter();
  const [currentLectureId, setCurrentLectureId] = useState<number | null>(null);
  const handleOpenTabs = (lectureId: number) => {
    const lecturesData = lectures.map((lecture) => ({
      id: lecture.id,
      name: lecture.name,
    }));
    router.push(`/admin/add-lecture?lectureId=${lectureId}&lectures=${encodeURIComponent(JSON.stringify(lecturesData))}`);
    setTimeout(() => {
      setCurrentLectureId(lectureId);
    }, 200);
  };

  return (
    <div className="w-64 mt-11 px-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className=" flex flex-col gap-4 w-[200px] max-w-[200px]">
        {courseData && (
          <>
            <img src={`https://smarteducation.shop/smarteducation_backend/public/${courseData?.cover_image}`} className="rounded-2xl" />
            <p className="text-base text-black font-semibold">{courseData?.title}</p>
          </>
        )}

        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>

        {lectures.map((lecture) => (
          <div key={lecture.id} className="flex justify-between items-center">
            <h1 className="cursor-pointer underline" onClick={() => handleOpenTabs(lecture.id)}>
              {lecture.name}
            </h1>
          </div>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
