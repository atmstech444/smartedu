import React from "react";
import Image from "next/image";
import arrow from "../../../../public/assets/icons/arrowrightblue.svg";

const NextButton = () => {
  return (
    <>
      <div className="flex items-center gap-4 cursor-pointer">
        <p className="mb-0 text-base text-mainBlue font-semibold">შემდეგი</p>
        <Image src={arrow} alt="next" width="7" height="7" />
      </div>
    </>
  );
};

export default NextButton;
