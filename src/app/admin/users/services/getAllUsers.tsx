import axios from "axios";

export const getAllUsers = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      "https://smarteducation.shop/smarteducation_backend/public/admin/user/all",
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
