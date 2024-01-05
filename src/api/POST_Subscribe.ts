import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";

export interface POST_Subscribe_Params {
  email: string;
}

export async function POST_Subscribe(data: POST_Subscribe_Params, dispatch: any) {
  try {
    const response = await axios.post(API_PATH + "subscribe", data);
    toast.success("თქვენ გამოიწერეთ სიახლეები", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      dispatch(removeUser());
    }
    toast.error("დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
}
