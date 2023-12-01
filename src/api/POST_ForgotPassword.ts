import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface POST_ForgotPassword_Params {
  email: string;
}

export async function POST_ForgotPassword(data: POST_ForgotPassword_Params) {
  try {
    const response = await axios.post(API_PATH + "email/resend", data);
    toast.success("ელ.ფოსტა წარმატებით გაიგზავნა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    toast.error("გაგზავნისას დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    throw error;
  }
}
