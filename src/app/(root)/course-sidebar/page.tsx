"use client";
import CourseSidebarMain from "@/components/course-sidebar/CourseSidebarMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const CourseSideBarPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <CourseSidebarMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default CourseSideBarPage;
