import React from "react";
import Image from "next/image";

interface NavbarBoxProps {
  src: any;
  alt: string;
  text: string;
  isActive: any;
}

const NavbarBox = ({ src, alt, text, isActive }: NavbarBoxProps) => {
  return (
    <div
      className={`flex items-center gap-2 mr-2 p-2 rounded-faqBordeR ${
        isActive ? "bg-[#D9EBF4]" : ""
      } hover:bg-[#D9EBF4]`}
    >
      <div className="p-2">
        <Image src={src} alt={alt} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default NavbarBox;
