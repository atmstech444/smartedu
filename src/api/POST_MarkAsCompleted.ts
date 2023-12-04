import { userType } from "@/interFace/interFace";
import axios from "axios";
import { API_PATH } from "./API_PATH";
import { toast } from "react-toastify";

export interface POST_MarkAsCompleted_Success {
  message: string;
  user: userType;
}

export interface POST_MarkAsCompleted_Params {
  token: string;
  id: number;
}

export interface POST_MarkAsCompleted_Error {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

export async function POST_MarkAsCompleted(data: POST_MarkAsCompleted_Params) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.post<POST_MarkAsCompleted_Success>(API_PATH + `videos/${data.id}/mark-as-completed`, data, config);

    return response.data;
  } catch (error: any) {
    toast.error("დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    throw error;
  }
}
