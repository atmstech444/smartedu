"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { addCertificat } from "../services/addCertificate";
import { useRouter } from "next/navigation";

const AddCertificate = ({ courseId }: any) => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [, setData] = useState<any>(null);

  const handleFileUpload = (file: File | undefined) => {
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleDelete = () => {
    setUploadedImage(null);
  };

  const addCertificate = async () => {
    const formData = new FormData();
    if (uploadedImage instanceof File) {
      formData.append("certificate_image", uploadedImage);
    }
    formData.append("course_id", courseId);
    try {
      const response = await addCertificat(token, formData);
      setData(response[0]);
      if (response.message === "Certificate added successfully") {
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
        router.push("/admin/main");
      } else {
        console.error("Failed to add certificate");
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
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-start relative cursor-pointer" onClick={() => router.back()}>
            <img src={"/assets/img/admin/go-back-arrow.svg"} alt="go-back" className="w-7 h-7  absolute" />
            <button className="text-black  py-1 px-7 rounded-lg w-[120px]">უკან</button>
          </div>
          <h1>ატვირთე სერთიფიკატი</h1>
        </div>

        {uploadedImage ? (
          <div className="flex flex-col gap-7">
            <Image src={URL.createObjectURL(uploadedImage)} alt="certificate" width={200} height={200} />
            <button onClick={handleDelete} className="bg-red p-3 rounded-md text-white w-[200px]">
              წაშლა
            </button>
            <button onClick={addCertificate} className="bg-blue p-3 rounded-md text-white w-[200px]">
              ატვირთვა
            </button>
          </div>
        ) : (
          <input type="file" onChange={(e) => handleFileUpload(e.target.files?.[0])} />
        )}
      </div>
    </>
  );
};

export default AddCertificate;
