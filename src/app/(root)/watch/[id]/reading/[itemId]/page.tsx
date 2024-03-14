"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SecondaryNav from "../../../components/SecondaryNav";
import Reading from "../components/Reading";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { setLecture } from "@/redux/slices/lectureDetail";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  // const [isDone, setIsDone] = useState<string>(localStorage.getItem("isDone") || "მონიშნე წაკითხულად");
  const params = useParams();
  useEffect(() => {
    setIsClient(true);
  }, []);
  const token = useAppSelector((state) => state.user.user?.token);
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);
  const dispatch = useDispatch();
  if (lectureDetail?.course_id === 0) {
    const fetchData = async () => {
      try {
        const lectureDetail = await Get_Lecture_Detail(params.itemId, token);
        dispatch(setLecture(lectureDetail.lecture[0]));
      } catch (error) {
        console.error("Error fetching lecture detail:", error);
      }
    };
    fetchData();
  }
  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="md:pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="lg:hidden mt-[20%] flex flex-col gap-[24px]">
              <Reading />
            </div>
            <div className="hidden lg:flex mt-[150px]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <SecondaryNav />
              <Reading />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
