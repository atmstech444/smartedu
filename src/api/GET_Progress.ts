import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";
import { updateProgressInfo } from "@/redux/slices/progressSlice";
import { removeUser } from "@/redux/slices/userSlice";

export interface GET_Progress_Params {
  token: string;
}

export interface Progress_Info {
  total_watched_time: number;
  active_courses_count: number;
  completed_courses_count: number;
}

export async function GET_Progress(data: GET_Progress_Params, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.get<Progress_Info>(API_PATH + "courses/user-progress", config);
    dispatch(updateProgressInfo(response.data));
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      dispatch(removeUser());
    }
    // toast.error("დაფიქსირდა შეცდომა", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 2000,
    // });
  }
}
