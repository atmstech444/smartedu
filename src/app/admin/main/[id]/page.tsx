"use client";
import SecondNavbar from "../components/SecondNavbar";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [activeTab] = useState("წასაკითხი");

  useEffect(() => {
    const storedData = localStorage.getItem(`course_${id}`);
    if (storedData) {
      setCourseData(JSON.parse(storedData));
    }
  }, [id]);

  if (activeTab === "წასაკითხი") {
  } else if (activeTab === "ვიდეო") {
  } else if (activeTab === "ქვიზი") {
  }

  return (
    <div className="flex gap-8 w-[100%]">
      <SecondNavbar courseData={courseData} lectureNames={[]} />

      <div className="flex flex-col gap-10  mt-11 w-[97%]"></div>
    </div>
  );
};

export default Page;
