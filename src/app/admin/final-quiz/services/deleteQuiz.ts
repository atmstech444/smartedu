import axios from "axios";

export const deleteQuiz = async (token: any, quizId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`https://smarteducation.shop/smarteducation_backend/public/admin/course-final-quizzes/${quizId}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
