import axios from "axios";

export const getCourseById = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(`http://192.168.99.238:8000/admin/courses/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
