"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { FC } from "react";
import { parseCookies } from "nookies";
import { getCourseById } from "../../services/getCourseById";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { getCategories } from "@/app/admin/add-course/services/getCategories";
import { getLecturers } from "@/app/admin/add-course/services/getLecturers";
import Swal from "sweetalert2";
import { editCourseById } from "../../services/editCourseById";
import EditFullCourse from "./EditFullCourse";
import { redirect } from "next/navigation";
interface pageProps {
  params: { id: number };
}
const Editcourse: FC<pageProps> = ({ params }) => {
  const cookies = parseCookies();
  const token = cookies.authToken;

  const [categories, setCategories] = useState<any[]>([]);
  const [lectures, setLectures] = useState<any[]>([]);
  const [data, setData] = useState<any>([]);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedIntro, setSelectedIntro] = useState<File | null>(null);

  const initialSelectedCategoryId = data?.category?.id ?? null;
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(initialSelectedCategoryId);
  const initialSelectedLecturerId = data?.lecturer?.id ?? null;
  const [selectedLecturerId, setSelectedLecturerId] = useState<number | null>(initialSelectedLecturerId);

  useLayoutEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course by ID
        const courseResponse = await getCourseById(token, params.id);
        setData(courseResponse.course);
        setSelectedCategoryId(courseResponse.course.category.id);
        setSelectedLecturerId(courseResponse.course.lecturer_id);

        // Fetch categories
        const categoriesResponse = await getCategories(token);
        setCategories(categoriesResponse.course_categories);

        // Fetch lectures
        const lecturesResponse = await getLecturers(token);
        setLectures(lecturesResponse.lecturers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const handleLecturerChange = (selectedValue: number) => {
    setSelectedLecturerId(selectedValue);
  };

  const handleEdit = async () => {
    const courseTitle = document.getElementById("courseTitle") as HTMLInputElement;
    const descriptionInput = document.getElementById("descriptionInput") as HTMLTextAreaElement;
    const priceInput = document.getElementById("priceInput") as HTMLInputElement;

    const durationInput = document.getElementById("durationInput") as HTMLInputElement;
    const languageInput = document.getElementById("languageInput") as HTMLInputElement;

    const formData = new FormData();

    formData.append("_method", "PUT");

    formData.append("title", courseTitle.value);
    formData.append("description", descriptionInput.value);
    formData.append("price", priceInput.value);
    formData.append("duration", durationInput.value);
    formData.append("language", languageInput.value);
    const categoryIdToAppend = selectedCategoryId !== null ? selectedCategoryId.toString() : (initialSelectedCategoryId ?? "").toString();

    formData.append("course_category_id", categoryIdToAppend);

    const lecturerIdToAppend = selectedLecturerId !== null ? selectedLecturerId.toString() : (initialSelectedLecturerId ?? "").toString();

    formData.append("lecturer_id", lecturerIdToAppend);

    if (selectedImage instanceof File) {
      formData.append("cover_image", selectedImage);
    }

    if (selectedIntro instanceof File) {
      formData.append("intro", selectedIntro);
    }

    try {
      const response = await editCourseById(token, params.id, formData);
      if (response.message) {
        Swal.fire({
          icon: "success",
          title: "Data successfully edited",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to update about");
        Swal.fire({
          icon: "warning",
          title: "Data didn't edit.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };

  const handleFileChange = (selectedFile: File) => {
    setSelectedImage(selectedFile);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="flex gap-8">
          <Navbar />

          <div className="flex justify-between w-[85%]">
            <EditFullCourse
              data={data}
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              handleCheckboxChange={handleCheckboxChange}
              lectures={lectures}
              selectedLecturerId={selectedLecturerId}
              handleLecturerChange={handleLecturerChange}
              handleFileChange={handleFileChange}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcourse;