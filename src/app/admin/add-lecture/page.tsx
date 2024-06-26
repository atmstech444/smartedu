"use client";
import { useEffect, useState } from "react";
import QuizUpload from "../main/[id]/components/QuizUpload";
import ReadingUpload from "../main/[id]/components/ReadingUpload";
import VideoUpload from "../main/[id]/components/VideoUpload";
import Tabs from "../main/[id]/components/Tabs";
import Header from "@/components/Header";
import { getAllCourses } from "../main/services/getCourses";
import { parseCookies } from "nookies";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface Lecture {
  id: any;
  name: any;
}

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [courseData, setCourseData] = useState<any | null>(null);

  const router = useRouter();
  useEffect(() => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      router.replace('/admin/');
    }
  }, [router]);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    const lecturesParam = searchParams.get("lectures");
    const courseDataParam = searchParams.get("courseData");

    setLectureId(id);
    if (lecturesParam) {
      const lecturesArray: Lecture[] = JSON.parse(decodeURIComponent(lecturesParam));
      setLectures(lecturesArray);
    }

    if (courseDataParam) {
      const parsedCourseData = JSON.parse(decodeURIComponent(courseDataParam));
      setCourseData(parsedCourseData);
    }
  }, []);

  return { lectureId, lectures, courseData };
};

const AddLecturePage = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const { lectures, courseData } = useQueryParams();
  const [activeTab, setActiveTab] = useState("");
  const [lectureNames, setLectureNames] = useState([]);
  const [refreshTabs] = useState(false);

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
  }, [token]);

  let content = null;
  if (activeTab === "წასაკითხი") {
    content = <ReadingUpload lectures={lectures} courseData={courseData} />;
  } else if (activeTab === "ვიდეო") {
    content = <VideoUpload />;
  } else if (activeTab === "ქვიზი") {
    content = <QuizUpload lectures={lectures} courseData={courseData} />;
  }

  return (
    <>
      <Header />
      <div className="flex gap-8 w-[100%]">
        <Navbar lectures={lectures} courseData={courseData} />
        <div className="flex flex-col gap-10  mt-11 w-[97%]">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} lectureNames={lectureNames} key={refreshTabs ? "refreshed" : "not-refreshed"} />
          {content}
        </div>
      </div>
    </>
  );
};

export default AddLecturePage;
