import React from "react";
import { deleteReading } from "../../main/[id]/services/deleteReading";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import SecondLoadingSpinner from "@/components/LoadingSpinner";

type ReadingData = {
  id: number;
  description: string;
  lecture_id: number;
  url: string[];
  isLoading: any;
  pdf_file: any;
};

const ReadingPage = ({ readingsData, setReadingsData, isLoading }: any) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 justify-start items-center">
        <SecondLoadingSpinner />
        <p>იტვირთება...</p>
      </div>
    );
  }
  if (!readingsData || readingsData.length === 0) {
    return (
      <div className="flex flex-col gap-3 items-start text-base">
        <div className="flex flex-col gap-6">
          <p className="text-black">წასაკითხი მასალა არ არის ატვირთული</p>
        </div>

        <div className="flex justify-center">
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
            დაამატე მასალა
          </button>
        </div>
      </div>
    );
  }

  const handleDeleteReading = async (readingId: number) => {
    try {
      const response = await deleteReading(token, readingId);
      if (response.message === "Reading remove successfully") {
        setReadingsData((prevReadings: ReadingData[]) => prevReadings.filter((reading: ReadingData) => reading.id !== readingId));
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete reading");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };
  return (
    <div className="flex flex-col gap-6 mb-40 mr-10">
      <div className="flex justify-between gap-20">
        <h2 className="text-black font-bold text-xl">წასაკითხი მასალა</h2>
        <div className="flex justify-center relative cursor-pointer" onClick={() => router.back()}>
          <img src={"/assets/img/admin/go-back-arrow.svg"} alt="go-back" className="w-7 h-7 -ml-20 absolute" />
          <button className="text-black  py-1 px-7 rounded-lg w-[200px]">უკან</button>
        </div>
      </div>
      {readingsData?.map((reading: ReadingData, index: number) => (
        <div key={index} className="flex flex-col gap-6 items-start">
          <h3 className="font-normal text-base text-black">{reading.description}</h3>
          {reading.pdf_file && (
            <div className="border border-sky-200 p-2 rounded-lg text-center">
              <a href={reading.pdf_file} target="_blank" download className="text-[#006CFA] font-normal text-base ">
                PDF File
                <p>{reading.pdf_file.split("_")[1]}</p>
              </a>
            </div>
          )}
          <ul>
            {Array.isArray(reading.url) ? (
              reading.url.map((url, urlIndex) => (
                <li key={urlIndex} className="mt-4">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#006CFA] font-normal text-base ">
                    <span className="text-xl font-bold text-black">URL:</span> {url?.length > 30 ? url.substring(0, 30) + "..." : url}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <a href={reading.url} target="_blank" rel="noopener noreferrer" className="text-[#006CFA] font-normal text-base">
                  {(reading.url as string).length > 30 ? (reading.url as string).substring(0, 30) + "..." : reading.url}
                </a>
              </li>
            )}
          </ul>

          <button className="p-2 bg-red rounded-xl w-[200px] text-white " onClick={() => handleDeleteReading(reading.id)}>
            წაშლა
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReadingPage;
