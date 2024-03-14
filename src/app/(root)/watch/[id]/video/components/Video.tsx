"use client";
import React, { useRef, useEffect } from "react";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import NextButton from "../../../components/NextButton";
import { API_STORAGE } from "@/api/API_PATH";
import { updateIndexInfo } from "@/redux/slices/indexSlice";
import BackToCourse from "../../../components/BackToCourse";
import MobileNavOpener from "../../../components/MobileNavOpener";
import { useRouter } from "next/navigation";
import { Get_Lecture_Detail, POST_VIDEO } from "@/services/AllCourses";
import { setLecture } from "@/redux/slices/lectureDetail";

interface Props {
  id: any;
}
const Video = ({ id }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const dispatch = useAppDispatch();
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const params: any = useParams();
  const router = useRouter();
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };

  const token = useAppSelector((state) => state.user.user?.token);
  const index = useAppSelector((state) => state.index.index);
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);
  const video = lectureDetail?.videos.find((item) => item.id == params.videoId);

  const navigateToCourse = () => {
    router.push(`/watch/${id}/course/${lectureDetail.id}`);
  };

  const fetchData = async () => {
    try {
      const lectureDetail = await Get_Lecture_Detail(params.itemId, token);
      dispatch(setLecture(lectureDetail.lecture[0]));
    } catch (error) {
      console.error("Error fetching lecture detail:", error);
    }
  };

  const onVideoEnded = async (id: any) => {
    if (video?.user_made_videos?.[0]?.completed !== 1) {
      const data = {
        id: id,
      };
      try {
        const result = await POST_VIDEO(token, data);
        fetchData();
        console.log("submitted", result);
      } catch (error) {
        console.error("Error submitting quiz:", error);
      }
    }
  };
  useEffect(() => {
    if (!video) return;
    const storedTime = localStorage.getItem(`${API_STORAGE + video?.video}`);
    if (storedTime && videoRef.current) {
      const parsedTime = parseFloat(storedTime);

      if (!isNaN(parsedTime)) {
        videoRef.current.currentTime = parsedTime;
      }
    }

    const updateCurrentTime = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        localStorage.setItem(`${API_STORAGE + video?.video}`, currentTime.toString());
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateCurrentTime);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", updateCurrentTime);
        window.removeEventListener("beforeunload", updateCurrentTime);
      }
    };
  }, [video]);

  return (
    <>
      <main className="relative w-full bg-white flex items-center justify-center lg:block">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] w-[90%]   rounded-md">
          <BackToCourse lecture_name={lectureDetail.lecture_name} onClick={navigateToCourse} />
          <MobileNavOpener lecture_name={lectureDetail.lecture_name} onArrowClick={navigateToCourse} onNavClick={toggleMenuVisibility} />
          <div className=" flex justify-between">
            <h1 className=" text-xl m-0">{video?.title}</h1>
            <div onClick={() => dispatch(updateIndexInfo(index + 1))}>
              <NextButton />
            </div>
          </div>
          {video && (
            <video controls controlsList="nodownload" className="rounded-lg" ref={videoRef} onEnded={() => onVideoEnded(params.videoId)}>
              <source src={`${API_STORAGE + video?.video}`} type="video/mp4" />
            </video>
          )}
        </div>
      </main>
    </>
  );
};

export default Video;
