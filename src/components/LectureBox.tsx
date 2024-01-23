"use client";
import { useRef } from "react";
import dots from "../public/assets/icons/dots.svg";
import Image from "next/image";
import { useState } from "react";
import { CourseVidoesProps } from "@/type";
import Modal from "./Modal";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface VideoProps {
  data: CourseVidoesProps;
  handleDeleteLecture: (id: string) => void;
  handleUpdateLecture: (values: any, id: string) => void;
  isOpen: boolean;
  toggleVisibility: (id: number) => void;
}
const LectureBox: React.FC<VideoProps> = ({
  data,
  handleDeleteLecture,
  handleUpdateLecture,
  isOpen,
  toggleVisibility,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const videoRef = useRef(null);
  const { video_url, title, description } = data;

  const lectureID = String(data.id);

  const editLectureSchema = yup.object({
    title: yup.string().required("გთხოვთ მიუთითოთ ლექციის სახელი"),
    description: yup.string(),
    lecture_number: yup.string().required("გთხოვთ მიუთითოთ ლექციის ნომერი"),
  });
  const methods = useForm({
    resolver: yupResolver(editLectureSchema),
    defaultValues: {
      title: data.title,
      description: data.description,
      lecture_number: lectureID,
    },
    mode: "all",
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (values: any) => {
    handleUpdateLecture(values, lectureID);
    closeEditModal();
  };

  const handleDeleteLectureID = (id: any) => {
    handleDeleteLecture(id);
    closeModal();
  };
  return (
    <>
      <div className="mt-6 flex flex-col gap-2 cursor-pointer border border-[#94BBCF]  w-72 pb-4 bg-dark h-[270px]">
        <div className="relative w-72 h-36  overflow-hidden">
          <video
            controls
            ref={videoRef}
            className="w-full h-full bg-fit bg-no-repeat bg-center"
          >
            <source
              src={`https://smarteducation.shop/smarteducation_backend/public/${video_url}`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="pl-4 w-72 break-all text-base flex justify-between items-center relative mt-4">
          <div className="flex flex-col gap2 text-white">
            <p>{title}</p>
            <p>{description}</p>
          </div>

          <div>
            <Image
              src={dots}
              alt="dots"
              className="absolute top-1 right-3 cursor-pointer w-7 h-7"
              onClick={() => toggleVisibility(data.id)}
              style={{ filter: "invert(1)" }}
            />
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } px-2 pt-2 pb-1 gap-1 flex flex-col items-center justify-center absolute right-0 top-8 border border-lightGray w-[120px] h-22 bg-white`}
              onClick={() => toggleVisibility(data.id)}
            >
              <p
                className="border-b border-lightGray self-center text-sm text-grey cursor-pointer hover:text-mainGray"
                onClick={openEditModal}
              >
                რედაქტირება
              </p>
              <p
                className="text-grey text-sm cursor-pointer hover:text-mainGray"
                onClick={openModal}
              >
                წაშლა
              </p>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="w-96 h-[200px] flex flex-col gap-4 items-center justify-center">
            <h2>ნამდვილად გსურთ წაშალოთ ლექცია</h2>
            <p>{data.title}</p>
            <div className="flex gap-4 mt-5">
              <button
                className="bg-dark rounded-mediumBorder py-3 px-8 text-white  transition-all ease-in-out delay-150 hover:opacity-75"
                onClick={() => handleDeleteLectureID(lectureID)}
              >
                დადასტურება
              </button>
              <button
                className="bg-transparent border border-dark rounded-mediumBorder py-3 px-10 text-dark  transition-all ease-in-out delay-150 hover:opacity-75"
                onClick={closeModal}
              >
                უარყოფა
              </button>
            </div>
          </div>
        </Modal>
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
          <div className="w-96 h-[500px] flex flex-col  pt-4 items-center">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
                <Input
                  label="ლექციის სახელი"
                  placeholder="ლექციის სახელი"
                  name="title"
                  error={errors.title?.message}
                  id="title"
                />
                <Textarea
                  placeholder="აღწერა"
                  id="description"
                  name="description"
                  label="აღწერა"
                  rows={3}
                  cols={4}
                />
                <Input
                  type="string"
                  placeholder="ლექციის ნომერი"
                  id="lecture_number"
                  label="ლექციის ნომერი"
                  name="lecture_number"
                  error={errors.lecture_number?.message}
                />
                <button className="bg-dark rounded-mediumBorder mt-8 py-3 px-8 text-white  transition-all ease-in-out delay-150 hover:opacity-75">
                  დამატება
                </button>
              </form>
            </FormProvider>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default LectureBox;
