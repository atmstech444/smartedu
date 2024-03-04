"use client";
import React from "react";
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

interface Props {
  id: any;
}
const Video = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const params: any = useParams();
  const router = useRouter();
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
  const index = useAppSelector((state) => state.index.index);
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);
  const video = lectureDetail?.videos.find((item) => item.id == params.videoId);
  const navigateToCourse = () => {
    router.push(`/watch/${id}/course/${lectureDetail.id}`);
  };
  return (
    <>
      <main className="relative w-full bg-white flex items-center justify-center lg:block">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
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
            <video controls controlsList="nodownload" className="rounded-lg">
              <source src={`${API_STORAGE + video?.video}`} type="video/mp4" />
            </video>
          )}
        </div>
      </main>
    </>
  );
};

export default Video;
