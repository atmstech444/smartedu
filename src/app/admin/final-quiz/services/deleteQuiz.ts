import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const deleteQuiz = async (token: any, quizId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`${API_ADMIN_PATH}course-final-quizzes-all/${quizId}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
