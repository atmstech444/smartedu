import CourseListMain from "@/components/course-list/CourseListMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const CourseListPage = () => {
  return (
    <Wrapper>
      <main>
        <CourseListMain />
      </main>
    </Wrapper>
  );
};

export default CourseListPage;
