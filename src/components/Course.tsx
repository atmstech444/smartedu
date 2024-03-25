"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PlusIcon from "@/public/assets/dynamic_icons/PlusIcon";
import CourseBox from "@/app/admin/main/components/CourseBox";
import { parseCookies } from "nookies";
import { getAllCourses } from "@/app/admin/main/services/getCourses";
import { AllCourses } from "@/type";
import LoadingSpinner from "./LoadingSpinner";
import Swal from "sweetalert2";
import { deleteCourse } from "@/app/admin/main/services/deleteCourse";

const Course = () => {
  const [courses, setCourses] = useState<AllCourses[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openedIndex, setOpenedIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = (index: any) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const cookies = parseCookies();
  const token = cookies.authToken;

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCourses(token);
        setCourses(data.courses);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllCourses();
  }, [token]);

  const handleDeleteLecture = async (courseid: any) => {
    try {
      setLoading(true);
      const response = await deleteCourse(token, courseid);
      if (response) {
        Swal.fire({
          icon: "success",
          title: "კურსი წარმატებით წაიშალა",
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
      const data = await getAllCourses(token);
      setCourses(data.courses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="mt-6">
      <h1 className="text-black text-xl font-normal">დაამატე კურსი</h1>
      <div className="w-72">
        <Link href="/admin/add-course">
          <div className="rounded-borderHalf border border-[#94BBCF] flex justify-center items-center px-20 py-8 mt-8 cursor-pointer">
            <PlusIcon />
          </div>
        </Link>
        <div className="mt-8 mb-6">
          <h1 className="text-black text-xl font-normal">კურსების ჩამონათვალი</h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-14 xl:grid-cols-3 xl:gap-16 2xl:grid-cols-4 2xl:gap-14">
        {isLoading ? (
          <LoadingSpinner />
        ) : courses?.length > 0 ? (
          courses.map((itm, index) => (
            <div className="col-span-1" key={itm.id}>
              <CourseBox data={itm} handleDeleteLecture={handleDeleteLecture} isOpen={openedIndex === index} toggleVisibility={() => toggleVisibility(index)} isLoading={loading} />
            </div>
          ))
        ) : (
          <p>კურსი არ არის დამატებული</p>
        )}
      </div>
    </main>
  );
};

export default Course;
