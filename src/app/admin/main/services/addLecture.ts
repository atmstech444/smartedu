import { API_ADMIN_PATH } from "@/api/API_PATH";
import axios, { AxiosRequestConfig } from "axios";

export const addLecture = async (token: any, lecture: any, id: any, onUploadProgress?: (progressEvent: any) => void) => {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
    onUploadProgress: onUploadProgress,
  };

  try {
    const { data } = await axios.post(`${API_ADMIN_PATH}course-lecture-video/${id}`, lecture, config);
    return data;
  } catch (error) {
    console.error(error);
  }
};
