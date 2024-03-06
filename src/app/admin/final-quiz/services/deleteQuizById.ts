import axios from "axios";

export const deleteQuizById = async (token: any, id: any, courseId: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`http://192.168.1.101:8000/admin/course-final-quizzes/${id}/${courseId}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
