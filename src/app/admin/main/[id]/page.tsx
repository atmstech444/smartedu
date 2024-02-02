"use client";
import SecondNavbar from "../components/SecondNavbar";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import QuizUpload from "./components/QuizUpload";
import ReadingUpload from "./components/ReadingUpload";
import VideoUpload from "./components/VideoUpload";

const page = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [activeTab, setActiveTab] = useState("წასაკითხი");

  useEffect(() => {
    const storedData = localStorage.getItem(`course_${id}`);
    if (storedData) {
      setCourseData(JSON.parse(storedData));
    }
  }, [id]);

  let content = null;
  if (activeTab === "წასაკითხი") {
    content = <ReadingUpload />;
  } else if (activeTab === "ვიდეო") {
    content = <VideoUpload />;
  } else if (activeTab === "ქვიზი") {
    content = <QuizUpload />;
  }

  return (
    <div className="flex gap-8 w-[100%]">
      <SecondNavbar courseData={courseData} lectureNames={[]} />

      <div className="flex flex-col gap-10  mt-11 w-[97%]">
        {/* <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {content} */}
      </div>
    </div>
  );
};

export default page;
