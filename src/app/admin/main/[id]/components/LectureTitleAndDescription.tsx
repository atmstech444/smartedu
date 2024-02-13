import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addlectureTitleAndDescription } from "../services/addlectureTitleAndDescription";
import { parseCookies } from "nookies";
import Swal from "sweetalert2";
import { getCourseById } from "../../services/getCoursesById";
import { getLectureAndDescriptions } from "../services/getLectureAndDescriptions";
import { deleteTitleAndDescription } from "../services/deleteTitleAndDescription";

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setLectureId(id);
  }, []);

  return lectureId;
};

const LectureTitleAndDescription = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const lectureId = useQueryParams();
  const [isTypingInput, setIsTypingInput] = useState(false);
  const [isTypingTextarea, setIsTypingTextarea] = useState(false);
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureDescription, setLectureDescription] = useState("");
  const [titleDescriptionData, setTitleDescriptionData] = useState<{ id: number; title: string; description: string } | null>(null);

  const handleTypingInput = () => {
    setIsTypingInput(true);
  };

  const handleTypingTextarea = () => {
    setIsTypingTextarea(true);
  };

  const handleBlurInput = () => {
    if (isTypingInput) {
      setIsTypingInput(false);
    }
  };

  const handleBlurTextarea = () => {
    if (isTypingTextarea) {
      setIsTypingTextarea(false);
    }
  };

  const handleSaveLecture = async () => {
    const formData = new FormData();
    formData.append("title", lectureTitle);
    formData.append("description", lectureDescription);

    try {
      const response = await addlectureTitleAndDescription(token, formData, lectureId);
      if (response.message === "lecture contet create successfully") {
        setTitleDescriptionData(response.lecture_content);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("An unexpected error occurred");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTitleAndDescription = async () => {
    if (!titleDescriptionData) return;

    const { id } = titleDescriptionData;
    try {
      const response = await deleteTitleAndDescription(token, id);
      if (response.message === "lecture content delete successfully") {
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
        setTitleDescriptionData(null);
      } else {
        console.error("An unexpected error occurred");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLectureAndDescriptions(token, lectureId);
        setTitleDescriptionData(data.lecture_content);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (lectureId !== undefined && lectureId !== null) {
      fetchData();
    }
  }, [lectureId]);

  return (
    <>
      {titleDescriptionData ? (
        <div className="relative flex flex-col gap-4">
          <div className="w-48 relative">
            <input
              type="text"
              value={titleDescriptionData?.title || ""}
              placeholder="ლექციის სათაური"
              onChange={(e) => setLectureTitle(e.target.value)}
              className="h-auto resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              onFocus={handleTypingInput}
              onBlur={handleBlurInput}
            />
            {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-[-5px]" alt={""} width={12} height={12} />}
          </div>
          <div className="relative">
            <textarea
              onChange={(e) => setLectureDescription(e.target.value)}
              value={titleDescriptionData?.description || ""}
              className="w-full max-w-[780px] h-auto resize-none rounded-lg px-2 pl-6 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              placeholder="ლექციის აღწერა"
              onFocus={handleTypingTextarea}
              onBlur={handleBlurTextarea}
            ></textarea>
            {!isTypingTextarea && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
          </div>

          <button className="text-white bg-red py-1 px-7 rounded-lg w-36" onClick={handleDeleteTitleAndDescription}>
            წაშლა
          </button>
        </div>
      ) : (
        <div className="relative flex flex-col gap-4">
          <div className="w-48 relative">
            <input
              type="text"
              value={lectureTitle}
              placeholder="ლექციის სათაური"
              onChange={(e) => setLectureTitle(e.target.value)}
              className="h-auto resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              onFocus={handleTypingInput}
              onBlur={handleBlurInput}
            />
            {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-[-5px]" alt={""} width={12} height={12} />}
          </div>
          <div className="relative">
            <textarea
              onChange={(e) => setLectureDescription(e.target.value)}
              value={lectureDescription}
              className="w-full max-w-[780px] h-auto resize-none rounded-lg px-2 pl-6 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              placeholder="ლექციის აღწერა"
              onFocus={handleTypingTextarea}
              onBlur={handleBlurTextarea}
            ></textarea>
            {!isTypingTextarea && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
          </div>

          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-36" onClick={handleSaveLecture}>
            შენახვა
          </button>
        </div>
      )}
    </>
  );
};

export default LectureTitleAndDescription;
