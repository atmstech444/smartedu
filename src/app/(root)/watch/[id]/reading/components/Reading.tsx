"use client";
import React from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
import { LectureTypes } from "../../course/Lecture";
import icon from "../../../../../../public/assets/icons/Export.svg";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import NextButton from "../../../components/NextButton";
import arrow from "../../../../../../public/assets/icons/arrowrightblue.svg";

interface Props {
  id: any;
}

const Reading = ({ id }: Props) => {
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const dispatch = useAppDispatch();
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);
  const reading = lectureDetail?.readings;
  return (
    <>
      <main className="relative w-full flex items-center justify-center lg:block">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px]  w-[90%]  bg-white rounded-md">
          <Image src={Arrow} width="15" height="15" alt="back" className="lg:hidden" onClick={toggleMenuVisibility} />
          <div className="flex items-center justify-between">
            <h3>მასალა</h3>
            <NextButton id={reading[0].id} />
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
