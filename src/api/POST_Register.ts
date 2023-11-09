import { userType } from "@/interFace/interFace";
import axios, { AxiosRequestConfig } from "axios";
export const API_PATH = "http://192.168.96.63/smarteducation/public/api/";
const token = "";
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export interface POST_Register_Success {
  message: string;
  user: userType;
}

export interface POST_Register_Params {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function POST_Register(data: POST_Register_Params) {
  let responseData: any;
  await axios.post<POST_Register_Success>(API_PATH + "auth/register", data).then((response) => {
    responseData = response.data;
  });
  return responseData;
}
