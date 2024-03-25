"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
import icon from "../../../../../../public/assets/icons/Export.svg";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import NextButton from "../../../components/NextButton";
import { updateIndexInfo } from "@/redux/slices/indexSlice";
import BackToCourse from "../../../components/BackToCourse";
import { useRouter } from "next/navigation";
import MobileNavOpener from "../../../components/MobileNavOpener";
import { useParams } from "next/navigation";
import { Get_Lecture_Detail, POST_READING } from "@/services/AllCourses";
import { setLecture } from "@/redux/slices/lectureDetail";

const Reading = () => {
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const params = useParams();
  const dispatch = useAppDispatch();
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
  const router = useRouter();
  const token = useAppSelector((state) => state.user.user?.token);
  const index = useAppSelector((state) => state.index.index);
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);
  const reading = lectureDetail?.readings;
  const navigateToCourse = () => {
    router.push(`/watch/${params.id}/course/${lectureDetail.id}`);
  };
  const fetchData = async () => {
    try {
      const lectureDetail = await Get_Lecture_Detail(params.itemId, token);
      dispatch(setLecture(lectureDetail.lecture[0]));
    } catch (error) {
      console.error("Error fetching lecture detail:", error);
    }
  };
  const markAsDone = async (id: any) => {
    const data = {
      id: reading[0].id,
    };
    try {
      const result = await POST_READING(token, data);
      fetchData();
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const completedReading = lectureDetail.readings[0]?.user_made_readings?.[0]?.completed ?? 0;
  return (
    <>
      <main className="relative w-full flex items-center justify-center lg:block">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px]  w-[90%]  bg-white rounded-md">
          <BackToCourse lecture_name={lectureDetail.lecture_name} onClick={navigateToCourse} />
          <MobileNavOpener lecture_name={lectureDetail.lecture_name} onArrowClick={navigateToCourse} onNavClick={toggleMenuVisibility} />
          <div className="flex items-center justify-between">
            <h3>მასალა</h3>
            <div onClick={() => dispatch(updateIndexInfo(index + 1))}>
              <NextButton />
            </div>
          </div>

          <div className="mb-4 break-all">{reading && reading[0]?.description}</div>
          {reading &&
            reading?.map((item) =>
              item.url
                ? item.url.map(
                    (link, index) =>
                      link !== null && (
                        <a href={`${link}`} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center gap-2 break-all">
                          <p className="mb-0 text-sm text-mainBlue break-all">{link}</p>
                          <Image src={icon} alt="icon" width="15" height="15" />
                        </a>
                      )
                  )
                : null
            )}
          <button className={`self-start text-base font-medium text-white py-2 px-3 ${completedReading ? "opacity-50" : "opacity-100"} bg-mainBlue rounded-md`} onClick={() => markAsDone(params.itemId)} disabled={completedReading === 1}>
            {completedReading ? "დასრულებულია" : "მონიშნე წაკითხულად"}
          </button>
        </div>
      </main>
    </>
  );
};

export default Reading;
