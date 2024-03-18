import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const editCourseById = async (token: any, id: number, formdata: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/formdata",
    },
  };

  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}courses/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
