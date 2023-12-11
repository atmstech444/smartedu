import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface PUT_ChangePasword_Params {
  current_password: string;
  new_password: string;
  confirm_password: string;
  token: string;
}

export default async function PUT_ChangePassword(data: PUT_ChangePasword_Params) {
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
    console.log(error);
    toast.error("შეცდომა პაროლის ცვლილებისას", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    throw error;
  }
}
