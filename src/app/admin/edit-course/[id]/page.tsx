import { getAllCourses } from "../../main/services/getCourses";
import Editcourse from "./components/EditCourse";
import { GET_Courses } from "@/services/AllCourses";

interface pageProps {
  params: { id: number };
}
export async function generateStaticParams() {
  const courses = await GET_Courses();

  return courses.map((course) => {
    return { id: course.id.toString() };
  });
}

const page = ({ params }: pageProps) => {
  return <Editcourse params={params} />;
};

export default page;
