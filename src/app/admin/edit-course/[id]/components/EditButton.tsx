import React from "react";

interface EditButtonProps {
  handleEdit: () => void;
  loading: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({ handleEdit, loading }) => {
  return (
    <div>
      {loading ? (
        <p className="m-20">იტვირთება...</p>
      ) : (
        <button className="mt-14 mb-28 py-3 px-12 bg-dark rounded-[32px] text-white self-center" onClick={handleEdit}>
          შენახვა
        </button>
      )}
    </div>
  );
};

export default EditButton;
