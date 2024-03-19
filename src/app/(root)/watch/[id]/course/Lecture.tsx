"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import Arrow from "../../../../../public/assets/icons/arrowLeft.svg";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { useAppSelector } from "@/redux/store";
import Book from "@/public/assets/icons/book.svg";
import Quizzes from "@/public/assets/icons/archive-book.svg";
import Video from "@/public/assets/icons/video-circle.svg";
import { useDispatch } from "react-redux";
import { setLecture } from "@/redux/slices/lectureDetail";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import { Navigation } from "../../components/Navigation";
import UserMobileMenu from "../../components/UserMobileMenu";
import success from "../../../../../public/assets/icons/tick-circle.svg";

export interface LectureTypes {
  course_id: number;
  id: number;
  lecture_name: string;
  lecture_content: {
    title: string;
  };
  mideterm_quiz_check_answers: any;
  mideterm_quiz_answer_percents: any;
  quizzes: Quizzes[];
  readings: {
    description: string;
    id: number;
    lecture_id: number;
    pdf_file?: string;
    user_made_readings?: DoneReading[];
    url: [];
  }[];
  videos: {
    duration: string;
    id: number;
    video: string;
    title: string;
    user_made_videos?: DoneVideo[];
  }[];
}
interface Quizzes {
  answer: string[];
  correct_answer: string[];
  id: number;
  question: string;
  url: null | string;
  lecture_id: number;
  is_open: string;
}
interface DoneReading {
  completed: number;
  course_lecture_reading_id: number;
  id: number;
  user_id: number;
}
interface DoneVideo {
  completed: number;
  course_lecture_video_id: number;
  id: number;
  user_id: number;
}

const Lecture = () => {
  const router = useRouter();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  const dispatch = useDispatch();
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
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
    router.push(`/watch/${params.id}/reading/${lectureId}`);
  };
  const navigateToVideo = (id: any, videoId: any) => {
    router.push(`/watch/${params.id}/video/${id}/${videoId}`);
  };
  const navigateToQuiz = (id: any) => {
    router.push(`/watch/${params.id}/quiz/${id}`);
  };

  const completedReading = lectureDetail.readings[0]?.user_made_readings?.[0]?.completed ?? 0;
  const quizResult = lectureDetail.mideterm_quiz_answer_percents[0]?.percent;

  return (
    <main className="relative w-full flex items-center justify-center lg:block">
      {isMenuOpened && (
        <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
          <Navigation />
        </UserMobileMenu>
      )}
      {lectureDetail.course_id ? (
        <div className="flex gap-[24px] flex-col p-[24px] w-[90%]  bg-white rounded-md ">
          <Image onClick={toggleMenuVisibility} src={Arrow} width={24} height={24} alt="image" className="lg:hidden mb-4" />
          <h1 className="text-base font-bold text-black">ლექციის აღწერა</h1>
          <p className="text-base	font-normal text-black">{lectureDetail?.lecture_content?.title}</p>
          <p className="text-base font-bold	text-black">{lectureDetail?.lecture_name}</p>

          {lectureDetail && lectureDetail.readings && lectureDetail.readings.length > 0 ? (
            <div className="flex gap-3 cursor-pointer" onClick={() => navigateToReading(lectureDetail.id)}>
              {completedReading === 1 ? (
                <>
                  <Image alt="success" src={success} />
                </>
              ) : (
                <Image src={Book} alt="book" />
              )}
              <div>
                <p className=" m-0 font-medium text-black">მასალა</p>
                <p className=" m-0">წასაკითხი</p>
              </div>
            </div>
          ) : (
            ""
          )}

          {lectureDetail && lectureDetail.videos.length > 1
            ? lectureDetail.videos.map((video, index) => (
                <div className="flex gap-3 cursor-pointer" key={index} onClick={() => navigateToVideo(lectureDetail.id, video.id)}>
                  {video.user_made_videos?.[0]?.completed === 1 ? (
                    <>
                      <Image alt="success" src={success} />
                    </>
                  ) : (
                    <Image src={Video} alt="video" />
                  )}
                  <div>
                    <p className=" m-0 font-medium	 text-black">{video.title}</p>
                    <p className=" m-0">ვიდეო</p>
                  </div>
                </div>
              ))
            : null}

          {lectureDetail && lectureDetail.quizzes && lectureDetail.quizzes.length > 0 ? (
            <div className="flex gap-3 cursor-pointer" onClick={() => navigateToQuiz(lectureDetail.id)}>
              {quizResult > 80 ? (
                <>
                  <Image alt="success" src={success} />
                </>
              ) : (
                <Image src={Quizzes} alt="quizz" />
              )}
              <div>
                <p className=" m-0 font-medium text-black">ლექციის ბოლოს</p>
                <p className=" m-0">ქვიზი</p>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex gap-[24px] flex-col p-[24px] w-[90%]  bg-white rounded-md">
          <h1 className="text-xl font-normal">იტვირთება...</h1>
        </div>
      )}
    </main>
  );
};

export default Lecture;
