import axios from "axios";

export const addQuiz = async (token: any, formdata: any, id: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const { data } = await axios.post(
        `https://smarteducation.shop/smarteducation_backend/public/admin/course-lecture-quizzes/${id}`,
        formdata,
        config
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };