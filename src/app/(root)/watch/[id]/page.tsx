import React from "react";
import Watching from "./Watching";
import { GET_Courses, I_Course } from "@/api/GET_Courses";


export default function page({ params }: { params: { id: number } }) {
  return (
    <>
      <Watching params={params} />
    </>
  );
}
