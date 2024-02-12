"use client";

import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import Arrow from "../../../../public/assets/icons/arrowLeft.svg";
import Image from "next/image";
import Book from "@/public/assets/dynamic_icons/Book";
import Video from "@/public/assets/dynamic_icons/Video";
import Quiz from "@/public/assets/dynamic_icons/Quiz";

const lectureData = [
  {
    title: "წასაკითხი მასალა",
    icon: <Book />,
  },
  {
    title: "ვიდეო:პროგრამირების საწყისები",
    icon: <Video />,
  },
  {
    title: "ვიდეო:პროგრამირების საწყისები",
    icon: <Video />,
  },
  {
    title: "ლექციის ბოლო:ქვიზი",
    icon: <Quiz />,
  },
];

const LectureNav = (id: any) => {
  const router = useRouter();
  const navigateToAboutPage = () => {
    router.push(`/watch/${id.id}/about`);
  };

  return (
    <div className="mt-[20%] p-[24px] md:mt-0 md:w-[30%] lg:w-[20%] bg-white rounded-md md:h-full">
      <div className="flex flex-col">
        <Image onClick={() => router.push(`/profile`)} src={Arrow} width={24} height={24} alt="image" className="md:hidden mb-4" />
        <LectureNumber>ლექცია 1</LectureNumber>
        {lectureData.map((item, index) => (
          <LectureMaterial key={index}>
            <div className="flex gap-3 items-center">
              {item.icon}
              <p className="mb-0 text-dark">{item.title}</p>
            </div>
          </LectureMaterial>
        ))}
      </div>
    </div>
  );
};

export default LectureNav;

const LectureMaterial = styled.button`
  color: #000;
  font-family: FiraGO;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
  margin-bottom: 24px;
`;

const LectureNumber = styled.h1`
  margin-bottom: 32px;
  color: #000;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
