import { userType } from "@/interFace/interFace";
import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface PUT_WatchTime_Success {
  message: string;
  user: userType;
}

export interface PUT_WatchTime_Params {
  token: string;
  id: number;
  watched_time: number;
}

export interface PUT_WatchTime_Error {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

export async function PUT_WatchTime(data: PUT_WatchTime_Params) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.put<PUT_WatchTime_Success>(API_PATH + `videos/${data.id}/update-progress`, data, config);

    return response.data;
  } catch (error: any) {
    toast.error("დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    throw error;
  }
}
