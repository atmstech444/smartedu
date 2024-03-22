"use client";
import CourseDetailsMain from "@/components/course-details/CourseDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const CourseDetailsPage = () => {
  const id = 1;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <CourseDetailsMain id={id} />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default CourseDetailsPage;
