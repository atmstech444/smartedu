import axios from "axios";

export const deleteTitleAndDescription = async (token: any, id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.delete(`http://192.168.96.66:8000/admin/lecture-content/${id}`, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};