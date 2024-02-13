"use client";
import CourseGridMain from "@/components/course-grid/CourseGridMain";
import Wrapper from "@/layout/DefaultWrapper";
import store from "@/redux/store";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <CourseGridMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default page;
