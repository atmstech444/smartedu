import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const AdminLogOut = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}auth/logout`, null, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
