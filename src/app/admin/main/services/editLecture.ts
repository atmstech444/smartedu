import axios from "axios";

export const editLecture = async (token: any, updatedData: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.put(
      `https://smarteducation.shop/smarteducation_backend/public/admin/courses/lecture/update/${id}`,
      updatedData,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
