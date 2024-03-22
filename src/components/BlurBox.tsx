import LoadingSpinner from "./LoadingSpinner";

const BlurBox = ({ uploadPercentage }: any) => {
  return (
    <div className="modal-overlay z-50 fixed inset-0 flex items-center justify-center">
      <div className=" overflow-y-hidden max-h-full relative">
        <div className="relative bg-white flex flex-col  w-96  h-36 rounded-faqBordeR items-center justify-center max-h-[90vh]">
          <LoadingSpinner uploadPercentage={uploadPercentage} />
          {/* {uploadPercentage !== undefined && (
            <p>{`Upload Progress: ${uploadPercentage}%`}</p>
          )} */}
          <p className="text-dark text-base font-semibold">გთხოვთ,დაელოდოთ</p>
        </div>
      </div>
    </div>
  );
};

export default BlurBox;
