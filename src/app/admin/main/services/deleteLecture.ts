import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const deleteLecture = async (token: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`${API_ADMIN_PATH}courses/lecture/destroy/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
