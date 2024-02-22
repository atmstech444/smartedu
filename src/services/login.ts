import axios from "axios";

export const AdminLogin = async (params: any) => {
  try {
    const { data } = await axios.post("https://smarteducation.shop/smarteducation_backend/public/admin/auth/login", params);
    return data;
  } catch (error) {
    console.error(error);
  }
};
