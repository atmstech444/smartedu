import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import LectureNav from "../components/LectureNav";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <Wrapper>
        <div className=" bg-[#F3F4F8] pt-10 max-w-screen-xl mx-auto">
          <LectureNav />
        </div>
      </Wrapper>
    </>
  );
};

export default page;
