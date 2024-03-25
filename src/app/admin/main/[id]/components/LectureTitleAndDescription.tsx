"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addlectureTitleAndDescription } from "../services/addlectureTitleAndDescription";
import { parseCookies } from "nookies";
import Swal from "sweetalert2";
import { getLectureAndDescriptions } from "../services/getLectureAndDescriptions";
import { deleteTitleAndDescription } from "../services/deleteTitleAndDescription";
import { useSearchParams } from "next/navigation";
import SecondLoadingSpinner from "@/components/LoadingSpinner";
import { set } from "js-cookie";

const LectureTitleAndDescription = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [isTypingTextarea, setIsTypingTextarea] = useState(false);
  const [, setLectureTitle] = useState("");
  const [lectureDescription, setLectureDescription] = useState("");
  const [titleDescriptionData, setTitleDescriptionData] = useState<{ id: number; title: string; description: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const lectureId = searchParams.get("lectureId");

  const handleTypingTextarea = () => {
    setIsTypingTextarea(true);
  };

  const handleBlurTextarea = () => {
    if (isTypingTextarea) {
      setIsTypingTextarea(false);
    }
  };

  const handleSaveLecture = async () => {
    // if (!lectureTitle.trim()) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "გთხოვთ შეიყვანეთ ლექციის სათაური",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    //   return;
    // }

    if (!lectureDescription.trim()) {
      Swal.fire({
        icon: "warning",
        title: "გთხოვთ შეიყვანეთ ლექციის აღწერა",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const formData = new FormData();
    // formData.append("title", lectureTitle);
    formData.append("description", lectureDescription);

    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTitleAndDescription = async () => {
    if (!titleDescriptionData) return;

    const { id } = titleDescriptionData;
    try {
      setLoading(true);
      const response = await deleteTitleAndDescription(token, id);
      if (response.message === "lecture content delete successfully") {
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
        setTitleDescriptionData(null);
        setLectureTitle("");
        setLectureDescription("");
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getLectureAndDescriptions(token, lectureId);
        if (data.lecture_content) {
          setTitleDescriptionData(data.lecture_content);
          setLectureTitle(data.lecture_content.title || "");
          setLectureDescription(data.lecture_content.description || "");
        } else {
          setTitleDescriptionData(null);
          setLectureTitle("");
          setLectureDescription("");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (lectureId !== undefined && lectureId !== null) {
      fetchData();
    }
  }, [lectureId, token]);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-3 justify-start items-center w-36">
          <SecondLoadingSpinner />
          <p>იტვირთება...</p>
        </div>
      ) : titleDescriptionData !== null ? (
        <div className="relative flex flex-col gap-4">
          {/* <div className="w-full relative">
            <input
              type="text"
              value={titleDescriptionData.title || ""}
              placeholder="ლექციის აღწერა"
              onChange={(e) => setLectureTitle(e.target.value)}
              className="w-[90%] h-auto resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              onFocus={handleTypingInput}
              onBlur={handleBlurInput}
            />
            {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-[-5px]" alt={""} width={12} height={12} />}
          </div> */}
          <div className="relative">
            <textarea
              onChange={(e) => setLectureDescription(e.target.value)}
              value={titleDescriptionData.description || ""}
              className="w-full max-w-[780px] h-auto resize-none rounded-lg px-2 pl-6 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              placeholder="ლექციის აღწერა"
              onFocus={handleTypingTextarea}
              onBlur={handleBlurTextarea}
            ></textarea>
            {!isTypingTextarea && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
          </div>

          {loading ? (
            "იტვირთება..."
          ) : (
            <button className="text-white bg-red py-1 px-7 rounded-lg w-36" onClick={handleDeleteTitleAndDescription}>
              წაშლა
            </button>
          )}
        </div>
      ) : (
        <div className="relative flex flex-col gap-4">
          {/* <div className=" relative">
            <input
              type="text"
              value={lectureTitle}
              placeholder="ლექციის აღწერა"
              onChange={(e) => setLectureTitle(e.target.value)}
              className="w-full max-w-[780px] h-auto resize-none rounded-lg pl-6 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              onFocus={handleTypingInput}
              onBlur={handleBlurInput}
            />
            {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
          </div> */}
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

          {loading ? (
            "იტვირთება..."
          ) : (
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-36" onClick={handleSaveLecture}>
              შენახვა
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default LectureTitleAndDescription;
