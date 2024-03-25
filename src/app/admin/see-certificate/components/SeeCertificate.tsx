import { API_ADMIN_STORAGE } from "@/api/API_PATH";
import React from "react";
import { deleteCertificat } from "../../add-certificate/services/deleteCertificate";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";

const SeeCertificate = ({ courseData }: any) => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.authToken;
  const deleteCertificate = async () => {
    try {
      const response = await deleteCertificat(token, courseData?.certificate?.id);
      if (response.message === "Certificate deleted successfully") {
        Swal.fire({
          icon: "success",
          title: "სერთიფიკატი წაიშალა",
          showConfirmButton: true,
          timer: 1500,
        });
        router.push("/admin/main");
      } else {
        console.error("Failed to delete certificate");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {courseData?.certificate === null ? (
        <div className="flex flex-col gap-10 items-start">
          <div className="flex justify-start relative cursor-pointer" onClick={() => router.back()}>
            <img src={"/assets/img/admin/go-back-arrow.svg"} alt="go-back" className="w-7 h-7 absolute" />
            <button className="text-black  py-1 px-7 rounded-lg w-[120px]">უკან</button>
          </div>
          <h1>სერთიფიკატი არ არის დამატებული</h1>
        </div>
      ) : (
        <div>
          <img src={API_ADMIN_STORAGE + courseData?.certificate?.certificate_image} alt="Certificate" className="w-[300px] h-[300px]" />
          <button className="bg-red rounded-faqBordeR text-base mt-5 text-start text-white hover:opacity-75 transition-all ease-in-out px-3 py-2" onClick={deleteCertificate}>
            წაშლა
          </button>
        </div>
      )}
    </>
  );
};

export default SeeCertificate;
