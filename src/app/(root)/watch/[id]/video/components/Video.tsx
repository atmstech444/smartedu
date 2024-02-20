"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/redux/store";

interface Props {
  id: any;
}
const Video = ({ id }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const params: any = useParams();
  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);
  const video = lectureDetail?.videos.find((item) => item.id == params.videoId);
  return (
    <>
      <main className="relative w-full bg-white">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] md:w-[80%] lg:w-[90%]   rounded-md">
          <Image src={Arrow} width="15" height="15" alt="back" className="md:hidden" onClick={toggleMenuVisibility} />
          <h1 className=" text-xl m-0">{video?.title}</h1>
          {video && (
            <video controls className="rounded-lg">
              <source src={`https://smarteducation.shop/smarteducation_backend/public/${video?.video}`} type="video/mp4" />
            </video>
          )}
        </div>
      </main>
    </>
  );
};

export default Video;
