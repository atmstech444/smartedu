import Editcourse from "./components/EditCourse";

interface pageProps {
  params: { id: number };
}

const page = ({ params }: pageProps) => {
  return <Editcourse params={params} />;
};

export default page;
