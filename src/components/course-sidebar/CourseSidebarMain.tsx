import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CourseArea from "./CourseArea";

const CourseSidebarMain = () => {
  return (
    <>
      <Breadcrumb title="Courses" subTitle="Courses" />
      <CourseArea />
    </>
  );
};

export default CourseSidebarMain;
