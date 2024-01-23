import React from "react";
import Watching from "./Watching";
import { GET_Courses, I_Course } from "@/api/GET_Courses";

export async function generateStaticParams() {
  const courses = (await GET_Courses()) as I_Course[];
  return courses.map((course) => ({ id: course.id.toString() }));
}

export default function page({ params }: { params: { id: number } }) {
  return (
    <>
      <Watching params={params} />
    </>
  );
}
