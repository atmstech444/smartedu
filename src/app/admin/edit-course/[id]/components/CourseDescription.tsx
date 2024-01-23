import React from "react";

const CourseDescription = ({ data, onFileChange }: any) => {
  return (
    <div className="mt-6">
      <div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="descriptionInput"
            className="text-dark text-xl font-normal"
          >
            დაამატე კურსი:
          </label>
          <input
            id="courseTitle"
            type="text"
            defaultValue={data.title}
            className="border border-[#DCDCDC] rounded-[30px] px-5 py-1 mt-1 text-start outline-none w-full"
          />
        </div>

        <div className="flex flex-col gap-2 mt-9">
          <label
            htmlFor="descriptionInput"
            className="text-dark text-xl font-normal"
          >
            კურსის აღწერა:
          </label>
          <textarea
            id="descriptionInput"
            className="h-[280px] border border-[#DCDCDC] rounded-[32px] resize-none outline-none p-4 w-full"
            defaultValue={data.description}
          ></textarea>
        </div>

        <div className="pt-9">
          <p className="text-dark text-xl font-normal">დაამატე კურსის ფოტო</p>
          <div className="flex flex-col mt-2 w-[30%] justify-center items-center">
            <img
              src={`https://smarteducation.shop/smarteducation_backend/public/${data.cover_image}`}
              alt="Uploaded"
              className="mt-10"
            />
            <input
              type="file"
              className="w-[215px] mt-5"
              onChange={(e) => {
                const selectedFile = e.target?.files?.[0];
                if (selectedFile) {
                  onFileChange(selectedFile);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;