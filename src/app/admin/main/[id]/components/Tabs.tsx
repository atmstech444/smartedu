import React, { Suspense } from "react";
import LectureTitleAndDescription from "./LectureTitleAndDescription";

const Tabs = ({ setActiveTab, activeTab }: any) => {
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Suspense>
        <LectureTitleAndDescription />
      </Suspense>
      <div className="flex gap-9 items-center border border-1-[#D1D1D1] p-1 w-[395px] rounded-md">
        <h1 className={`cursor-pointer hover:bg-slate-600 hover:text-white rounded-md ${activeTab === "წასაკითხი" ? "active" : ""}`} onClick={() => handleTabClick("წასაკითხი")}>
          დამხმარე მასალა
        </h1>
        <h1 className={`cursor-pointer hover:bg-slate-600 hover:text-white rounded-md ${activeTab === "ვიდეო" ? "active" : ""}`} onClick={() => handleTabClick("ვიდეო")}>
          ვიდეო
        </h1>
        <h1 className={`cursor-pointer hover:bg-slate-600 hover:text-white rounded-md ${activeTab === "ქვიზი" ? "active" : ""}`} onClick={() => handleTabClick("ქვიზი")}>
          ქვიზი
        </h1>
        <style jsx>{`
          h1 {
            padding: 5px 10px;
          }

          .active {
            background-color: #475569;
            border-radius: 6px;
            color: white;
          }
        `}</style>
      </div>
    </>
  );
};

export default Tabs;
