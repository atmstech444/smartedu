import axios from "axios";

export const editQuiz = async (token: any, id: number, formdata: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.put(`http://192.168.99.238:8000/admin/course-lecture-quizzes/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
