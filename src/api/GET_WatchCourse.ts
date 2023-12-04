import axios from "axios";
import { API_PATH } from "./API_PATH";
import { setMyCourses } from "@/redux/slices/myCoursesSlice";
import { toast } from "react-toastify";

export interface GET_WatchCourse_Params {
  token: string;
  id: number;
}
interface Duration {
  headers: Record<string, unknown>;
  original: {
    message: string;
    videoDuration: number;
  };
  exception: unknown | null;
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
  duration: Duration;
  video_progress: VideoProgress;
}

export async function GET_WatchCourse(data: GET_WatchCourse_Params) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.get<{ lectures: I_WatchCourse[] }>(API_PATH + `courses/${data.id}/lectures`, config);
    console.log(response.data.lectures);

    return response.data.lectures;
  } catch (error: any) {
    toast.error("დაფიქსირდა შეცდომა", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
}
