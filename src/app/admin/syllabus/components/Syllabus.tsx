"use client";
import Image from "next/image";
import AddButton from "@/public/assets/icons/AddButton.svg";
import { FormEvent, useEffect, useState } from "react";
import SyllabusForm from "../components/SyllabusForm";
import { getSyllabus, postSyllabus } from "@/services/syllabus";
import { syllabusData } from "../[id]/types";
import Lecture from "../components/Lecture";
import Swal from "sweetalert2";
import { Syllabus } from "../[id]/page";

interface PageProps {
  params: { id: string };
}

const SyllabusContent = ({ params }: PageProps) => {
  const [syllabus, setSyllabus] = useState<Syllabus[] | []>([]);
  const [formCount, setFormCount] = useState<[] | syllabusData[]>([]);

  const { id } = params;

  useEffect(() => {
    const fetchSyllabus = async () => {
      const data = await getSyllabus(id as string);
      setSyllabus(data.syllabus);
    };

    fetchSyllabus();
  }, [id]);

  const addForm = () => {
    setFormCount((prevState) => [...prevState, { id: prevState.length, title: "", descriptions: { 0: "" } }]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const filteredArray = formCount.filter((obj) => obj.title !== "");
    const emptyObjectTitle = formCount.filter((obj) => obj.title === "");
    if (filteredArray.length === 0) {
      return;
    }
    const response = await postSyllabus(id as string, filteredArray);

    if (emptyObjectTitle.length > 0) {
      setFormCount(emptyObjectTitle);
    } else {
      setFormCount([]);
    }
    if (response && response.syllabus) {
      setSyllabus((prevState) => prevState.concat(response.syllabus));
    } else {
      return Swal.fire({
        icon: "warning",
        title: response.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const removeSyllabus = (id: any) => {
    setSyllabus((prevState) => prevState.filter((syllabus) => syllabus.id !== id));
  };

  return (
    <div className="mt-11">
      <p className="text-xl pt-6">დაამატე სილაბუსი</p>
      {syllabus?.map((lecture) => (
        <Lecture key={lecture.id} id={lecture.id} lecture={lecture} removeSyllabus={removeSyllabus} />
      ))}

      <form onSubmit={handleSubmit}>
        {formCount.map((_count, index) => (
          <SyllabusForm key={index} id={index} setFormCount={setFormCount} formCount={formCount} />
        ))}
        <Image onClick={addForm} src={AddButton} alt="add button" className="hover:cursor-pointer mt-5 mb-7" />
        {formCount.length > 0 && (
          <button type="submit" className="bg-[#000] text-white py-3 px-9 rounded-mediumBorder mt-8">
            შენახვა
          </button>
        )}
      </form>
    </div>
  );
};

export default SyllabusContent;
