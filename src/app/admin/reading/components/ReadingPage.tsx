import React from "react";
import { deleteReading } from "../../main/[id]/services/deleteReading";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { Link } from "react-router-dom";

type ReadingData = {
  id: number;
  description: string;
  lecture_id: number;
  url: string[];
};

const ReadingPage = ({ readingsData, setReadingsData }: any) => {
  const cookies = parseCookies();
  const token = cookies.authToken;

  if (!readingsData || readingsData.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-black">წასაკითხი მასალა არ არის ატვირთული</p>
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
    <div className="flex flex-col gap-6">
      <h2 className="text-black font-bold text-xl">წასაკითხი მასალა</h2>
      {readingsData.map((reading: ReadingData, index: number) => (
        <div key={index} className="flex flex-col gap-6 items-start">
          <h3 className="font-normal text-base text-black">{reading.description}</h3>
          <ul>
            {reading.url.map((url, urlIndex) => (
              <li key={urlIndex}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#006CFA] font-normal text-base">
                  {url}
                </a>
              </li>
            ))}
          </ul>
          <button className="p-1 bg-red rounded-md text-white" onClick={() => handleDeleteReading(reading.id)}>
            წაშლა
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReadingPage;
