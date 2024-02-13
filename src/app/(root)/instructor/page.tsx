"use client";
import InstructorMain from "@/components/instructor/InstructorMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const InstructorPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <InstructorMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default InstructorPage;
