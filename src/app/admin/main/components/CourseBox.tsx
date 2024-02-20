"use client";
import dots from "@/public/assets/icons/dots.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AllCourses } from "@/type";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "@/components/Modal";
interface Props {
  data: AllCourses;
  handleDeleteLecture: any;
  isOpen: boolean;
  toggleVisibility: (id: number) => void;
}

const CourseBox: React.FC<Props> = ({ data, handleDeleteLecture, isOpen, toggleVisibility }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { cover_image, title, id } = data;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Save data to localStorage when the component mounts
    localStorage.setItem(`course_${id}`, JSON.stringify(data));

    return () => {
      // Optionally, clear localStorage when the component unmounts
      // localStorage.removeItem(`course_${id}`);
    };
  }, [id, data]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    router.push(`/admin/main/${id}`);
  };
  return (
    <>
      <div className="mt-6 flex flex-col justify-start items-center gap-2 cursor-pointer  border border-[#94BBCF]  w-72 pb-4 bg-dark h-[270px]" onClick={handleClick}>
        <div
          className="w-72 h-36 flex flex-col relative items-start p-4 justify-between bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(https://smarteducation.shop/smarteducation_backend/public/${cover_image})`,
          }}
        >
          {isOpen && (
            <>
              <div
                className="px-2 pt-2 pb-1 gap-1 flex flex-col items-center justify-center  absolute right-[-4%] top-[175%] border border-lightGray rounded-faqBordeR w-28 h-22 bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleVisibility(id);
                }}
              >
                <Link href={`/admin/edit-course/${id}`}>
                  <p className="border-b border-lightGray  self-center text-sm text-grey cursor-pointer hover:text-mainGray">რედაქტირება</p>
                </Link>

                <p className="text-grey text-sm border-b border-lightGray cursor-pointer hover:text-mainGray" onClick={openModal}>
                  წაშლა
                </p>
                <Link href={`/admin/syllabus/${id}`} className="text-grey text-sm cursor-pointer hover:text-mainGray">
                  სილაბუსი
                </Link>
              </div>
            </>
          )}
        </div>
        <h4 className="w-[230px] pl-4 pb-2 self-start text-white mt-3 h-[56px]">{title}</h4>
        <div className="flex justify-end items-center w-full mt-2">
          <div className="mr-2 mt-[-15px]">
            <Image
              src={dots}
              alt="dots"
              className="self-end cursor-pointer w-7 h-7"
              onClick={(e) => {
                e.stopPropagation();
                toggleVisibility(id);
              }}
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="w-96 h-[200px] flex flex-col gap-4 items-center justify-center">
            <h2>ნამდვილად გსურთ წაშალოთ კურსი</h2>
            <p>{data.title}</p>
            <div className="flex gap-4 mt-5">
              <button
                className="bg-dark rounded-mediumBorder py-3 px-8 text-white  transition-all ease-in-out delay-150 hover:opacity-75"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteLecture(data.id);
                }}
              >
                დადასტურება
              </button>

              <button className="bg-transparent border border-dark rounded-mediumBorder py-3 px-10 text-dark  transition-all ease-in-out delay-150 hover:opacity-75" onClick={closeModal}>
                უარყოფა
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CourseBox;
