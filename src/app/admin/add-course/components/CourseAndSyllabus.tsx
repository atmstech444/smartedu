"use client";
import Plus from "@/public/assets/icons/plus.png";
import React, { useState } from "react";
import Image from "next/image";

const CourseAndSyllabus = ({ onCourseDescriptionChange }: any) => {
  const [showDescription, setShowDescription] = useState(true);
  const [showSyllabus, setShowSyllabus] = useState(false);

  const toggleDescription = () => {
    setShowDescription(true);
    if (!showDescription) setShowSyllabus(false);
  };

  const handleTextareaChange = (event: any) => {
    const text = event.target.value;
    onCourseDescriptionChange(text);
  };

  return (
    <div>
      <div className="flex gap-2 mt-9">
        <p onClick={toggleDescription} className={`cursor-pointer ${showDescription ? "text-black" : "text-[#DCDCDC]"}`}>
          კურსის აღწერა
        </p>
      </div>
      {showDescription && <textarea className="w-[720px] h-[280px] border border-[#DCDCDC] rounded-[32px] mt-8 resize-none outline-none p-4" onChange={handleTextareaChange}></textarea>}

      {showSyllabus && (
        <div className="flex gap-1 items-center justify-center border border-[#c2c2c2] px-5 py-2 rounded-buttonBorder w-40 mt-7 cursor-pointer">
          <button className="text-[#c2c2c2]">დამატება</button>
          <Image src={Plus} alt="Plus Icon" />
        </div>
      )}
    </div>
  );
};

export default CourseAndSyllabus;
