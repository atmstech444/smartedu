"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
import { LectureTypes } from "../../course/Lecture";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/redux/store";
const Video = (id: { id: any }) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [lectureDetail, setLectureDetail] = useState<LectureTypes>();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
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
  console.log(lectureDetail);
  return (
    <>
      <main className="relative w-full">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] md:w-[80%] lg:w-[90%]  bg-red rounded-md">
          <Image src={Arrow} width="15" height="15" alt="back" className="md:hidden" onClick={toggleMenuVisibility} />
          <div>Video</div>
        </div>
      </main>
    </>
  );
};

export default Video;
