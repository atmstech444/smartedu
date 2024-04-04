import Syllabus from "../components/Syllabus";

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

interface PageProps {
  params: { id: string };
}

const page = ({ params }: PageProps) => {
  
  return <Syllabus params={params} />;
};

export default page;
