import axios from "axios";
import { API_PATH } from "./API_PATH";
import { setMyCourses } from "@/redux/slices/myCoursesSlice";

export interface GET_WatchCourse_Params {
  token: string;
  id: number;
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
  deleted_at: null | string;
}

export async function GET_WatchCourse(data: GET_WatchCourse_Params) {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios.get<{ lectures: I_WatchCourse[] }>(API_PATH + `courses/${data.id}/lectures`, config);
    return response.data.lectures;
  } catch (error: any) {}
}
