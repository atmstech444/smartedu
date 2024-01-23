import axios from "axios";

export const deleteLecture = async (token: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(
      `https://smarteducation.shop/smarteducation_backend/public/admin/courses/lecture/destroy/${id}`,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
