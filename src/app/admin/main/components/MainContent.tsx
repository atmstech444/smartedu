"use client";
import LectureBox from "@/components/LectureBox";
import { CourseVidoesProps } from "@/type";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { deleteLecture } from "../services/deleteLecture";
import { editLecture } from "../services/editLecture";
import BlurBox from "@/components/BlurBox";
import LoadingSpinner from "@/components/LoadingSpinner";
import { addLecture } from "../services/addLecture";
import { redirect } from "next/navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import { FC } from "react";
import PlusIcon from "@/public/assets/dynamic_icons/PlusIcon";
import { getCourseById } from "../services/getCoursesById";
import { parseCookies } from "nookies";

interface pageProps {
  params: { id: number };
}
const MainContent: FC<pageProps> = ({ params }) => {
  const [data, setData] = useState<CourseVidoesProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVideoUploading, setIsVideoUploading] = useState<boolean>(false);
  const [openedIndex, setOpenedIndex] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);

  const toggleVisibility = (index: any) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const cookies = parseCookies();
  const token = cookies.authToken;

  useLayoutEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, [token]);

  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const response = await getCourseById(token, params.id);
        setData(response.lectures);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourseById();
  }, [params.id, token]);

  const addVideoSchema = yup.object({
    title: yup.string().required("გთხოვთ მიუთითოთ ლექციის სახელი"),
    description: yup.string(),
    lecture_number: yup
      .string()
      .required("გთხოვთ მიუთითოთ ლექციის ნომერი")
      .matches(/^[0-9]+$/, "ლექციის ნომერი შედგება მხოლოდ ციფრებისგან"),
    video: yup.mixed().test("fileRequired", "აუცილებელი ველი", (value: any) => {
      return value;
    }),
  });

  const methods = useForm({
    resolver: yupResolver(addVideoSchema),
    defaultValues: {
      title: "",
      description: "",
      lecture_number: "",
      video: "",
    },
    mode: "all",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    watch,
  } = methods;

  const selectedVideo: any = watch("video");
  const handleFileChange = (e: any) => {
    setValue("video", e.target.files[0]);
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("video");
    fileInput?.click();
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("lecture_number", data.lecture_number);
    if (data.video) {
      formData.append("video", data.video);
    }

    try {
      reset();
      closeModal();
      setIsVideoUploading(true);

      const response = await addLecture(token, formData, params.id, (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentage = Math.round((loaded * 100) / (total ?? 1));
        setUploadPercentage(percentage);
      });
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "ლექცია წარმატებით დაემატა",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to add lecture");
        Swal.fire({
          icon: "warning",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const updatedResponse = await getCourseById(token, params.id);
      setData(updatedResponse.lectures);
    } catch (error) {
      console.error("An unexpected error occurred", error);
    } finally {
      setIsVideoUploading(false);
      setUploadPercentage(0);
    }
  };

  const handleDeleteLecture = async (lectureid: any) => {
    try {
      const response = await deleteLecture(token, lectureid);
      if (response) {
        Swal.fire({
          icon: "success",
          title: "ლექცია წარმატებით წაიშალა",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete lecture");
        Swal.fire({
          icon: "warning",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const updatedResponse = await getCourseById(token, params.id);
      setData(updatedResponse.lectures);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateLecture = async (values: any, lectureid: any) => {
    try {
      const response = await editLecture(token, values, lectureid);
      if (response) {
        Swal.fire({
          icon: "success",
          title: "წარმატებით განახლდა",
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete lecture");
        Swal.fire({
          icon: "warning",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const updatedResponse = await getCourseById(token, params.id);
      setData(updatedResponse.lectures);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 mb-10">
        <div className="w-[300px]" onClick={openModal}>
          <div className="rounded-borderHalf border border-[#94BBCF] flex flex-col gap-2 justify-center items-center px-16 py-8 mt-8 cursor-pointer">
            <PlusIcon />
            <h3>დაამატე ვიდეო</h3>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FormProvider {...methods}>
            <form className="flex flex-col items-center w-[450px] h-[650px] p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8">
                <input type="file" {...register("video")} multiple className="hidden" name="video" id="video" onChange={handleFileChange} />
                <div className="cursor-pointer border border-dotted border-dark p-4 flex items-center justify-center w-72 h-20" onClick={handleButtonClick}>
                  {!selectedVideo ? (
                    <>
                      <div className="flex flex-col gap-2 items-center">
                        <p className="font-semibold">ატვირთე ვიდეო</p>
                        <p className="text-red text-sm">{errors.video?.message}</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <p>{selectedVideo.name}</p>
                      <button type="button" onClick={() => setValue("video", "")} className="font-semibold cursor-pointer">
                        წაშლა
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <Input label="ლექციის სახელი" placeholder="ლექციის სახელი" name="title" error={errors.title?.message} id="title" type="text" />
              <Textarea placeholder="აღწერა" id="description" name="description" label="აღწერა" rows={3} cols={4} />
              <Input type="text" placeholder="ლექციის ნომერი" id="lecture_number" label="ლექციის ნომერი" name="lecture_number" error={errors.lecture_number?.message} />
              {isVideoUploading && <div className="mt-4 text-lg font-bold">Uploading: {uploadPercentage}%</div>}
              <button className="mt-8 bg-dark text-white text-base px-8 py-4 rounded-faqBordeR">დამატება</button>
            </form>
          </FormProvider>
        </Modal>
        <section className="grid lg:grid-cols-2 lg:gap-14 xl:grid-cols-3 xl:gap-16 2xl:grid-cols-4 2xl:gap-14">
          {isLoading || isVideoUploading ? (
            <>
              <LoadingSpinner />
            </>
          ) : data?.length > 0 ? (
            data.map((itm, index) => (
              <div className="col-span-1" key={index}>
                <LectureBox data={itm} handleDeleteLecture={handleDeleteLecture} handleUpdateLecture={handleUpdateLecture} isOpen={openedIndex === index} toggleVisibility={() => toggleVisibility(index)} />
              </div>
            ))
          ) : (
            <p>ლექცია არ არის დამატებული</p>
          )}
        </section>
      </div>
      {isVideoUploading && (
        <>
          <BlurBox uploadPercentage={uploadPercentage} />
        </>
      )}
    </>
  );
};

export default MainContent;
