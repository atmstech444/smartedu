import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface POST_Login_Params {
  token: string;
  course_id: number;
}

export async function POST_Purchase(data: POST_Login_Params) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.post(API_PATH + "courses/" + data.course_id + "/purchase", null, config);
    toast.success("კურსი ნაყიდია", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    return response.data;
  } catch (error: any) {}
}
