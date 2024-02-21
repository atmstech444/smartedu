import React from "react";
import Image from "next/image";
import arrow from "../../../../public/assets/icons/arrowrightblue.svg";
import { useAppSelector } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";

const NextButton = ({ id }: any) => {
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

  const currentIndex = arr.findIndex((item: any) => item.id === id);
  const params = useParams();
  const findNextElement = (arr: any, currentIndex: number) => {
    if (currentIndex !== -1 && currentIndex < arr.length - 1) {
      const nextElement = arr[currentIndex + 1];
      return nextElement;
    }
    return null;
  };

  const nextElement = findNextElement(arr, currentIndex);
  const router = useRouter();
  const handleClick = () => {
    if (nextElement) {
      if (nextElement.video) {
        router.push(`/watch/${params.id}/video/${nextElement.lecture_id}/${nextElement.id}`);
      }
      if (Array.isArray(nextElement)) {
        router.push(`/watch/${params.id}/quiz/${nextElement[0].lecture_id}`);
      }
    }
  };
  return (
    <>
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleClick()}>
        <p className="mb-0 text-base text-mainBlue font-semibold">შემდეგი</p>
        <Image src={arrow} alt="next" width="7" height="7" />
      </div>
    </>
  );
};

export default NextButton;
