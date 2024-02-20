import axios from "axios";

export const deleteTitleAndDescription = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`https://smarteducation.shop/smarteducation_backend/public/admin/lecture-content/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};