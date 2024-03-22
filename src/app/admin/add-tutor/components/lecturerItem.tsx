import { API_STORAGE } from "@/api/API_PATH";
import LoadingSpinner from "@/components/LoadingSpinner";
import DeleteIcon from "@/public/assets/dynamic_icons/DeleteIcon";
import React from "react";

const LecturerItem = ({ lecture, onDeleteClick }: any) => {
  const handleDeleteClick = () => {
    onDeleteClick(lecture);
  };

  return (
    <div>
      <ul className="flex gap-32 items-center justify-between w-[500px] bg-[#F3F3F3] rounded-buttonBorder px-6 py-2">
        <div className="flex gap-4 items-center">
          {lecture?.image ? <img src={`${API_STORAGE}${lecture?.image}`} alt="lecturer_image" className="p-1 w-14 h-14 rounded-[100px]" /> : <LoadingSpinner />}
          <div className="flex gap-2 w-full">
            <li className="text-black text-xl font-normal">{lecture?.first_name || <LoadingSpinner />}</li>
            <li className="text-black text-xl font-normal">{lecture?.last_name || <LoadingSpinner />}</li>
          </div>
        </div>

        <DeleteIcon onClick={handleDeleteClick} />
      </ul>
    </div>
  );
};

export default LecturerItem;
