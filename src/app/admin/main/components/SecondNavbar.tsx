import React, { useRef, useState } from "react";
import Image from "next/image";
import { addLecture } from "../[id]/services/addLecture";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { useParams } from "next/navigation";

type Lecture = {
  course_id: number;
  created_at: string;
  id: number;
  lecture_name: string;
};

const SecondNavbar = ({ courseData }: any) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [inputs, setInputs] = useState<{ key: number; element: JSX.Element }[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);

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

  const handleCreateLecture = async () => {
    const formData = new FormData();

    const lectureNames: string[] = [];

    inputRefs.current.forEach((ref, index) => {
      formData.append(`lecture_name[]`, ref.value);
      lectureNames.push(ref.value);
    });

    try {
      const response = await addLecture(token, formData, id);
      console.log(response);
      setLectures(response.lectures);
      if (response.success) {
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
  console.log("lectures:", lectures);
  return (
    <div className="w-64 mt-11 px-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className=" flex flex-col gap-4 w-[200px] max-w-[200px]">
        <img src={`http://192.168.96.66:8000/admin/${courseData?.cover_image}`} className="rounded-2xl" />
        <p className="text-base text-black font-semibold">{courseData?.title}</p>
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>

        {lectures &&
          lectures.map((lecture) => (
            <div key={lecture.id} className="flex justify-between items-center">
              <h1>{lecture.lecture_name}</h1>
              <button className="bg-mainBlue  rounded-faqBordeR  text-base mt-2 text-center text-white hover:opacity-75  transition-all ease-in-out  px-1 py-1">წაშლა</button>
            </div>
          ))}

        {inputs.map((input) => input.element)}
        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
        {inputs.length !== 0 && (
          <div>
            <button onClick={handleCreateLecture} className="bg-mainBlue  rounded-faqBordeR  text-base mt-2 text-center text-white hover:opacity-75  transition-all ease-in-out  px-4 py-2">
              შენახვა
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondNavbar;
