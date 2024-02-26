import React from "react";

const LoadingSpinner = ({ uploadPercentage }: any) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="loading-spinner"></div>
      <span>{uploadPercentage ? <p className="text-white text-xl font-normal">იტვირთება... {uploadPercentage} %</p> : <p className="text-white text-xl font-normal">იტვირთება...</p>}</span>
    </div>
  );
};

export default LoadingSpinner;
