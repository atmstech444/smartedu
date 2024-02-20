import { useParams } from "next/navigation";
import React from "react";
import { LectureTypes } from "../[id]/course/Lecture";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Book from "@/public/assets/icons/book.svg";
import Quizzes from "@/public/assets/icons/archive-book.svg";
import Video from "@/public/assets/icons/video-circle.svg";
import arrow from "@/public/assets/icons/arrowLeft.svg";
import nav from "@/public/assets/icons/nav.svg";
import Link from "next/link";

interface Props {
  lectureDetail?: LectureTypes;
  id: any;
}
const SecondaryNav = ({ lectureDetail, id }: Props) => {
  const params = useParams();

  const pathName = usePathname();

  const router = useRouter();

  const navigateToQuiz = (id: any) => {
    router.push(`/watch/${params.id}/quiz/${id}`);
  };

  return (
    <>
      <div className="md:p-[24px] md:mt-0 md:w-[30%] lg:w-[30%] bg-white rounded-md md:h-full">
        <p className="hidden md:block text-lg font-bold	text-black">ლექცია {lectureDetail?.course_id}</p>
        <div className="flex items-center  justify-between md:hidden">
          <Image src={arrow} alt="arrow" />
          <div className="flex items-center justify-center gap-3">
            <p className="mb-0 text-lg font-bold	text-black">ლექცია {lectureDetail?.course_id}</p>
            <Image src={nav} alt="navicon" />
          </div>
        </div>
        {lectureDetail && lectureDetail.readings !== null ? (
          <Link
            className={`text-dark text-base rounded-md mb-3 px-3 py-2 flex gap-3 font-semibold cursor-pointer ${pathName === `/watch/${params.id}/reading/${lectureDetail.id}` ? "bg-lightestBlue" : "bg-transparent"}`}
            href={`/watch/${params.id}/reading/${lectureDetail.id}`}
          >
            <Image alt="book" src={Book} />
            <div>
              <p className=" m-0 font-medium text-black">მასალა</p>
              <p className=" m-0">წასაკითხი</p>
            </div>
          </Link>
        ) : (
          ""
        )}

        {lectureDetail &&
          lectureDetail.videos !== null &&
          lectureDetail &&
          lectureDetail.videos.map((video, index) => (
            <Link
              key={index}
              href={`/watch/${params.id}/video/${lectureDetail.id}/${video.id}`}
              className={`text-mainGray flex flex-col text-base rounded-md p-3  cursor-pointer ${pathName === `/watch/${params.id}/video/${lectureDetail.id}/${video.id}` ? "bg-lightestBlue" : "bg-transparent"}`}
            >
              <Image alt="video" src={Video} />
              <div>
                <p className=" m-0 font-medium	 text-black">{video.title}</p>
                <p className=" m-0">ვიდეო</p>
              </div>
            </Link>
          ))}

        {lectureDetail && lectureDetail.quizzes !== null && (
          <div className="flex gap-3 cursor-pointer mb-4" onClick={() => navigateToQuiz(lectureDetail.id)}>
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
