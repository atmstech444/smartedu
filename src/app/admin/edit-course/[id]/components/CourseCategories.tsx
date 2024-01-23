import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

const CourseCategories = ({
  categories,
  selectedCategoryId,
  handleCheckboxChange,
}: any) => {
  return (
    <div className="pr-10 pt-4">
      <h1 className="pb-7">მიაკუთვნე კურსი კატეგორიას</h1>
      {categories?.length > 0 ? (
        <div className="flex flex-col gap-7">
          {categories.map((category: any) => (
            <div key={category.id}>
              <input
                type="checkbox"
                checked={selectedCategoryId === category.id}
                onChange={() => handleCheckboxChange(category.id)}
              />
              <label className="pl-6">{category.title}</label>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default CourseCategories;
