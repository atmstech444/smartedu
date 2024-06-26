import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const addReading = async (token: any, formdata: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/pdf",
    },
  };
  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}course-lecture-reading/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
