"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const SecondNavbar = ({ courseData }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<{ key: number; element: JSX.Element }[]>([]);

  const handleImageClick = () => {
    const newInputKey = inputs.length + 1;

    const handleDeleteInput = () => {
      setInputs((prevInputs) => prevInputs.filter((input) => input.key !== newInputKey));
    };

    const newInput = (
      <div className="relative" key={newInputKey}>
        <input id={`text-${newInputKey}`} ref={fileInputRef} type="text" placeholder="ლექცია" className="border border-1-black rounded-lg px-3 py-1 outline-none" onChange={() => {}} />
        <Image src={"/assets/img/admin/closeIcon.png"} width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute right-3 top-3" onClick={handleDeleteInput} />
      </div>
    );

    setInputs((prevInputs) => [...prevInputs, { key: newInputKey, element: newInput }]);
  };
  return (
    <div className="w-64 mt-11 px-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className="pt-5 flex flex-col gap-4">
        <img src={`https://smarteducation.shop/smarteducation_backend/public/${courseData?.cover_image}`} className="rounded-2xl" />
        <p className="text-base text-black font-semibold">{courseData?.title}</p>
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>
        {inputs.map((input) => input.element)}
        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
        {inputs.length !== 0 && (
          <div>
            <button className="bg-mainBlue  rounded-faqBordeR  text-base mt-2 text-center text-white hover:opacity-75  transition-all ease-in-out  px-4 py-2">შენახვა</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondNavbar;
