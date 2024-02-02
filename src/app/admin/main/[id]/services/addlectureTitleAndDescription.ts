import axios from "axios";

export const addlectureTitleAndDescription = async (token: any, formdata: any, id: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.put(`http://192.168.96.66:8000/admin/courses/lecture/update/${id}`, formdata, config);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
