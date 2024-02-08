"use client";
import { useEffect, useState } from "react";
import SecondNavbar from "../main/components/SecondNavbar";
import { useParams } from "next/navigation";
import QuizUpload from "../main/[id]/components/QuizUpload";
import ReadingUpload from "../main/[id]/components/ReadingUpload";
import VideoUpload from "../main/[id]/components/VideoUpload";
import Tabs from "../main/[id]/components/Tabs";
import Header from "@/components/Header";
import { getAllCourses } from "../main/services/getCourses";
import { parseCookies } from "nookies";

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
  const cookies = parseCookies();
  const token = cookies.authToken;
  const lectureId = useQueryParams();

  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [activeTab, setActiveTab] = useState("წასაკითხი");
  const [lectureNames, setLectureNames] = useState<[]>([]);

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

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const data = await getAllCourses(token);
        setLectureNames(data.courses[0].lectures);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCourses();
  }, []);

  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <SecondNavbar lectureNames={lectureNames} courseData={""} />

        <div className="flex flex-col gap-10  mt-11 w-[97%]">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {content}
        </div>
      </div>
    </>
  );
};

export default AddLecturePage;
