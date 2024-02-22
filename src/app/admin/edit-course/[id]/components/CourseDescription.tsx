"use client";
import { API_STORAGE } from "@/api/API_PATH";
import React, { useState } from "react";

const CourseDescription = ({ data, onFileChange }: any) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDelete = () => {
    setUploadedFile(null);
  };
  return (
    <div className="mt-6 w-[50%]">
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descriptionInput" className="text-dark text-xl font-normal">
            დაამატე კურსი:
          </label>
          <input id="courseTitle" type="text" defaultValue={data.title} className="border border-[#DCDCDC] rounded-[30px] px-5 py-1 mt-1 text-start outline-none w-full" />
        </div>

        <div className="flex flex-col gap-2 mt-9">
          <label htmlFor="descriptionInput" className="text-dark text-xl font-normal">
            კურსის აღწერა:
          </label>
          <textarea id="descriptionInput" className="h-[280px] border border-[#DCDCDC] rounded-[32px] resize-none outline-none p-4 w-full" defaultValue={data.description}></textarea>
        </div>

        <div className="pt-9">
          <p className="text-dark text-xl font-normal">დაამატე კურსის ფოტო</p>
          <div className="flex flex-col mt-2 w-[300px] justify-center items-center">
            {uploadedFile ? (
              <div className="flex flex-col gap-10">
                <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" className="mt-10" />
                <button className="cursor-pointer text-red-500 bg-[#006CFA] p-2 rounded-md text-white" onClick={handleDelete}>
                  წაშლა
                </button>
              </div>
            ) : (
              <div>
                <img src={`${API_STORAGE}${data.cover_image}`} alt="Uploaded" className="mt-10" />
                <input
                  type="file"
                  className="w-full mt-5"
                  onChange={(e) => {
                    const selectedFile = e.target?.files?.[0];
                    if (selectedFile) {
                      setUploadedFile(selectedFile);
                      onFileChange(selectedFile);
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
