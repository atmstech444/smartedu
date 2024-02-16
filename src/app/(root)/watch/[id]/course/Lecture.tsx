"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../public/assets/icons/arrowLeft.svg";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { useAppSelector } from "@/redux/store";
import Book from "@/public/assets/icons/book.svg";
import Quizzes from "@/public/assets/icons/archive-book.svg";
import Video from "@/public/assets/icons/video-circle.svg";

interface LectureTypes {
  course_id: number;
  id: number;
  lecture_name: string;
  lecture_content: {
    description: string;
    title: string;
  };
  quizzes: Quizzes[];
  readings: {
    description: string;
    id: number;
    url: string;
  }[];
  videos: {
    duration: string;
    id: number;
    video_url: string;
  }[];
}
interface Quizzes {
  answer: string[];
  correct_answer: string[];
  id: number;
  question: string;
  url: string;
}

const Lecture = () => {
  const [lectureDetail, setLectureDetail] = useState<LectureTypes>();
  const router = useRouter();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);

  const fetchData = async () => {
    try {
      const lectureDetail = await Get_Lecture_Detail(params.courseId, token);
      setLectureDetail(lectureDetail.lecture[0]);
    } catch (error) {
      console.error("Error fetching lecture detail:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-[24px] flex-col p-[24px] md:w-[60%] lg:w-[80%]  bg-white rounded-md ">
      <Image onClick={() => router.push(`/watch/${params.id}`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
      <h1 className="text-base font-bold text-black">ლექციის აღწერა</h1>
      <p className="text-base	font-normal text-black">{lectureDetail && lectureDetail.lecture_content.description}</p>
      <p className="text-base font-bold	text-black">ლექცია {lectureDetail && lectureDetail.course_id}</p>
      {lectureDetail && lectureDetail.readings != null && (
        <div className="flex gap-3">
          <Image alt="book" src={Book} />
          <div>
            <p className=" m-0 font-medium text-black">მასალა</p>
            <p className=" m-0">წასაკითხი</p>
          </div>
        </div>
      )}

      {lectureDetail &&
        lectureDetail.videos != null &&
        lectureDetail &&
        lectureDetail.videos.map((video) => (
          <div className="flex gap-3">
            <Image alt="video" src={Video} />
            <div>
              <p className=" m-0 font-medium	 text-black">პროგრამირების საწყისები</p>
              <p className=" m-0">ვიდეო</p>
            </div>
          </div>
        ))}

      {lectureDetail && lectureDetail.quizzes != null && (
        <div className="flex gap-3">
          <Image alt="quizzes" src={Quizzes} />
          <div>
            <p className=" m-0 font-medium text-black">ლექციის ბოლოს</p>
            <p className=" m-0">ქვიზი</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lecture;
