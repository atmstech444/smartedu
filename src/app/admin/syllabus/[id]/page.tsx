import Syllabus from "../components/Syllabus";
import { getAllCourses } from "../../main/services/getCourses";
import { GET_Courses } from "@/services/AllCourses";

export interface SyllabusDescription {
  course_syllabus_id?: number;
  description: string;
  id: number;
}

export interface Syllabus {
  id: number;
  course_id: number;
  descriptions: SyllabusDescription[] | [];
  title: string;
}

export async function generateStaticParams() {
  const courses = await GET_Courses();

  return courses.map((course) => ({ id: course.id.toString() }));
}

interface PageProps {
  params: { id: string };
}

const page = ({ params }: PageProps) => {
  return <Syllabus params={params} />;
};

export default page;
