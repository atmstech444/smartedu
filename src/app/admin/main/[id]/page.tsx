"use client";
import SecondNavbar from "../components/SecondNavbar";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const page = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem(`course_${id}`);
    console.log(storedData);
    if (storedData) {
      setCourseData(JSON.parse(storedData));
    }
  }, [id]);
  return (
    <div>
      <SecondNavbar courseData={courseData} />
    </div>
  );
};

export default page;
