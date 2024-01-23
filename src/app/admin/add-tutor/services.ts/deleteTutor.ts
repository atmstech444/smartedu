import axios from "axios";

export const deleteTutor = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.delete(
      `https://smarteducation.shop/smarteducation_backend/public/admin/lecturer/${id}`,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};