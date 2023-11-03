import InstructorDetailsMain from "@/components/instructor-details/InstructorDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const InstructorDetailPage = () => {
  const id = 1;
  return (
    <Wrapper>
      <main>
        <InstructorDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default InstructorDetailPage;
