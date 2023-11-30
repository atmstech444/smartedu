import { userType } from "@/interFace/interFace";
import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface POST_Register_Success {
  message: string;
  user: userType;
}

export interface PUT_UpdateUser_Params {
  age: string | null;
  gender: string | null;
  phone_number: string | null;
  city: string | null;
  education: string | null;
  faculty: string | null;
  employment_status: null | string;
  employment_industry: null | string;
  employment_position: null | string;
  token: string;
}

export interface POST_Register_Error {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

export async function PUT_UpdateUser(data: PUT_UpdateUser_Params) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.put<POST_Register_Success>(API_PATH + "user/profile/update", data, config);
    toast.success("ინფორმაცია განახლდა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
