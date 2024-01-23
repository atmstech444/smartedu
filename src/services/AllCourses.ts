import axios from "axios";

export interface POST_Login_Success {
  courses: I_Course[];
}

const url = "https://smarteducation.shop/smarteducation_backend/public/api/";

export interface I_Course {
  id: number;
  title: string;
  cover_image: string;
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

export async function GET_Courses() {
  const response = await axios.get<POST_Login_Success>(url + "courses");
  return response.data.courses;
}
