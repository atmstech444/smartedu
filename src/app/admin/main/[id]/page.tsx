import { parseCookies } from "nookies";

import { getAllCourses } from "../services/getCourses";
import MainContent from "../components/MainContent";
import { GET_Courses } from "@/services/AllCourses";

interface pageProps {
  params: { id: number };
}

export async function generateStaticParams() {
  const courses = await GET_Courses();

  return courses.map((course) => ({ id: course.id.toString() }));
}

const page = ({ params }: pageProps) => {
  return <MainContent params={params} />;
};

export default page;
