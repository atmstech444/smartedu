import React from "react";
import { Purchase } from "./UsersIdContent";
import { API_STORAGE } from "@/api/API_PATH";

interface PurchaseHistoryProps {
  purchases: Purchase[] | undefined;
}

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({ purchases }) => {
  return (
    <>
      {purchases ? (
        <div className="grid grid-cols-2 w-[800px]">
          <div className="w-72 flex flex-col gap-8 text-black font-normal">
            <p className="text-xl">ნაყიდი კურსები</p>

            {purchases.map((purchase, index) => (
              <p key={index}>
                <img src={`${API_STORAGE}${purchase.course.cover_image}`} alt="Course Cover" className="pb-3" />
                {purchase.course.title}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-12 text-[#000] font-normal">
            <h1 className="text-xl">გადახდების ისტორია</h1>

            {purchases.map((purchase, index) => (
              <div key={index}>
                <div className="flex flex-col gap-8 pb-10">
                  <div className="flex gap-6 items-center">
                    <p>სტატუსი:</p>
                    <div className={`border rounded-borderHalf bg-white text-center px-6 ${purchase.order_status === "completed" ? "border-[#1E9B24] text-[#1E9B24]" : purchase.order_status === "rejected" ? "border-[#C72626] text-[#C72626]" : ""}`}>
                      <p>{purchase.order_status}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <p>გადახდილი თანხა: </p>
                    <p>{purchase.course.price} ლ </p>
                  </div>

                  <div className="flex gap-6 items-center">
                    <p>შეძენის თარიღი: </p>
                    <p>{purchase.formatted_created_at}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PurchaseHistory;
