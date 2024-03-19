import { useRouter } from "next/navigation";
import React from "react";

const AddSeeCertificate = ({ courseId, courseData, lectures }: any) => {
  const router = useRouter();
  const handleAddCertificate = () => {
    router.push(`/admin/add-certificate?lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };

  const handleSeeCertificate = () => {
    router.push(`/admin/see-certificate?&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };

  return (
    <div className="flex gap-20">
      <button className="bg-mainBlue rounded-faqBordeR text-base mt-5 text-start text-white hover:opacity-75 transition-all ease-in-out px-3 py-2" onClick={handleAddCertificate}>
        დაამატე სერთიფიკატი
      </button>
      <button className="bg-mainBlue rounded-faqBordeR text-base mt-5 text-start text-white hover:opacity-75 transition-all ease-in-out px-3 py-2" onClick={handleSeeCertificate}>
        ნახე სერთიფიკატი
      </button>
    </div>
  );
};

export default AddSeeCertificate;
