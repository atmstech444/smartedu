import React from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Book from "@/public/assets/icons/book.svg";
import Quizzes from "@/public/assets/icons/archive-book.svg";
import Video from "@/public/assets/icons/video-circle.svg";
import arrow from "@/public/assets/icons/arrowLeft.svg";
import nav from "@/public/assets/icons/nav.svg";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import { closeNavbar } from "@/redux/slices/mobileMenuSlice";
import { useAppSelector } from "@/redux/store";
import { updateIndexInfo } from "@/redux/slices/indexSlice";

interface Props {
  id: any;
}

const SecondaryNav = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const closeMenu = () => {
    dispatch(closeNavbar());
  };
  const params = useParams();
  const pathName = usePathname();
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);

  const arr = [];
  if (lectureDetail.readings) {
    lectureDetail.readings.forEach((reading) => {
      arr.push(reading);
    });
  }
  if (lectureDetail.videos) {
    lectureDetail.videos.forEach((video) => {
      arr.push(video);
    });
  }
  if (lectureDetail.quizzes) {
    arr.push(lectureDetail.quizzes);
  }

  return (
    <>
      <div className="md:p-[24px] md:mt-0 md:w-[30%] lg:w-[30%] bg-white rounded-md md:h-full">
        <p className="hidden lg:block text-lg font-bold	text-black">ლექცია {lectureDetail?.course_id}</p>
        <div className="flex items-center justify-between mb-3 lg:hidden">
          <Image src={arrow} alt="arrow" onClick={closeMenu} />
          <div className="flex items-center justify-center gap-3">
            <p className="mb-0 text-lg font-bold	text-black">{lectureDetail?.lecture_name}</p>
            <Image src={nav} alt="navicon" />
          </div>
        </div>

        {arr.map((item: any, index: number) => (
          <div key={index}>
            {item?.description && (
              <Link
                className={`text-dark text-base rounded-md mb-3 px-3 py-2 flex gap-3 font-semibold cursor-pointer ${pathName === `/watch/${params.id}/reading/${lectureDetail.id}` ? "bg-lightestBlue" : "bg-transparent"}`}
                href={`/watch/${params.id}/reading/${lectureDetail.id}`}
                onClick={() => dispatch(updateIndexInfo(index))}
              >
                <Image alt="book" src={Book} />
                <div>
                  <p className="mb-0 font-medium text-black">მასალა</p>
                  <p className="mb-0">წასაკითხი</p>
                </div>
              </Link>
            )}

            {item.video?.length > 0 && (
              <Link
                key={index}
                href={`/watch/${params.id}/video/${lectureDetail.id}/${item.id}`}
                className={`text-mainGray flex gap-4 text-base rounded-md p-3  cursor-pointer ${pathName === `/watch/${params.id}/video/${lectureDetail.id}/${item.id}` ? "bg-lightestBlue" : "bg-transparent"}`}
                onClick={() => dispatch(updateIndexInfo(index))}
              >
                <Image alt="video" src={Video} />
                <div>
                  <p className=" m-0 font-medium	 text-black">{item.title}</p>
                  <p className=" m-0">ვიდეო</p>
                </div>
              </Link>
            )}

            {Array.isArray(item) && item.length > 0 && (
              <Link
                href={`/watch/${params.id}/quiz/${lectureDetail.id}`}
                className={`text-mainGray flex gap-4 text-base rounded-md p-3 cursor-pointer ${
                  pathName === `/watch/${params.id}/quiz/${lectureDetail.id}` || pathName === `/watch/${params.id}/quiz/${lectureDetail.id}/start` ? "bg-lightestBlue" : "bg-transparent"
                }`}
                onClick={() => {
                  console.log("Clicked link");
                  dispatch(updateIndexInfo(index));
                }}
              >
                <Image alt="quizzes" src={Quizzes} />
                <div>
                  <p className="m-0 font-medium text-black">ლექციის ბოლოს</p>
                  <p className="m-0">ქვიზი</p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SecondaryNav;
