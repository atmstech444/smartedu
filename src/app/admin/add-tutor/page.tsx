"use client";
import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { parseCookies } from "nookies";
import Swal from "sweetalert2";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import FileUpload from "./components/fileUpload";
import TutorForm from "./components/tutorForm";
import LecturerItem from "./components/lecturerItem";
import { getLecturers } from "../add-course/services/getLecturers";
import { addTutor } from "./services.ts/addTutor";
import { deleteTutor } from "./services.ts/deleteTutor";
import LoadingSpinner from "@/components/LoadingSpinner";
import { redirect } from "next/navigation";

type Lecturer = {
  id: any;
  first_name: string;
  last_name: string;
  image: string;
};

const AddTutor = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [data, setData] = useState<Lecturer[]>([]);

  const getData = useCallback(() => {
    const fetchData = async () => {
      try {
        const response = await getLecturers(token);
        setData(response.lecturers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);

  useLayoutEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, [token]);

  const handleCreateTutor = async () => {
    const fullNameInput = document.getElementById("name") as HTMLInputElement;

    const fullName = fullNameInput.value.trim();
    const match = fullName.match(/(.+)/);

    if (match && match.length >= 1) {
      const fullNameParts = match[0].trim().split(/\s+/);
      const first_name = fullNameParts[0];
      const last_name = fullNameParts.slice(1).join(" ");

      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      // formData.append("description", description.value);

      if (selectedImage instanceof File) {
        formData.append("image", selectedImage);
      }

      try {
        const response = await addTutor(token, formData);
        if (response.success) {
          setData((prevData) => [...prevData, response.createdTutor]);
          getData();
          Swal.fire({
            icon: "success",
            title: response.message,
            showConfirmButton: true,
            timer: 1500,
          });
        } else {
          console.error("Failed to create tutor");
          Swal.fire({
            icon: "warning",
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("An unexpected error occurred", error);
      }
    } else {
      console.error("Invalid full name format");
    }
  };

  const handleDeleteTutor = async (deletedTutor: any) => {
    try {
      const response = await deleteTutor(token, deletedTutor.id);
      if (response.message) {
        const updatedData = data.filter((tutor) => tutor.id !== deletedTutor.id);
        setData(updatedData);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete tutor");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Header />

      <div>
        <div className="flex gap-8">
          <Navbar />

          <div className="flex justify-between w-[85%]">
            <div className="flex flex-col gap-3 mt-6">
              <h1 className="text-black text-xl font-normal">დაამატე ტუტორი</h1>

              <FileUpload onFileChange={(file: React.SetStateAction<File | null>) => setSelectedImage(file)} onDeletePhoto={() => setSelectedImage(null)} selectedImage={selectedImage} />

              <TutorForm onHandleCreateTutor={handleCreateTutor} />
            </div>

            <div className="mt-6 mr-44 flex flex-col gap-5">{data ? data?.map((lecture, index) => <LecturerItem key={index} lecture={lecture} onDeleteClick={handleDeleteTutor} />) : <LoadingSpinner />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutor;
