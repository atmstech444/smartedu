import axios from "axios";

export const getCategories = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get("https://smarteducation.shop/smarteducation_backend/public/admin/category", config);

    return data;
  } catch (error) {
    console.error(error);
  }
};
