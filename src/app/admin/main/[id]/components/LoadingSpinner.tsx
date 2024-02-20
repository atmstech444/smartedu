const LoadingSpinner = ({ uploadPercentage, totalSizeUploaded }: any) => {
  const totalSizeUploadedInMB = (totalSizeUploaded / (1024 * 1024)).toFixed(2);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-opacity-50">
      <div className="flex items-center gap-4 bg-white p-6 rounded-md shadow-lg">
        <div className="loading-spinner"></div>
        <span>
          {uploadPercentage ? (
            <p className="text-black text-xl font-normal">
              იტვირთება... {uploadPercentage}% ({totalSizeUploadedInMB} MB)
            </p>
          ) : (
            <p className="text-black text-xl font-normal">იტვირთება...</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
