import axios from "axios";

export const getLectureAndDescriptions = async (token: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(`https://smarteducation.shop/smarteducation_backend/public/admin/courses/lecture/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
