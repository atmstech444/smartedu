import { API_PATH } from "@/api/API_PATH";
import axios from "axios";
import { parseCookies } from "nookies";

export interface POST_Login_Success {
  courses: I_Course[];
}

const url = API_PATH;

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

export async function POST_QUIZ(token: any, data: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(url + `midterm-quiz-check-anwer`, data, config);
    return response.data;
  } catch (error) {
    console.error("Error sending quiz answers:", error);
    throw error;
  }
}

export async function POST_FINAL_QUIZ(token: any, data: any) {
  console.log(data);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(url + `final-quiz-check-anwer`, data, config);
    return response.data;
  } catch (error) {
    console.error("Error sending final quiz answers:", error);
    throw error;
  }
}

//PROGRESS BAR
export async function POST_READING(token: any, id: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(url + `user-made-reading`, id, config);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

export async function POST_VIDEO(token: any, id: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(url + `user-made-video`, id, config);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
