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
      Accept: "application/json"
    },
    onUploadProgress: onUploadProgress, 
  };

  try {
    const { data } = await axios.post(
      `http://192.168.99.238:8000/admin/course-lecture-video/${id}`,
      lecture,
      config
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
