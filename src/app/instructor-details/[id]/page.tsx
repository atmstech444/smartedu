import InstructorDetailsMain from "@/components/instructor-details/InstructorDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <InstructorDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default page;
