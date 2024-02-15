import axios from "axios";

export const AdminLogin = async (params: any) => {
  try {
    const { data } = await axios.post("http://192.168.99.238:8000/admin/auth/login", params);
    console.log(data.token);
    return data;
  } catch (error) {
    console.error(error);
  }
};
