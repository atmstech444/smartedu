import CourseCover from "@/public/assets/dynamic_icons/CourseCover";
import React, { ReactElement } from "react";

interface FileUploadProps {
  onFileChange: (file: File) => void;
  onDeletePhoto: () => void;
  selectedImage: File | null;
}

const MobileimageUpload = ({ onFileChange, onDeletePhoto, selectedImage }: FileUploadProps): ReactElement => {
  return (
    <div>
      {selectedImage && selectedImage ? (
        <div className="flex flex-col mt-2 w-[30%] justify-center items-center">
          <button onClick={onDeletePhoto} className="bg-[#D9EBF4] text-black rounded-faqBordeR p-1">
            Delete Image
          </button>
          <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="mt-10" />
        </div>
      ) : (
        <div className="flex gap-2 items-center justify-between bg-[#F1F1F1] p-5 w-44 rounded-border mt-6 cursor-pointer">
          <label htmlFor="fileInput" className="flex items-center">
            <CourseCover />
            <p className="text-[#bfbfbf] ml-4">png, jpg, svg</p>
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => {
              const selectedFile = e.target?.files?.[0];
              if (selectedFile) {
                onFileChange(selectedFile);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MobileimageUpload;
