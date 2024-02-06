import axios from "axios";

export const deleteLecture = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.delete(`http://192.168.96.66:8000/admin/courses/lecture/destroy/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};