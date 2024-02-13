import React from "react";
import LectureTitleAndDescription from "./LectureTitleAndDescription";

const Tabs = ({ setActiveTab, activeTab }: any) => {
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <>
    <LectureTitleAndDescription />
     <div className="flex gap-9 items-center border border-1-[#D1D1D1] p-1 w-[325px]">
      <h1 className={`cursor-pointer ${activeTab === "წასაკითხი" ? "active" : ""}`} onClick={() => handleTabClick("წასაკითხი")}>
        წასაკითხი
      </h1>
      <h1 className={`cursor-pointer ${activeTab === "ვიდეო" ? "active" : ""}`} onClick={() => handleTabClick("ვიდეო")}>
        ვიდეო
      </h1>
      <h1 className={`cursor-pointer ${activeTab === "ქვიზი" ? "active" : ""}`} onClick={() => handleTabClick("ქვიზი")}>
        ქვიზი
      </h1>
      <style jsx>{`
        h1 {
          padding: 5px 10px;
        }

        .active {
          background-color: #eee;
          border-radius: 4px;
        }
      `}</style>
    </div>
    </>
   
  );
};

export default Tabs;
