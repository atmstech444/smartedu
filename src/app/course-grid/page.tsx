import CourseGridMain from "@/components/course-grid/CourseGridMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main>
        <CourseGridMain />
      </main>
    </Wrapper>
  );
};

export default page;
