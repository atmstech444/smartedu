import React from "react";
import CourseDescription from "./CourseDescription";
import CourseCategories from "./CourseCategories";
import CourseDetailsComponent from "./CourseDetailsComponent";
import EditButton from "./EditButton";

interface EditFullCourseProps {
  data: any;
  categories: any[];
  selectedCategoryId: number | null;
  handleCheckboxChange: (categoryId: number) => void;
  lectures: any[];
  selectedLecturerId: number | null;
  handleLecturerChange: (selectedOption: any) => void;
  handleFileChange: (selectedFile: File) => void;
  handleMobileFileChange: (selectedFile: File) => void;
  handleIntroChange: (selectedFile: File) => void;
  handleEdit: () => void;
}

const EditFullCourse: React.FC<EditFullCourseProps> = ({ data, categories, selectedCategoryId, handleCheckboxChange, lectures, selectedLecturerId, handleLecturerChange, handleFileChange, handleMobileFileChange, handleEdit, handleIntroChange }) => {
  return (
    <div className="flex justify-between w-full">
      <CourseDescription data={data} onFileChange={handleFileChange} handleMobileFileChange={handleMobileFileChange}/>
      <div className="flex flex-col items-end">
        <CourseCategories categories={categories} selectedCategoryId={selectedCategoryId} handleCheckboxChange={handleCheckboxChange} />
        <CourseDetailsComponent data={data} lectures={lectures} selectedLecturerId={selectedLecturerId} handleLecturerChange={handleLecturerChange} handleFileChange={handleIntroChange} />
        <EditButton handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default EditFullCourse;
