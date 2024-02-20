"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SecondaryNav from "../../../../components/SecondaryNav";
import { useAppSelector } from "@/redux/store";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { LectureTypes } from "../../../course/Lecture";
import Quiz from "../components/Quiz";

const Page = () => {
  const [lectureDetail, setLectureDetail] = useState<LectureTypes>();
  const [isClient, setIsClient] = useState(false);
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchData = async () => {
    try {
      const lectureDetail = await Get_Lecture_Detail(params.itemId, token);
      setLectureDetail(lectureDetail.lecture[0]);
    } catch (error) {
      console.error("Error fetching lecture detail:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="md:pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="md:hidden mt-[20%] flex flex-col gap-[24px]">
              <Quiz id={params.id} lectureDetail={lectureDetail} />
            </div>
            <div className="hidden md:flex mt-[10%]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <SecondaryNav id={params.id} lectureDetail={lectureDetail} />
              <Quiz id={params.id} lectureDetail={lectureDetail} />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
