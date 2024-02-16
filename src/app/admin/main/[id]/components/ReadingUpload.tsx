"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { addReading } from "../services/addReading";
import { parseCookies } from "nookies";
import { getReadings } from "../services/getReadings";
import { deleteReading } from "../services/deleteReading";
import { useRouter } from "next/navigation";

type ReadingData = {
  id: number;
  description: string;
  lecture_id: number;
  url: string[];
};

const useQueryParams = () => {
  const [id, setID] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setID(id);
  }, []);

  return id;
};

const Reading = ({ lectures }: any) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const id = useQueryParams();
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<{ key: number; element: JSX.Element }[]>([]);
  const [description, setDescription] = useState("");
  const [_, setReadingsData] = useState<ReadingData[]>([]);

  const handleImageClick = () => {
    
    const newInputKey = inputs.length + 1;

    const handleDeleteInput = () => {
      setInputs((prevInputs) => prevInputs.filter((input) => input.key !== newInputKey));
    };

    const newInput = (
      <div className="relative w-[220px] flex items-center gap-1" key={newInputKey}>
        <input id={`text-${newInputKey}`} ref={fileInputRef} type="url" placeholder="ლინკის ატვირთვა" className="border border-1-[#D1D1D1] outline-none w-44 rounded-lg p-2" onChange={() => {}} />
        <Image src="/assets/img/admin/AddFile.png" width={16} height={16} alt={"Add Icon"} />
        <Image src={"/assets/img/admin/closeIcon.png"} width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute top-4 -right-0" onClick={handleDeleteInput} />
      </div>
    );

    setInputs((prevInputs) => [...prevInputs, { key: newInputKey, element: newInput }]);
  };

  const handleTyping = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    if (isTyping) {
      setIsTyping(false);
    }
  };

  const handleCreateReading = async () => {
    const formData = new FormData();

    formData.append("description", description);

    const readingUrls: string[] = [];
    inputs.forEach((input) => {
      const inputValue = fileInputRef.current?.value;
      if (inputValue) {
        formData.append(`url[]`, inputValue);
        readingUrls.push(inputValue);
      }
    });

    try {
      const response = await addReading(token, formData, id);
      if (response.message === "reading add successfully") {
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
        fetchData();
      } else {
        console.error("Failed to create reading");
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

  const fetchData = async () => {
    try {
      if (id !== undefined) {
        const response = await getReadings(token, id);
        const { reading } = response;
        setReadingsData(reading);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSeeReading = () => {
    router.push(`/admin/reading?lectureId=${id}&lectures=${encodeURIComponent(JSON.stringify(lectures))}`);
  };

  return (
    <div>
      <button className="text-white bg-[#2FA8FF] p-2 rounded-md text-sm mb-5" onClick={() => handleSeeReading()}>წასაკითხი მასალა</button>
      <div className="grid grid-cols-6   w-full">
        <div className="flex flex-col gap-3 col-span-5">
          <h1 className="text-gray-600 font-FiraGO font-medium text-base md:text-lg lg:text-xl xl:text-2xl">წასაკითხი</h1>

          <div className="relative w-full max-w-[780px]">
            <textarea
              className="w-full h-auto resize-none rounded-lg px-2 pl-7 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
              placeholder="აღწერა"
              name="description"
              id="description"
              value={description}
              onFocus={handleTyping}
              onBlur={handleBlur}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {!isTyping && <Image src="/assets/img/admin/pencil.png" className="absolute top-3 left-2" alt={""} width={12} height={12} />}
          </div>

          <div className="flex justify-between max-w-[780px]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 w-[220px]">
                <p className="border border-1-[#D1D1D1] outline-none w-44 rounded-lg p-2 text-gray-500">ლინკის ატვირთვა</p>
                <Image src="/assets/img/admin/AddFile.png" width={16} height={16} alt={"Add Icon"} />
              </div>
              {inputs.map((input) => input.element)}
              <div>
                <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full flex  mt-[300px] col-span-2">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={handleCreateReading}>
              შენახვა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
