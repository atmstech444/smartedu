import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const getReadings = async (token: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(`${API_ADMIN_PATH}course-lecture-reading/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
