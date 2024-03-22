import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const addLecture = async (token: any, formdata: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}courses/lecture/store/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
