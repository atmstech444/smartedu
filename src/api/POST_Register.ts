import { userType } from "@/interFace/interFace";
import axios from "axios";
import { API_PATH } from "./API_PATH";

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
