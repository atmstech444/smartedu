import axios from "axios";

export const createCourse = async (token: any, newData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.post(
      "https://smarteducation.shop/smarteducation_backend/public/admin/courses",
      newData,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
