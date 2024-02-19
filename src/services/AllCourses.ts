import axios from "axios";
import { parseCookies } from "nookies";

export interface POST_Login_Success {
  courses: I_Course[];
}


const url = "https://smarteducation.shop/smarteducation_backend/public/api/";

// const url = "http://192.168.99.238:8000/admin/api/";


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

export async function Get_Course_Detail(id: any) {
  const response = await axios.get(url + `courses/detail/${id}`);
  return response.data;
}

export async function Get_Lecture(id: any, token: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(url + `courses/${id}/lectures`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching lecture:", error);
    throw error;
  }
}

export async function Get_Lecture_Detail(id: any, token: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(url + `lecture/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching lecture detail:", error);
    throw error;
  }
}
