import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { useAppSelector } from "@/redux/store";
import { LectureTypes } from "../[id]/course/Lecture";

const SecondaryNav = (id: { id: any }) => {
  const [lectureDetail, setLectureDetail] = useState<LectureTypes>();
  const router = useRouter();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  return (
    <>
      <div className="mt-[20%] p-[24px] md:mt-0 md:w-[30%] lg:w-[20%] bg-white rounded-md md:h-full">secondary Nav</div>
    </>
  );
};

export default SecondaryNav;
