import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";

export interface POST_Rate_Params {
  token: string;
  course_id: number;
  rating: number;
}

export async function POST_Rate(data: POST_Rate_Params, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.post(API_PATH + `courses/${data.course_id}/rate/${data.rating}`, null, config);
    toast.success("კურსი შეფასებულია", {
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
