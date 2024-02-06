import React from "react";

const LoadingSpinner = ({ uploadPercentage }: any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="flex items-center gap-4 bg-white p-6 rounded-md">
        <div className="loading-spinner"></div>
        <span>{uploadPercentage ? <p className="text-black text-xl font-normal">იტვირთება... {uploadPercentage} %</p> : <p className="text-black text-xl font-normal">იტვირთება...</p>}</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
