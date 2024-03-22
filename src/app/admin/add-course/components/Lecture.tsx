// Lecture.tsx
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
// @ts-ignore
import Select, { ActionMeta, OptionsType, ValueType } from "react-select";
import { getLecturers } from "../services/getLecturers";

export type LectureOption = {
  id: any;
  value: any;
  label: any;
  first_name: any;
  last_name: any;
};

interface LectureProps {
  selectedLecture: LectureOption[];
  onLectureChange: (selectedLecture: LectureOption[]) => void;
}

const Lecture: React.FC<LectureProps> = ({
  selectedLecture,
  onLectureChange,
}) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [lectures, setLectures] = useState<LectureOption[]>([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const data = await getLecturers(token);
        setLectures(data.lecturers);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchLectures();
  }, []);

  const options: OptionsType<LectureOption> = lectures.map((lecturer) => ({
    value: lecturer.id,
    label: `${lecturer.first_name} ${lecturer.last_name}`,
  }));

  const selectedOptions = options.find(
    (opt: { value: LectureOption[] }) => opt.value === selectedLecture
  );

  const handleLectureChange = (
    selectedOption: ValueType<LectureOption>,
    actionMeta: ActionMeta<LectureOption>
  ) => {
    if (selectedOption) {
      const selectedLectureId = (selectedOption as LectureOption).value;
      onLectureChange(selectedLectureId);
    } else {
      //@ts-ignore
      onLectureChange(null);
    }
  };
  return (
    <div className="cursor-pointer">
      <Select
        options={options}
        value={selectedOptions}
        onChange={handleLectureChange}
        className="basic-single"
      />
    </div>
  );
};

export default Lecture;
