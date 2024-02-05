import axios from "axios";

export const getLecturers = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      "http://192.168.96.66:8000/admin/lecturer",
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
