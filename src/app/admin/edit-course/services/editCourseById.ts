import axios from "axios";

export const editCourseById = async (token: any, id: number, formdata: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/formdata",
    },
  };

  try {
    const { data } = await axios.post(`https://smarteducation.shop/smarteducation_backend/public/admin/courses/${id}`, formdata, config);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
