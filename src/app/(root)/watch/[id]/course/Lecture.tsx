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
import { useDispatch } from "react-redux";
import { setLecture } from "@/redux/slices/lectureDetail";

export interface LectureTypes {
  course_id: number;
  id: number;
  lecture_name: string;
  lecture_content: {
    title: string;
  };
  quizzes: Quizzes[];
  readings: {
    description: string;
    id: number;
    url: [];
  }[];
  videos: {
    duration: string;
    id: number;
    video: string;
    title: string;
  }[];
}
interface Quizzes {
  answer: string[];
  correct_answer: string[];
  id: number;
  question: string;
  url: string;
}

const Lecture = (id: { id: any }) => {
  const router = useRouter();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const lectureDetail = await Get_Lecture_Detail(params.courseId, token);
      dispatch(setLecture(lectureDetail.lecture[0]));
    } catch (error) {
      console.error("Error fetching lecture detail:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const lectureDetail = useAppSelector((state) => state.lecture.lecture);

  const navigateToReading = (lectureId: any) => {
    router.push(`/watch/${id.id}/reading/${lectureId}`);
  };
  const navigateToVideo = (id: any, videoId: any) => {
    router.push(`/watch/${params.id}/video/${id}/${videoId}`);
  };
  const navigateToQuiz = (id: any) => {
    router.push(`/watch/${params.id}/quiz/${id}`);
  };

  return (
    <div className="flex gap-[24px] flex-col p-[24px] md:w-[60%] lg:w-[80%]  bg-white rounded-md ">
      <Image onClick={() => router.push(`/watch/${params.id}`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
      <h1 className="text-base font-bold text-black">ლექციის აღწერა</h1>
      <p className="text-base	font-normal text-black">{lectureDetail?.lecture_content.title}</p>
      <p className="text-base font-bold	text-black">ლექცია {lectureDetail?.course_id}</p>
      {lectureDetail && lectureDetail.readings !== null ? (
        <div className="flex gap-3 cursor-pointer" onClick={() => navigateToReading(lectureDetail.id)}>
          <Image alt="book" src={Book} />
          <div>
            <p className=" m-0 font-medium text-black">მასალა</p>
            <p className=" m-0">წასაკითხი</p>
          </div>
        </div>
      ) : (
        ""
      )}

      {lectureDetail &&
        lectureDetail.videos !== null &&
        lectureDetail &&
        lectureDetail.videos.map((video, index) => (
          <div className="flex gap-3 cursor-pointer" key={index} onClick={() => navigateToVideo(lectureDetail.id, video.id)}>
            <Image alt="video" src={Video} />
            <div>
              <p className=" m-0 font-medium	 text-black">{video.title}</p>
              <p className=" m-0">ვიდეო</p>
            </div>
          </div>
        ))}

      {lectureDetail && lectureDetail.quizzes !== null && (
        <div className="flex gap-3 cursor-pointer" onClick={() => navigateToQuiz(lectureDetail.id)}>
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
