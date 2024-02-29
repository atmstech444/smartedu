import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";
import { redirect } from "next/navigation";

export interface POST_Login_Success {
  courses: I_Course[];
}

export interface I_Course {
  id: number;
  title: string;
  cover_image_mobile: string;
  cover_image_desktop: string;
  price: string;
  lecturer_id: number;
  course_category_id: number;
  lectures_count: number;
  average_rating: number;
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

export async function GET_Courses(dispatch?: any) {
  try {
    const response = await axios.get<POST_Login_Success>(API_PATH + "courses");
    return response.data.courses;
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
