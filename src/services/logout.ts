import axios from "axios";

export const AdminLogOut = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.post(
      "https://smarteducation.shop/smarteducation_backend/public/admin/auth/logout",
      null,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
