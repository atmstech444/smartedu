import axios from "axios";

export const addLecture = async (token: any, formdata: any, id: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `http://192.168.99.238:8000/admin/courses/lecture/store/${id}`,
        formdata,
        config
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  