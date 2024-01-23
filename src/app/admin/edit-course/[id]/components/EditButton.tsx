import React from "react";

interface EditButtonProps {
  handleEdit: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ handleEdit }) => {
  return (
    <button
      className="mt-14 mb-28 py-3 px-12 bg-dark rounded-[32px] text-white self-center"
      onClick={handleEdit}
    >
      შენახვა
    </button>
  );
};

export default EditButton;
