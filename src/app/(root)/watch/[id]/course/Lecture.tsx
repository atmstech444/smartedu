"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Arrow from "../../../../../public/assets/icons/arrowLeft.svg";

const Lecture = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex gap-[24px] flex-col p-[24px] md:w-[60%] lg:w-[80%]  bg-white rounded-md">
      <Image onClick={() => router.push(`/watch/${params.id}`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />

      <h1>lecture</h1>
    </div>
  );
};

export default Lecture;
