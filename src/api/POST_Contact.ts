import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface POST_Contact_Params {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST_Contact(data: POST_Contact_Params) {
  try {
    console.log(data);

    const response = await axios.post(API_PATH + "contact-form", data);
    toast.success("შეტყობინება წარმატებით გაიგზავნა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
