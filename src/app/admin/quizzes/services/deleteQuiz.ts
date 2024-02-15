import axios from "axios";

export const deleteQuiz = async (token: any, quizId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`http://192.168.99.238:8000/admin/course-lecture-quizzes/${quizId}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
