"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const Reading = () => {
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<{ key: number; element: JSX.Element }[]>([]);

  const handleImageClick = () => {
    const newInputKey = inputs.length + 1;

    const handleDeleteInput = () => {
      setInputs((prevInputs) => prevInputs.filter((input) => input.key !== newInputKey));
    };

    const newInput = (
      <div className="relative w-[220px] flex items-center gap-1" key={newInputKey}>
        <input id={`text-${newInputKey}`} ref={fileInputRef} type="url" placeholder="ლინკის ატვირთვა" className="border border-1-[#D1D1D1] outline-none w-44 rounded-lg p-2" onChange={() => {}} />
        <Image src="/assets/img/admin/AddFile.png" width={16} height={16} alt={"Add Icon"} />
        <Image src={"/assets/img/admin/closeIcon.png"} width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute top-4 -right-0" onClick={handleDeleteInput} />
      </div>
    );

    setInputs((prevInputs) => [...prevInputs, { key: newInputKey, element: newInput }]);
  };

  const handleTyping = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    if (isTyping) {
      setIsTyping(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-600 font-FiraGO font-medium text-base md:text-lg lg:text-xl xl:text-2xl">წასაკითხი</h1>

        <div className="relative w-[777px]">
          <textarea
            className="w-full h-auto resize-none rounded-lg px-2 pl-7 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
            placeholder="აღწერა"
            onFocus={handleTyping}
            onBlur={handleBlur}
          ></textarea>
          {!isTyping && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
        </div>

        <div className="flex items-center gap-1 ">
          <p className="border border-1-[#D1D1D1] outline-none w-44 rounded-lg p-2 text-gray-500">ლინკის ატვირთვა</p>
          <Image src="/assets/img/admin/AddFile.png" width={16} height={16} alt={"Add Icon"} />
        </div>
        {inputs.map((input) => input.element)}
        <div>
          <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
        </div>
      </div>

      <div className="w-full flex items-end justify-end mt-[650px]">
        <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg">შენახვა</button>
      </div>
    </div>
  );
};

export default Reading;
