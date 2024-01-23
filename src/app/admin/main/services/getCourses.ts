import axios from "axios";

export const getAllCourses = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      "https://smarteducation.shop/smarteducation_backend/public/admin/courses",
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
