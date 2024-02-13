import axios from "axios";

export const getLectureAndDescriptions = async (token: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(`http://192.168.96.66:8000/admin/courses/lecture/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
