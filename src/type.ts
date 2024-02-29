export interface AdminLoginRequestParams {
  email: string;
  password: string;
}

export interface CourseData {
  course_category_id: number;
  cover_image: string;
  created_at: string;
  deleted_at: null;
  description: string;
  duration: string;
  id: number;
  intro: string;
  language: string;
  lecture_count: number;
  lecturer_id: number;
  price: string;
  title: string;
  updated_at: string;
}

export interface AllCourses {
  cover_image_desktop: string;
  cover_image_mobile: string;
  id: number;
  lecture_count: number;
  title: string;
}

export interface CourseVidoesProps {
  course_id?: any;
  created_at?: string;
  deleted_at?: null;
  description: string;
  id?: any;
  title: string;
  updated_at?: string;
  video_url: string;
}
