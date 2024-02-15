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
      "http://192.168.99.238:8000/admin/lecturer",
      config
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
