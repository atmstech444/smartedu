import { getAllCourses } from "../../main/services/getCourses";
import Editcourse from "./components/EditCourse";
import { GET_Courses } from "@/services/AllCourses";

interface pageProps {
  params: { id: number };
}

const page = ({ params }: pageProps) => {
  return <Editcourse params={params} />;
};

export default page;
