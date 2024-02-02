"use client";
import { useEffect, useState } from "react";
import SecondNavbar from "../main/components/SecondNavbar";
import { useParams } from "next/navigation";
import QuizUpload from "../main/[id]/components/QuizUpload";
import ReadingUpload from "../main/[id]/components/ReadingUpload";
import VideoUpload from "../main/[id]/components/VideoUpload";
import Tabs from "../main/[id]/components/Tabs";
import Header from "@/components/Header";

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setLectureId(id);
  }, []);

  return lectureId;
};

const AddLecturePage = () => {
  const lectureId = useQueryParams();

  console.log("Lecture ID:", lectureId);

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
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <SecondNavbar courseData={courseData} />

        <div className="flex flex-col gap-10  mt-11 w-[97%]">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {content}
        </div>
      </div>
    </>
  );
};

export default AddLecturePage;
