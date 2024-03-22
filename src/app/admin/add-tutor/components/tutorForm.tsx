import React from "react";

interface tutorForm {
  onHandleCreateTutor: () => void;
}

const TutorForm = ({ onHandleCreateTutor }: tutorForm) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[340px] flex flex-col gap-2 mt-3">
        <label htmlFor="">
          <p>სახელი / გვარი</p>
        </label>
        <input
          id="name"
          type="text"
          className="rounded-borderHalf bg-[#F5F5F5] w-full h-12 outline-none pl-2"
        />
      </div>
      {/* <div className="w-[340px] flex flex-col gap-2">
        <label htmlFor="">
          <p>აღწერა</p>
        </label>
        <textarea
          id="description"
          rows={4}
          cols={50}
          className="rounded-borderHalf bg-[#F5F5F5] p-2 outline-none"
        ></textarea>
      </div> */}
      <button
        className="mt-5 mb-28 py-3 px-12 outline-none bg-dark rounded-[32px] text-white self-start"
        onClick={onHandleCreateTutor}
      >
        შენახვა
      </button>
    </div>
  );
};

export default TutorForm;
