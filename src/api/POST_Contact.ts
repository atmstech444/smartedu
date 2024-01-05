import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";

export interface POST_Contact_Params {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST_Contact(data: POST_Contact_Params, dispatch: any) {
  try {
    const response = await axios.post(API_PATH + "contact-form", data);
    toast.success("შეტყობინება წარმატებით გაიგზავნა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      dispatch(removeUser());
    }
    toast.error("გაგზავნისას დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
}
