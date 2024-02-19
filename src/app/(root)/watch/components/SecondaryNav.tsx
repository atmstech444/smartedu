import { useParams } from "next/navigation";
import React from "react";
import { LectureTypes } from "../[id]/course/Lecture";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Book from "@/public/assets/icons/book.svg";
import Quizzes from "@/public/assets/icons/archive-book.svg";
import Video from "@/public/assets/icons/video-circle.svg";
import arrow from "@/public/assets/icons/arrowLeft.svg";
import nav from "@/public/assets/icons/nav.svg";

interface Props {
  lectureDetail?: LectureTypes;
  id: any;
}
const SecondaryNav = ({ lectureDetail, id }: Props) => {
  const params = useParams();
  const router = useRouter();
  const navigateToReading = (lectureId: any) => {
    router.push(`/watch/${params.id}/reading/${lectureId}`);
  };
  const navigateToVideo = (id: any) => {
    router.push(`/watch/${params.id}/video/${id}`);
  };

  return (
    <>
      <div className="md:p-[24px] md:mt-0 md:w-[30%] lg:w-[30%] bg-white rounded-md md:h-full">
        <p className="hidden md:block text-lg font-bold	text-black">ლექცია {lectureDetail?.course_id}</p>
        <div className="flex items-center justify-between md:hidden">
          <Image src={arrow} alt="arrow" />
          <div className="flex items-center justify-center gap-3">
            <p className="mb-0 text-lg font-bold	text-black">ლექცია {lectureDetail?.course_id}</p>
            <Image src={nav} alt="navicon" />
          </div>
        </div>
        {lectureDetail && lectureDetail.readings !== null ? (
          <div className="flex gap-3 cursor-pointer my-4" onClick={() => navigateToReading(lectureDetail.id)}>
            <Image alt="book" src={Book} />
            <div>
              <p className=" m-0 font-medium text-black">მასალა</p>
              <p className=" m-0">წასაკითხი</p>
            </div>
          </div>
        ) : (
          ""
        )}

        {lectureDetail &&
          lectureDetail.videos !== null &&
          lectureDetail &&
          lectureDetail.videos.map((_, index) => (
            <div className="flex gap-3 cursor-pointer mb-4" key={index} onClick={() => navigateToVideo(lectureDetail.id)}>
              <Image alt="video" src={Video} />
              <div>
                <p className=" m-0 font-medium	 text-black">პროგრამირების საწყისები</p>
                <p className=" m-0">ვიდეო</p>
              </div>
            </div>
          ))}

        {lectureDetail && lectureDetail.quizzes !== null && (
          <div className="flex gap-3 cursor-pointer mb-4">
            <Image alt="quizzes" src={Quizzes} />
            <div>
              <p className=" m-0 font-medium text-black">ლექციის ბოლოს</p>
              <p className=" m-0">ქვიზი</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SecondaryNav;
