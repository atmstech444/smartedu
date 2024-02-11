// Navbar.tsx
import React from "react";
import { useRouter } from "next/navigation";

interface Lecture {
  id: any;
  name: any;
}

const Navbar = ({ lectures }: { lectures: Lecture[] }) => {
  const router = useRouter();

  const handleOpenTabs = (lectureId: number) => {
    const lecturesData = lectures.map((lecture) => ({
      id: lecture.id,
      name: lecture.name,
    }));
    router.push(`/admin/add-lecture?lectureId=${lectureId}&lectures=${encodeURIComponent(JSON.stringify(lecturesData))}`);
  };

  return (
    <div className="w-64 mt-11 px-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className=" flex flex-col gap-4 w-[200px] max-w-[200px]">
        {/* <img src={`https://smarteducation.shop/smarteducation_backend/public/admin/${courseData?.cover_image}`} className="rounded-2xl" /> */}
        {/* <p className="text-base text-black font-semibold">{courseData?.title}</p> */}
        <div className="w-full h-[1px] bg-[#D1D1D1]"></div>

        {lectures.map((lecture) => (
          <div key={lecture.id} className="flex justify-between items-center">
            <h1 className="cursor-pointer underline" onClick={() => handleOpenTabs(lecture.id)}>
              {lecture.name}
            </h1>
          </div>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
