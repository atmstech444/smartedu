import PlusIcon from "@/public/assets/dynamic_icons/PlusIcon";
import React, { ReactElement, useRef } from "react";

interface FileUploadProps {
  onFileChange: (file: File) => void;
  onDeletePhoto: () => void;
  selectedImage: File | null;
}

const FileUpload = ({ onFileChange, onDeletePhoto, selectedImage }: FileUploadProps): ReactElement => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddFileClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {selectedImage && selectedImage ? (
        <div className="flex flex-col mt-2 w-[30%] justify-center items-center">
          <button onClick={onDeletePhoto} className="bg-[#D9EBF4] text-black rounded-faqBordeR p-2">
            Delete Image
          </button>
          <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="mt-10" />
        </div>
      ) : (
        <div className="rounded-mediumBorder h-[251px] w-[340px] border border-[#C1C1C1] justify-center px-20 py-8 my-4 cursor-pointer flex flex-col gap-2 items-center" onClick={handleAddFileClick}>
          <PlusIcon />
          <h1>ატვირთე ფოტო</h1>
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
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

export default FileUpload;
