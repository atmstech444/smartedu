import axios from "axios";

export const getLecturers = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      "https://smarteducation.shop/smarteducation_backend/public/admin/lecturer",
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
