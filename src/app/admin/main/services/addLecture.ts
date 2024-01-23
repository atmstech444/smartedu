import axios, { AxiosRequestConfig } from "axios";

export const addLecture = async (
  token: any,
  lecture: any,
  id: any,
  onUploadProgress?: (progressEvent: any) => void
) => {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: onUploadProgress, 
  };

  try {
    const { data } = await axios.post(
      `https://smarteducation.shop/smarteducation_backend/public/admin/courses/lecture/store/${id}`,
      lecture,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
