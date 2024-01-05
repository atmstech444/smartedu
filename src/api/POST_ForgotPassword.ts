import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";
import { redirect } from "next/navigation";

export interface POST_ForgotPassword_Params {
  email: string;
}

export async function POST_ForgotPassword(data: POST_ForgotPassword_Params, router: any, dispatch: any) {
  try {
    const response = await axios.post(API_PATH + "forgot-password", data);
    toast.success("ელ.ფოსტა წარმატებით გაიგზავნა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    router.push("/sign-in");
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      dispatch(removeUser());
      redirect("/");
    }
    toast.error("გაგზავნისას დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    throw error;
  }
}
