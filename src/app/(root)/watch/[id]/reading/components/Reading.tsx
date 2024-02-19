"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
import { LectureTypes } from "../../course/Lecture";
import icon from "../../../../../../public/assets/icons/Export.svg";
import arrow from "../../../../../../public/assets/icons/arrowrightblue.svg";
interface Props {
  lectureDetail?: LectureTypes | undefined;
  id: any;
}
const Reading = ({ id, lectureDetail }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
  const reading = lectureDetail?.readings;
  console.log(reading);
  return (
    <>
      <main className="relative w-full">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} lectureDetail={lectureDetail} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] md:w-[80%] lg:w-[90%]  bg-white rounded-md">
          <Image src={Arrow} width="15" height="15" alt="back" className="md:hidden" onClick={toggleMenuVisibility} />
          <div className="flex items-center justify-between">
            <h3>მასალა</h3>
            <div className="flex items-center gap-4">
              <p className="mb-0 text-base text-mainBlue font-semibold">შემდეგი</p>
              <Image src={arrow} alt="next" width="7" height="7" />
            </div>
          </div>

          <div className="mb-4">{reading && reading[0]?.description}</div>
          {reading &&
            reading?.map((item) =>
              item.url?.map((link, index) => (
                <a href={`https://${link}`} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center gap-2">
                  <p className="mb-0 text-sm text-mainBlue">{link}</p>
                  <Image src={icon} alt="icon" width="15" height="15" />
                </a>
              ))
            )}

          <button className="self-start text-base font-medium text-white py-2 px-3 bg-mainBlue rounded-md">მონიშნე წაკითხულად</button>
        </div>
      </main>
    </>
  );
};

export default Reading;
