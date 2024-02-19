import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { useAppSelector } from "@/redux/store";
import { LectureTypes } from "../[id]/course/Lecture";

const SecondaryNav = (id: { id: any }) => {
  const [lectureDetail, setLectureDetail] = useState<LectureTypes>();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  const fetchData = async () => {
    try {
      const lectureDetail = await Get_Lecture_Detail(params.id, token);
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
      <div className="md:p-[24px] md:mt-0 md:w-[30%] lg:w-[20%] bg-white rounded-md md:h-full">
        secondary Nav
        <h3>dcdc</h3>
        <h3>dcdc</h3>
        <h3>dcdc</h3>
        <h3>dcdc</h3>
        <h3>dcdc</h3>
      </div>
    </>
  );
};

export default SecondaryNav;
