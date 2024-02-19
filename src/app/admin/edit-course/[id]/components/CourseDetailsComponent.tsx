import React, { useRef } from "react";
import CustomSelect from "./CustomSelect";
// @ts-ignore
import { OptionsType } from "react-select";

interface CourseDetailsProps {
  data: any;
  lectures: any;
  selectedLecturerId: number | null;
  handleLecturerChange: (selectedOption: any) => void;
  handleFileChange: (selectedFile: File) => void;
}

const CourseDetailsComponent: React.FC<CourseDetailsProps> = ({ data, lectures, selectedLecturerId, handleLecturerChange, handleFileChange }) => {
  const videoRef = useRef(null);
  const options: OptionsType<any> = lectures.map((lecturer: { id: any; first_name: any; last_name: any }) => ({
    value: lecturer.id,
    label: `${lecturer.first_name} ${lecturer.last_name}`,
  }));

  return (
    <div className="mt-16 flex flex-col items-start gap-6 pr-4 w-[355px]">
      <h1 className="self-center text-dark text-xl font-normal">კურსის დეტალები</h1>

      <div className="rounded-[32px] shadow-shad p-5 mr-5">
        <h1 className=" text-dark text-base font-normal">ინტროს რედაქტირება</h1>
        <div className="my-2">
          {data.intro && (
            <video controls ref={videoRef}>
              <source src={`http://192.168.1.106:8000/${data.intro}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <input
            type="file"
            className="w-[215px] mt-5"
            onChange={(e) => {
              const selectedFile = e.target?.files?.[0];
              if (selectedFile) {
                handleFileChange(selectedFile);
              }
            }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#6A6A6A] text-base font-normal">ფასი:</p>
            <input id="priceInput" type="text" className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" defaultValue={data.price} />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[#6A6A6A] text-base font-normal">ლექტორი:</p>
            <div className="cursor-pointer">
              <CustomSelect options={options} onChange={handleLecturerChange} value={selectedLecturerId || ""} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[#6A6A6A] text-base font-normal">ხანგრძლივობა:</p>
            <input id="durationInput" type="text" defaultValue={data.duration} className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[#6A6A6A] text-base font-normal">ენა:</p>
            <input id="languageInput" type="text" defaultValue={data.language} className="border border-[#c1c1c1] rounded-[32px] outline-none pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsComponent;
