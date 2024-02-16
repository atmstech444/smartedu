import axios from "axios";

export const getAllVideos = async (token: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(`http://192.168.99.238:8000/admin/course-lecture-video/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
