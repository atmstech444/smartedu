import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const editVideoTitle = async (token: any, formdata: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.put(`${API_ADMIN_PATH}course-lecture-video/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
