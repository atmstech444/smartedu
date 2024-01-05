import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";
import { redirect } from "next/navigation";

export interface I_Course_Details {
  id: 1;
  title: string;
  description: string;
  price: string;
  duration: string;
  cover_image: string;
  language: string;
  lecturer_id: number;
  intro: string;
  course_category_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  lectures_count: number;
  average_rating: number;
  syllabus: {
    id: number;
    course_id: number;
    title: string;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
    descriptions: {
      id: number;
      course_syllabus_id: number;
      description: string;
      created_at: string;
      updated_at: string;
      deleted_at: null | string;
    }[];
  }[];
  lecturer: {
    id: number;
    first_name: string;
    last_name: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
  };
  category: {
    id: number;
    title: string;
    description: string;
  };
}

export async function GET_CourseDetails(id: number, dispatch: any) {
  try {
    const response = await axios.get<{ course: I_Course_Details }>(API_PATH + "courses/detail/" + id);
    return response.data.course;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      dispatch(removeUser());
      redirect("/");
    }
    // toast.error("დაფიქსირდა შეცდომა", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 2000,
    // });
  }
}
