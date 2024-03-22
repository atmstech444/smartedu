import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios from "axios";

export const AdminLogin = async (params: any) => {
  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}auth/login`, params);
    return data;
  } catch (error) {
    console.error(error);
  }
};
