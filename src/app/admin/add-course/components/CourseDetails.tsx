import React from "react";
import Lecture, { LectureOption } from "./Lecture";
import IntroUploader from "./IntroUploader";

interface CourseDetailsProps {
  selectedIntro: File | null;
  onIntroUpload: (selectedFile: File) => void;
  onDeleteIntro: () => void;
  selectedLecture: LectureOption[];
  onLectureChange: (selectedLecture: LectureOption[]) => void;
  errorMessages: Record<string, string[]>;
}
const CourseDetails: React.FC<CourseDetailsProps> = ({ selectedIntro, onIntroUpload, onDeleteIntro, selectedLecture, onLectureChange, errorMessages }) => {
  return (
    <div className="mt-16 flex flex-col items-start gap-6 pr-4">
      <h1 className="self-center text-dark text-xl font-normal">კურსის დეტალები</h1>

      <div className="rounded-[32px] shadow-shad p-5 mr-5">
        <h1 className=" text-dark text-base font-normal">ინტროს დამატება</h1>

        <IntroUploader selectedIntro={selectedIntro} onUpload={onIntroUpload} onDelete={onDeleteIntro} />

        {errorMessages.intro && <p className="text-red pt-2">{errorMessages.intro[0]}</p>}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className=" text-[#6A6A6A] text-base font-normal">ფასი:</p>

            <input id="priceInput" type="number" className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" />
            {errorMessages.price && <p className="text-red pt-2">{errorMessages.price[0]}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <p className=" text-[#6A6A6A] text-base font-normal">ფასდაკლებული ფასი:</p>

            <input id="discountedPrice" type="number" className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" />
          </div>

          <div className="flex flex-col gap-1">
            <p className=" text-[#6A6A6A] text-base font-normal">ლექტორი:</p>

            <Lecture selectedLecture={selectedLecture} onLectureChange={onLectureChange} />
            {errorMessages.lecturer && <p className="text-red pt-2">{errorMessages.lecturer[0]}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <p className=" text-[#6A6A6A] text-base font-normal">ხანგრძლივობა:</p>

            <input id="durationInput" type="text" className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" />
            {errorMessages.duration && <p className="text-red pt-2">{errorMessages.duration[0]}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <p className=" text-[#6A6A6A] text-base font-normal">ენა:</p>

            <input id="languageInput" type="text" className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" />
            {errorMessages.language && <p className="text-red pt-2">{errorMessages.language[0]}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
