import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { addLecture } from "../[id]/services/addLecture";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { useParams } from "next/navigation";
import { getAllCourses } from "../services/getCourses";
import { deleteLecture } from "../[id]/services/deleteLecture";
import { useRouter } from "next/navigation";

type Lecture = {
  course_id: number;
  created_at: string;
  id: number;
  lecture_name: string;
};

interface LectureName {
  id: number;
  lecture_name: string;
}

const SecondNavbar = ({ courseData, lectureNames }: { courseData: any; lectureNames: LectureName[] }) => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.authToken;
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [inputs, setInputs] = useState<{ key: number; element: JSX.Element }[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [finalUpdatedLectures, setFinalUpdatedLectures] = useState<Lecture[]>([]);

  const handleImageClick = () => {
    const newInputKey = inputs.length + 1;

    const handleDeleteInput = (key: number) => {
      setInputs((prevInputs) => prevInputs.filter((input) => input.key !== key));
    };

    const newInput = (
      <div className="relative" key={newInputKey}>
        <input ref={(ref) => (inputRefs.current[newInputKey] = ref!)} type="text" placeholder="ლექცია" className="border border-1-black rounded-lg px-3 py-1 outline-none max-w-[200px]" onChange={() => {}} name={`name-${newInputKey}`} />
        <Image src={"/assets/img/admin/closeIcon.png"} width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute right-3 top-3" onClick={() => handleDeleteInput(newInputKey)} />
      </div>
    );

    setInputs((prevInputs) => [...prevInputs, { key: newInputKey, element: newInput }]);
  };

  const { id } = useParams();

  useEffect(() => {
    if (courseData) {
      setLectures(courseData.lectures);
    }
  }, [courseData]);

  const handleCreateLecture = async () => {
    const formData = new FormData();

    const lectureNames: string[] = [];

    inputRefs.current.forEach((ref, index) => {
      formData.append(`lecture_name[]`, ref.value);
      lectureNames.push(ref.value);
    });

    try {
      const response = await addLecture(token, formData, id);
      if (response.success) {
        setLectures(response.lectures);
        setFinalUpdatedLectures(response.lectures);
        updateLocalStorage(response.lectures);
        console.log(response);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to create tutor");
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

  const updateLocalStorage = (lectures: Lecture[]) => {
    localStorage.setItem("lectures", JSON.stringify(lectures));
  };

  const handleDeleteLecture = async (id: number) => {
    try {
      const response = await deleteLecture(token, id);
      if (response.message) {
        const updatedLectures = lectures.filter((lecture) => lecture.id !== id);
        setLectures(updatedLectures);
        setFinalUpdatedLectures(updatedLectures);
        updateLocalStorage(updatedLectures);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete lecture");
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

  useEffect(() => {
    const storedLectures = localStorage.getItem("lectures");
    if (storedLectures) {
      setLectures(JSON.parse(storedLectures));
    }
  }, []);

  useEffect(() => {
    const storedLectureNames = localStorage.getItem("lectureNames");
    if (storedLectureNames) {
      const lectureNames = JSON.parse(storedLectureNames);
      setLectures(lectureNames.map((name: string, index: number) => ({ id: index, lecture_name: name })));
    }
  }, [courseData]);

  const handleOpenTabs = (lectureId: number) => {
    router.push(`/admin/add-lecture?lectureId=${lectureId}`);
  };

  const updateLectures = () => {
    if (lectureNames?.length === 0 && lectures?.length === 0) {
      const updatedLecturesJSON = localStorage.getItem("lectures");
      if (updatedLecturesJSON) {
        const updatedLectures = JSON.parse(updatedLecturesJSON);
        const finalUpdatedLectures = updatedLectures.map((lecture: any, index: number) => ({
          id: lecture.id,
          lecture_name: lecture.lecture_name,
        }));
        console.log(finalUpdatedLectures);
        setFinalUpdatedLectures(finalUpdatedLectures);
      } else {
        console.log("No lectures found in localStorage.");
      }
    }
  };

  useEffect(() => {
    updateLectures();
  }, [handleCreateLecture, handleDeleteLecture]);

  return (
    <div className="w-64 mt-11 px-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className=" flex flex-col gap-4 w-[200px] max-w-[200px]">
        <img src={`https://smarteducation.shop/smarteducation_backend/public/admin/${courseData?.cover_image}`} className="rounded-2xl" />
        <p className="text-base text-black font-semibold">{courseData?.title}</p>
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>
        {lectureNames?.length === 0 && finalUpdatedLectures?.length === 0
          ? lectures?.map((lecture) => (
              <div key={lecture.id} className="flex justify-between items-center">
                <h1 onClick={() => handleOpenTabs(lecture.id)} className="cursor-pointer underline">
                  {lecture.lecture_name}
                </h1>
                <button onClick={() => handleDeleteLecture(lecture.id)} className="bg-mainBlue rounded-faqBordeR text-base mt-2 text-center text-white hover:opacity-75 transition-all ease-in-out px-1 py-1">
                  წაშლა
                </button>
              </div>
            ))
          : null}

        {lectureNames?.length === 0 &&
          lectures?.length > 0 &&
          finalUpdatedLectures?.map((lecture) => (
            <div key={lecture.id} className="flex justify-between items-center">
              <h1 onClick={() => handleOpenTabs(lecture.id)} className="cursor-pointer underline">
                {lecture.lecture_name}
              </h1>
              <button onClick={() => handleDeleteLecture(lecture.id)} className="bg-mainBlue rounded-faqBordeR text-base mt-2 text-center text-white hover:opacity-75 transition-all ease-in-out px-1 py-1">
                წაშლა
              </button>
            </div>
          ))}

        {lectureNames?.length > 0
          ? lectureNames?.map((lecture) => (
              <div key={lecture.id} className="flex justify-between items-center">
                <h1 onClick={() => handleOpenTabs(lecture.id)} className="cursor-pointer underline">
                  {lecture.lecture_name}
                </h1>
                <button onClick={() => handleDeleteLecture(lecture.id)} className="bg-mainBlue rounded-faqBordeR text-base mt-2 text-center text-white hover:opacity-75 transition-all ease-in-out px-1 py-1">
                  წაშლა
                </button>
              </div>
            ))
          : null}

        {lectureNames?.length === 0 && lectures?.length === 0 ? <div></div> : null}

        {lectureNames?.length === 0 && (
          <>
            {inputs.map((input) => input.element)}
            <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
            <div>
              <button onClick={handleCreateLecture} className="bg-mainBlue  rounded-faqBordeR  text-base mt-2 text-center text-white hover:opacity-75  transition-all ease-in-out  px-4 py-2">
                შენახვა
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondNavbar;
