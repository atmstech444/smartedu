import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const addQuiz = async (token: any, formdata: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}course-lecture-quizzes/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
