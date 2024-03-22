"use client";
import CourseListMain from "@/components/course-list/CourseListMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const CourseListPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <CourseListMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default CourseListPage;
