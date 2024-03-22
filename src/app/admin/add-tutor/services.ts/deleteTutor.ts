import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const deleteTutor = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.delete(`${API_ADMIN_PATH}lecturer/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
