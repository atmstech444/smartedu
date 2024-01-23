import { GET_Courses, I_Course } from "@/api/GET_Courses";
import CourseDetailsMain from "@/components/course-details/CourseDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

export async function generateStaticParams() {
  const courses = (await GET_Courses()) as I_Course[];
  return courses.map((course: I_Course) => ({ id: course.id.toString() }));
}

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <CourseDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default page;