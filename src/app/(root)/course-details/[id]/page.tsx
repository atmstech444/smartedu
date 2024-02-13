"use client";
import { GET_Courses, I_Course } from "@/api/GET_Courses";
import CourseDetailsMain from "@/components/course-details/CourseDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
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

export default Page;
