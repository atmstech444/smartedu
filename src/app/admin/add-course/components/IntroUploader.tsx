import PlusIcon from "@/public/assets/dynamic_icons/PlusIcon";
import React, { useRef, useState } from "react";

interface IntroVideoUploadProps {
  selectedIntro: File | null;
  onUpload: (selectedFile: File) => void;
  onDelete: () => void;
}

const IntroUploader: React.FC<IntroVideoUploadProps> = ({
  selectedIntro,
  onUpload,
  onDelete,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleAddFileClick = () => {
    setIsInputVisible(true);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputVisible(false);
    const selectedFile = e.target?.files?.[0];
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div>
      {selectedIntro && selectedIntro ? (
        <div className="flex flex-col w-[288px] gap-2 mt-2 justify-center items-center pb-4">
          <button
            onClick={onDelete}
            className="bg-[#D9EBF4] text-black rounded-faqBordeR p-1"
          >
            Delete Intro
          </button>
          <video controls>
            <source src={URL.createObjectURL(selectedIntro)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div
          className="rounded-mediumBorder h-[134px] border border-[#C1C1C1] justify-center px-20 py-8 my-4 cursor-pointer flex flex-col gap-2 items-center"
          onClick={handleAddFileClick}
        >
          <PlusIcon />
          <h1>დაამატე ინტრო</h1>
          <input
            type="file"
            className={"hidden"}
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default IntroUploader;
