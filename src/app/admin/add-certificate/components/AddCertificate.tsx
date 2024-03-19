"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { addCertificat } from "../services/addCertificate";
import { API_ADMIN_STORAGE } from "@/api/API_PATH";
import { deleteCertificat } from "../services/deleteCertificate";

const AddCertificate = ({ courseId, courseData }: any) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [certificateImageUrl, setCertificateImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (courseData && courseData.certificate_image) {
      setCertificateImageUrl(courseData.certificate_image);
    }
  }, [courseData]);

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
      console.log(response);
      const certificateImageUrl = response[0].certificate_image;
      const decodedCertificateImageUrl = decodeURIComponent(certificateImageUrl);
      console.log(decodedCertificateImageUrl);
      if (response.message === "Certificate added successfully") {
        setCertificateImageUrl(decodedCertificateImageUrl);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
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
  const deleteCertificate = async () => {
    try {
      const response = await deleteCertificat(token, courseData?.certificate?.id);
      console.log(response);
      if (response.message === "Certificate deleted successfully") {
        Swal.fire({
          icon: "success",
          title: "სერთიფიკატი წაიშალა",
          showConfirmButton: true,
          timer: 1500,
        });
        setCertificateImageUrl(null);
        courseData.certificate.certificate_image = null;
      } else {
        console.error("Failed to delete certificate");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {courseData?.certificate?.certificate_image ? (
        <div className="flex flex-col gap-12">
          <h1 className="text-lg">სერთიფიკატი ატვირთულია</h1>
          <Image src={API_ADMIN_STORAGE + courseData.certificate.certificate_image} width={300} height={300} alt="Certificate" className="rounded-md" />
          <button className="bg-red text-white py-1 w-[200px] px-2 rounded-full cursor-pointer" onClick={deleteCertificate}>
            წაშლა
          </button>
        </div>
      ) : (
        <div>
          {certificateImageUrl ? (
            <div className="flex flex-col gap-12">
              <Image src={API_ADMIN_STORAGE + certificateImageUrl} width={300} height={300} alt="Certificate" className="rounded-md" />
              <button className="bg-red text-white py-1 w-[200px] px-2 rounded-full cursor-pointer" onClick={handleDelete}>
                წაშლა
              </button>
            </div>
          ) : uploadedImage ? (
            <div className="flex flex-col gap-12">
              <Image src={URL.createObjectURL(uploadedImage)} width={300} height={300} alt="Certificate" className="rounded-md" />
              <button className="bg-red text-white w-[200px] px-2 py-1 rounded-full" onClick={handleDelete}>
                წაშლა
              </button>
              <button className="bg-[#2FA8FF] text-white py-1 w-[200px] px-2 rounded-full cursor-pointer" onClick={addCertificate}>
                შენახვა
              </button>
            </div>
          ) : (
            <label className="bg-[#2FA8FF] text-white py-[13px] px-2 rounded-lg cursor-pointer">
              ატვირთე სერთიფიკატი
              <input type="file" className="hidden" onChange={(e) => handleFileUpload(e.target.files?.[0])} />
            </label>
          )}
        </div>
      )}
    </>
  );
};

export default AddCertificate;
