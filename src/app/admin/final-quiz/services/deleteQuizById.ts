import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const deleteQuizById = async (token: any, id: any, courseId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`${API_ADMIN_PATH}course-final-quizzes/${id}/${courseId}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
