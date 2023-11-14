import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { setUser } from "@/redux/slices/userSlice";

export interface POST_Login_Success {
  token: string;
}

export interface POST_Login_Params {
  email: string;
  password: string;
}

export interface POST_Login_Error {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
  message?: string;
}

export async function POST_Login(data: POST_Login_Params, setErrors: any, router: any, dispatch: any, setServerError: any) {
  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = "ka";
    return config;
  });
  try {
    const response = await axios.post<POST_Login_Success>(API_PATH + "auth/login", data);
    toast.success("შესვლა წარმატებით განხორციელდა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    dispatch(setUser(response.data));
    router.push("/profile");
    return response.data;
  } catch (error: any) {
    if (error.response.data.message) {
      setServerError(error.response.data.message);
    } else {
      let errors = error.response.data.errors as POST_Login_Error;
      setErrors(errors);
    }
  }
}
