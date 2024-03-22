import { I_Course_Details } from "@/api/GET_CourseDetails";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tab from "./Tab";

const CourseTabAccordion = ({ course }: { course: I_Course_Details }) => {
  return (
    <div className="course__curriculum">
      {course.syllabus.map((item, index) => {
        return <Tab key={`acc-${uuidv4()}`} index={index} item={item} />;
      })}
    </div>
  );
};

export default CourseTabAccordion;
