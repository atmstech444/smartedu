import axios from "axios";
import { API_PATH } from "./API_PATH";

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

export async function GET_CourseDetails(id: number) {
  try {
    const response = await axios.get<{ course: I_Course_Details }>(API_PATH + "courses/detail/" + id);
    return response.data.course;
  } catch (error: any) {}
}
