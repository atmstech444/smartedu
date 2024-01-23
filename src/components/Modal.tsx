"use client";
import { useEffect } from "react";
import xbtn from "../public/assets/icons/x.svg";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document
        .getElementById("modal-overlay")
        ?.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto";
      document
        .getElementById("modal-overlay")
        ?.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div
      id="modal-overlay"
      className="modal-overlay z-50 fixed inset-0 flex items-center justify-center"
    >
      <div className="modal-content overflow-y-hidden max-h-full relative">
        <div className="relative flex flex-col items-center max-h-[90vh]">
          <Image
            src={xbtn}
            alt="xicon"
            onClick={onClose}
            className="cursor-pointer absolute right-1 top-2"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
