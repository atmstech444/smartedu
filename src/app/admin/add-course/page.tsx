"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CourseAndSyllabus from "./components/CourseAndSyllabus";
import CourseCategory from "./components/CourseCategory";
import { createCourse } from "./services/createCourse";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { redirect, useRouter } from "next/navigation";
import { LectureOption } from "./components/Lecture";
import ImageUpload from "./components/ImageUpload";
import CourseDetails from "./components/CourseDetails";
import { CourseTitleInput } from "./components/CourseTitle";
import LoadingSpinner from "@/components/LoadingSpinner";

const AddCourse = () => {
  const router = useRouter();
  const [courseDescription, setCourseDescription] = useState("");
  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedIntro, setSelectedIntro] = useState<File | null>(null);

  const [selectedLecture, setSelectedLecture] = useState<LectureOption[]>([]);
  const [errorMessages, setErrorMessages] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const componentMounted = useRef(false);
  const cookies = parseCookies();
  const token = cookies.authToken;
  useLayoutEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, [token]);
  useEffect(() => {
    if (componentMounted.current) {
      checkedIndexes.length > 0 ? checkedIndexes[0] : null;
    } else {
      componentMounted.current = true;
    }
  }, [checkedIndexes]);
  const handleCourseDescriptionChange = (text: any) => {
    setCourseDescription(text);
  };
  const handleCheckChange = (newCheckedIndexes: number[]) => {
    if (!arraysEqual(checkedIndexes, newCheckedIndexes)) {
      setCheckedIndexes(newCheckedIndexes);
    }
  };
  function arraysEqual(a: any[], b: any[]) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  const handleDeleteIntro = () => {
    setSelectedIntro(null);
  };
  const handleLectureChange = (selectedLecture: LectureOption[]) => {
    setSelectedLecture(selectedLecture);
  };
  const handleIntroUpload = (selectedFile: React.SetStateAction<File | null>) => {
    setSelectedIntro(selectedFile);
  };
  const handleCreate = async () => {
    const showLoadingSpinner = () => setIsLoading(true);
    const hideLoadingSpinner = () => setIsLoading(false);
    const courseTitle = document.getElementById("courseTitle") as HTMLInputElement;
    const priceInput = document.getElementById("priceInput") as HTMLInputElement;
    const discountedPrice = document.getElementById("discountedPrice") as HTMLInputElement;
    const durationInput = document.getElementById("durationInput") as HTMLInputElement;
    const languageInput = document.getElementById("languageInput") as HTMLInputElement;
    const requiredFields = {
      title: courseTitle.value,
      description: courseDescription,
      price: priceInput.value,
      lecturer: selectedLecture,
      duration: durationInput.value,
      language: languageInput.value,
      cover_image: selectedImage,
      intro: selectedIntro,
      course_category: checkedIndexes.join(","),
    };
    const errors: Record<string, string[]> = {};
    Object.entries(requiredFields).forEach(([field, value]) => {
      if (!value && field !== "lecturer") {
        errors[field] = [`The ${field.replace("_", " ")} field is required.`];
      } else if (field === "lecturer" && Array.isArray(value) && value.length === 0) {
        errors[field] = [`The ${field.replace("_", " ")} field is required.`];
      }
    });

    const numericFields = ["price", "lecture_count"];
    numericFields.forEach((field) => {
      const value = requiredFields[field as keyof typeof requiredFields];
      if (value && isNaN(Number(value))) {
        errors[field] = [`The ${field.replace("_", " ")} field must be a number.`];
      }
    });
    setErrorMessages(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    const formData = new FormData();
    formData.append("title", courseTitle.value);
    formData.append("description", courseDescription);
    formData.append("price", priceInput.value);
    if (discountedPrice.value.trim() !== "") {
      formData.append("discounted_price", discountedPrice.value);
    } else {
      formData.append("discounted_price", "");
    }
    //@ts-ignore
    formData.append("lecturer_id", selectedLecture);
    formData.append("duration", durationInput.value);
    formData.append("language", languageInput.value);
    formData.append("course_category_id", checkedIndexes.join(","));

    if (selectedImage instanceof File) {
      formData.append("cover_image", selectedImage);
    }
    if (selectedIntro instanceof File) {
      formData.append("intro", selectedIntro);
    }
    try {
      showLoadingSpinner();
      const response = await createCourse(token, formData);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "კურსი წარმატებით დაემატა",
          showConfirmButton: true,
          timer: 1500,
        });
        router.push("/admin/main");
      } else {
        console.error("Failed to create about");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    } finally {
      hideLoadingSpinner();
    }
  };
  return (
    <div>
      <Header />
      <div>
        <div className="flex gap-8">
          <Navbar />
          <div className="flex justify-between w-[85%]">
            <div className="mt-6">
              <CourseTitleInput />
              {errorMessages.title && <p className="text-red pt-2">{errorMessages.title[0]}</p>}
              <CourseAndSyllabus onCourseDescriptionChange={handleCourseDescriptionChange} />
              {errorMessages.description && <p className="text-red pt-2">{errorMessages.description[0]}</p>}

              <div className="pt-9">
                <p className="text-dark text-xl font-normal">დაამატე კურსის ფოტო</p>

                <ImageUpload onFileChange={(file: React.SetStateAction<File | null>) => setSelectedImage(file)} onDeletePhoto={() => setSelectedImage(null)} selectedImage={selectedImage} />
              </div>
              {errorMessages.cover_image && <p className="text-red pt-2">{errorMessages.cover_image[0]}</p>}
            </div>

            <div className="flex flex-col items-end">
              <CourseCategory onCheckChange={handleCheckChange} />
              {errorMessages.course_category && <p className="text-red pt-2 pl-10 w-full">{errorMessages.course_category[0]}</p>}
              <CourseDetails selectedIntro={selectedIntro} onIntroUpload={handleIntroUpload} onDeleteIntro={handleDeleteIntro} selectedLecture={selectedLecture} onLectureChange={handleLectureChange} errorMessages={errorMessages} />
              <button className="mt-14 mb-28 py-3 px-12 bg-[#006CFA]  rounded-[32px] text-white self-center" onClick={handleCreate} disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : "შენახვა"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCourse;
