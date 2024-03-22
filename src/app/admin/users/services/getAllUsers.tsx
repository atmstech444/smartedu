import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const getAllUsers = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(`${API_ADMIN_PATH}user/all`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
