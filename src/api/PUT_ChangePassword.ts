import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";
import { redirect } from "next/navigation";

export interface PUT_ChangePasword_Params {
  current_password: string;
  new_password: string;
  confirm_password: string;
  token: string;
}

export default async function PUT_ChangePassword(data: PUT_ChangePasword_Params, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.put(
      API_PATH + "user-profile/update-password",
      {
        current_password: data.current_password,
        new_password: data.new_password,
        confirm_passwrd: data.confirm_password,
      },
      config
    );
    toast.success("პაროლი წარმატებით შეიცვალა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      dispatch(removeUser);
      redirect("/");
    }
    toast.error("შეცდომა პაროლის ცვლილებისას", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    throw error;
  }
}
