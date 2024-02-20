"use client";
import React, { ReactNode, useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const UserMobileMenu = ({ isOpen, onClose, children }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <div className={`fixed inset-0 z-50 top-[15%]  ${isOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="absolute  right-0  flex flex-col w-full bg-white p-4">{children}</div>
      </div>
    </>
  );
};

export default UserMobileMenu;
