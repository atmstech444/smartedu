import React from "react";
import Image from "next/image";

interface VideoUploadModalProps {
  closeModal: () => void;
  handleFileInputChange: any;
  handleVideoupload: any;
  videoFile: any;
  handleDeleteVideo: any;
  title: string;
  setTitle: (title: string) => void;
}

const VideoUploadModal: React.FC<VideoUploadModalProps> = ({ closeModal, handleFileInputChange, handleVideoupload, videoFile, handleDeleteVideo, title, setTitle }) => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 relative w-[500px]">
        <span className="absolute top-0 right-0 m-4 cursor-pointer" onClick={closeModal}>
          დახურვა
        </span>
        <div className="flex flex-col items-start gap-2 mt-10">
          <div className="w-full flex flex-col gap-3">
            <h1>სათაური</h1>
            <input type="text" className="w-full border border-1-[#D1D1D1] outline-none bg-transparent rounded-md" value={title} onChange={handleTitleChange} />
          </div>

          {videoFile && (
            <div className="flex flex-col gap-2 w-full">
              <video controls className="rounded-lg">
                <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={handleDeleteVideo}>
                წაშლა
              </button>
            </div>
          )}

          {!videoFile && (
            <div>
              <div className="flex flex-col gap-3 cursor-pointer w-[145px]">
                <h1>ვიდეო</h1>
                <label className="flex flex-col items-center gap-[6px] pt-3 pb-[6px] px-4 bg-[#EEE] rounded-lg w-36 cursor-pointer">
                  <Image src="/assets/img/admin/AddVideo.png" alt={""} width={25} height={27} />
                  <p className="text-xs text-[#CACACA] font-medium">ვიდეოს ატვირთვა</p>
                  <input type="file" className="hidden" onChange={handleFileInputChange} />
                </label>
              </div>
            </div>
          )}

          <div className="w-full flex mt-10">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={handleVideoupload}>
              შენახვა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadModal;
