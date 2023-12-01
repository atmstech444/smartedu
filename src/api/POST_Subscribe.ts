import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface POST_Subscribe_Params {
  email: string;
}

export async function POST_Subscribe(data: POST_Subscribe_Params) {
  try {
    const response = await axios.post(API_PATH + "subscribe", data);
    toast.success("თქვენ გამოიწერეთ სიახლეები", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    return response.data;
  } catch (error: any) {
    toast.error("დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
}
