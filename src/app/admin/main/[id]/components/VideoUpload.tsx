"use client";
import React, { useState } from "react";
import Image from "next/image";

const VideoUpload = () => {
  const [isTypingInput, setIsTypingInput] = useState(false);
  const [isTypingTextarea, setIsTypingTextarea] = useState(false);

  const handleTypingInput = () => {
    setIsTypingInput(true);
  };

  const handleTypingTextarea = () => {
    setIsTypingTextarea(true);
  };

  const handleBlurInput = () => {
    if (isTypingInput) {
      setIsTypingInput(false);
    }
  };

  const handleBlurTextarea = () => {
    if (isTypingTextarea) {
      setIsTypingTextarea(false);
    }
  };

  const handleFileInputChange = (event: any) => {
    console.log(event.target.files);
  };

  return (
    <div className="grid grid-cols-6   w-full">
      <div className="flex flex-col gap-3  col-span-5">
        <div className="relative  flex flex-col gap-4">
          <div className="w-48 relative">
            <input
              type="text"
              placeholder="ლექციის სათაური"
              className="h-auto resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              onFocus={handleTypingInput}
              onBlur={handleBlurInput}
            />
            {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-[-5px]" alt={""} width={12} height={12} />}
          </div>
          <div className="relative">
            <textarea
              className="w-full max-w-[780px] h-auto resize-none rounded-lg px-2 pl-6 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              placeholder="ლექციის აღწერა"
              onFocus={handleTypingTextarea}
              onBlur={handleBlurTextarea}
            ></textarea>
            {!isTypingTextarea && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
          </div>

          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-36">შენახვა</button>
        </div>

        <div className="flex flex-col gap-3 cursor-pointer">
          <h1>ვიდეო</h1>

          <label className="flex flex-col items-center gap-[6px] pt-3 pb-[6px] px-4 bg-[#EEE] rounded-lg w-36 cursor-pointer">
            <Image src="/assets/img/admin/AddVideo.png" alt={""} width={25} height={27} />
            <p className="text-xs text-[#CACACA] font-medium">ვიდეოს ატვირთვა</p>
            <input type="file" className="hidden" onChange={handleFileInputChange} />
          </label>
        </div>
      </div>

      <div className="col-span-1">
        <div className="w-full flex  mt-[650px] col-span-2">
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg">შენახვა</button>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
