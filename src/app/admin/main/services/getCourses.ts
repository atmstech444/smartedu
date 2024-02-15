import axios from "axios";

export const getAllCourses = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      "http://192.168.99.238:8000/admin/courses",
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
