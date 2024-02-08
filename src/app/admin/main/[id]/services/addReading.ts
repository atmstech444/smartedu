import axios from "axios";

export const addReading = async (token: any, formdata: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(`https://smarteducation.shop/smarteducation_backend/public/admin/course-lecture-reading/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
