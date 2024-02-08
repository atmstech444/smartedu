import axios from "axios";

export const deleteVideo = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.delete(`https://smarteducation.shop/smarteducation_backend/public/admin/course-lecture-video/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
