import { parseCookies } from "nookies";

import { getAllCourses } from "../services/getCourses";
import MainContent from "../components/MainContent";
import { GET_Courses } from "@/services/AllCourses";

interface pageProps {
  params: { id: number };
}

const page = ({ params }: pageProps) => {
  return <MainContent params={params} />;
};

export default page;
