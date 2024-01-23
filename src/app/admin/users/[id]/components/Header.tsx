import GoBack from "@/public/assets/dynamic_icons/GoBack";
import React from "react";
import DownloadImage from "@/public/assets/icons/Download.png";

interface PageHeaderProps {
  onGoBack: () => void;
  onExportToExcel: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  onGoBack,
  onExportToExcel,
}) => {
  return (
    <div className="flex gap-3 justify-between mt-6 items-baseline">
      <div
        className="flex gap-3 items-baseline cursor-pointer"
        onClick={onGoBack}
      >
        <p>მომხმარებლები</p>
        <GoBack />
      </div>
      <div
        onClick={onExportToExcel}
        className="flex gap-3  bg-[#5AC1F4] rounded-[4px] px-4 py-3 mr-56 cursor-pointer items-center justify-center"
      >
        <p className="text-white">ჩამოტვირთვა</p>
        <img src={DownloadImage.src} alt="Download Image" />
      </div>
    </div>
  );
};

export default PageHeader;
