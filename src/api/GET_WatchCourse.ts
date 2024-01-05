import axios from "axios";
import { API_PATH } from "./API_PATH";
import { setMyCourses } from "@/redux/slices/myCoursesSlice";
import { toast } from "react-toastify";
import { removeUser } from "@/redux/slices/userSlice";

export interface GET_WatchCourse_Params {
  token: string;
  id: number;
}

interface VideoProgress {
  id: number;
  user_id: number;
  lecture_id: number;
  video_duration: number;
  last_viewed_at: string | null;
  is_completed: number;
  paused_at: string | null;
  created_at: string;
  updated_at: string;
  watched_time: number;
}

export interface I_WatchCourse {
  id: number;
  course_id: number;
  lecture_number: number;
  title: string;
  description: string;
  video_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  video_duration: number;
  video_progress: VideoProgress | null;
}

export async function GET_WatchCourse(data: GET_WatchCourse_Params, dispatch: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.get<{ lectures: I_WatchCourse[] }>(API_PATH + `courses/${data.id}/lectures`, config);
    return response.data.lectures;
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
