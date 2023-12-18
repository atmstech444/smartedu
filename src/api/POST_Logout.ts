import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";

export interface POST_Login_Success {
  token: string;
}

export interface POST_Login_Params {
  token: string;
}

export interface POST_Login_Error {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

export async function POST_Logout(data: POST_Login_Params, router: any, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    dispatch(removeUser());
    router.push("/");
    const response = await axios.post<POST_Login_Success>(API_PATH + "auth/logout", null, config);
    return response.data;
  } catch (error: any) {
    let errors = error.response.data.errors as POST_Login_Error;
  }
}
