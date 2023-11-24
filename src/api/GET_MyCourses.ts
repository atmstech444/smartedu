import axios from "axios";
import { API_PATH } from "./API_PATH";
import { setMyCourses } from "@/redux/slices/myCoursesSlice";

export interface POST_Login_Params {
  token: string;
}

export interface I_MyCourse {
  id: number;
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
  lecturer: {
    id: number;
    first_name: string;
    last_name: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  category: {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
}

export async function GET_MyCourses(data: POST_Login_Params, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.get<{ courses: I_MyCourse[] }>(API_PATH + "courses/auth/user", config);
    dispatch(setMyCourses(response.data.courses));
    return response.data.courses;
  } catch (error: any) {}
}