import axios from "axios";

export const editCourseById = async (token: any, id: number, formdata: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.put(`http://192.168.99.238:8000/admin/courses/${id}`, formdata, config);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
