import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const deleteTitleAndDescription = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`${API_ADMIN_PATH}lecture-content/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
