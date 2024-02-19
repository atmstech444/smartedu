"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../components/SecondaryNav";
import UserMobileMenu from "../../../components/UserMobileMenu";
const Reading = (id: { id: any }) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
  return (
    <>
      <main className="relative w-full">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] md:w-[80%] lg:w-[90%]  bg-red rounded-md">
          <Image src={Arrow} width="15" height="15" alt="back" className="md:hidden" onClick={toggleMenuVisibility} />
          <div>Reading</div>
        </div>
      </main>
    </>
  );
};

export default Reading;
