import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const createCourse = async (token: any, newData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}courses`, newData, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
