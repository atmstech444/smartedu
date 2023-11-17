import axios from "axios";
import { API_PATH } from "./API_PATH";

export interface POST_Login_Success {
  courses: I_Course[];
}

export interface I_Course {
  id: number;
  title: string;
  cover_image: string;
  price: string;
  lecturer_id: number;
  course_category_id: number;
  lectures_count: number;
  category: {
    id: number;
    title: string;
    description: string;
  };
  lecturer: {
    id: number;
    first_name: string;
    last_name: string;
    description: string;
    image: string;
  };
}

export async function GET_Courses() {
  try {
    const response = await axios.get<POST_Login_Success>(API_PATH + "courses");
    return response.data.courses;
  } catch (error: any) {}
}
