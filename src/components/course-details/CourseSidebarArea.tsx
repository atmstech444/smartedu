import React from "react";
import SidebarVideoArea from "./SidebarVideoArea";
import Image from "next/image";
import CourseDotImg from "../../../public/assets/img/course/course-dot.png";
import { I_Course_Details } from "@/api/GET_CourseDetails";

const CourseSidebarArea = ({ course }: { course: I_Course_Details }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="course__sidebar pl-70 p-relative">
        <div className="course__shape">
          <Image className="course-dot" style={{ width: "auto", height: "auto" }} src={CourseDotImg} alt="image not found" />
        </div>
        {course && <SidebarVideoArea course={course} />}
      </div>
    </div>
  );
};

export default CourseSidebarArea;
