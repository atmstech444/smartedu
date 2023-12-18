import { userType } from "@/interFace/interFace";
import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

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

export interface POST_Register_Error {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

export async function POST_Register(data: POST_Register_Params, router: any, setErrors: any) {
  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = "ka";
    return config;
  });
  try {
    const response = await axios.post<POST_Register_Success>(API_PATH + "auth/register", data);
    toast.success("გადადი მეილზე და გაიარე ვერიფიკაცია რეგისტრაციის დასასრულებლად", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
    router.push("/sign-in");
    return response.data;
  } catch (error: any) {
    let errors = error.response.data.errors as POST_Register_Error;
    setErrors(errors);
  }
}
