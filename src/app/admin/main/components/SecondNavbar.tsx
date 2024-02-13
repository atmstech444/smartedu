"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { addLecture } from "../[id]/services/addLecture";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { deleteLecture } from "../[id]/services/deleteLecture";

type Lecture = {
  course_id: any;
  created_at: any;
  id: any;
  lecture_name: any;
};

interface LectureName {
  id: any;
  lecture_name: any;
}

const SecondNavbar = ({ courseData, lectureNames }: { courseData: any; lectureNames: LectureName[] }) => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.authToken;
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [inputs, setInputs] = useState<string[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const { id } = useParams();
  const courseId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

  useEffect(() => {
    if (courseData) {
      setLectures(courseData.lectures);
    }
  }, [courseData]);

  const handleImageClick = () => {
    setInputs((prevInputs) => [...prevInputs, ""]);
  };

  const handleCreateLecture = async () => {
    const formData = new FormData();

    inputRefs.current.forEach((ref) => {
      formData.append(`lecture_name[]`, ref.value);
    });

    try {
      const response = await addLecture(token, formData, id);
      if (response.success) {
        const newLectures = response.lectures;
        setLectures((prevLectures) => [...prevLectures, ...newLectures]);
        setInputs([]);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };

  const handleDeleteLecture = async (lectureId: number) => {
    try {
      const response = await deleteLecture(token, lectureId);
      if (response.message) {
        setLectures((prevLectures) => prevLectures.filter((lecture) => lecture.id !== lectureId));
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };

  const handleOpenTabs = (lectureId: number) => {
    const lecturesData = lectures.map((lecture) => ({
      id: lecture.id,
      name: lecture.lecture_name,
    }));
    router.push(`/admin/add-lecture?lectureId=${lectureId}&lectures=${encodeURIComponent(JSON.stringify(lecturesData))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };

  return (
    <div className="w-64 mt-11 px-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className=" flex flex-col gap-4 w-[200px] max-w-[200px]">
        <img src={`https://smarteducation.shop/smarteducation_backend/public/admin/${courseData?.cover_image}`} className="rounded-2xl" />
        <p className="text-base text-black font-semibold">{courseData?.title}</p>
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>

        {lectures.map((lecture) => (
          <div key={lecture.id} className="flex justify-between items-center">
            <h1 onClick={() => handleOpenTabs(lecture.id)} className="cursor-pointer underline">
              {lecture.lecture_name}
            </h1>

            <button onClick={() => handleDeleteLecture(lecture.id)} className="bg-mainBlue rounded-faqBordeR text-base mt-2 text-center text-white hover:opacity-75 transition-all ease-in-out px-1 py-1">
              წაშლა
            </button>
          </div>
        ))}

        {inputs.map((_, index) => (
          <div className="relative" key={index}>
            <input ref={(ref) => (inputRefs.current[index] = ref!)} type="text" placeholder="ლექცია" className="border border-1-black rounded-lg px-3 py-1 outline-none max-w-[200px]" name={`name-${index}`} />
            <Image src="/assets/img/admin/closeIcon.png" width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute right-3 top-3" onClick={() => setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index))} />
          </div>
        ))}

        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
        <div>
          <button onClick={handleCreateLecture} className="bg-mainBlue rounded-faqBordeR text-base mt-2 text-center text-white hover:opacity-75 transition-all ease-in-out px-4 py-2">
            შენახვა
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
