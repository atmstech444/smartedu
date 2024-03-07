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
  console.log(readingsData);
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
    <div className="flex flex-col gap-6 mb-40">
      <div className="flex justify-between gap-20">
        <h2 className="text-black font-bold text-xl">წასაკითხი მასალა</h2>
        <div className="flex justify-center">
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
            უკან
          </button>
        </div>
      </div>
      {readingsData?.map((reading: ReadingData, index: number) => (
        <div key={index} className="flex flex-col gap-6 items-start">
          <h3 className="font-normal text-base text-black">{reading.description}</h3>
          {reading.pdf_file && (
            <div className="border border-sky-200 p-2 rounded-lg text-center">
              <a href={reading.pdf_file} target="_blank" download className="text-[#006CFA] font-normal text-base ">
                PDF File
                <p>{reading.pdf_file}</p>
              </a>
            </div>
          )}
          <ul>
            {Array.isArray(reading.url) ? (
              reading.url.map((url, urlIndex) => (
                <li key={urlIndex}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#006CFA] font-normal text-base">
                    {url}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <a href={reading.url} target="_blank" rel="noopener noreferrer" className="text-[#006CFA] font-normal text-base">
                  {reading.url}
                </a>
              </li>
            )}
          </ul>

          <button className="p-1 bg-red rounded-md text-white " onClick={() => handleDeleteReading(reading.id)}>
            წაშლა
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReadingPage;
