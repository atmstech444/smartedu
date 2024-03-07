"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { addReading } from "../services/addReading";
import { parseCookies } from "nookies";
import { getReadings } from "../services/getReadings";
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

const Reading = ({ lectures, courseData }: any) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const id = useQueryParams();
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(false);
  const [description, setDescription] = useState("");
  const [inputs, setInputs] = useState<string[]>([""]);
  const fileInputRefs = useRef<HTMLInputElement[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readingsData, setReadingsData] = useState<ReadingData[]>([]);

  const handleTyping = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    if (isTyping) {
      setIsTyping(false);
    }
  };

  const handleImageClick = () => {
    setInputs((prevInputs) => [...prevInputs, ""]);
  };

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleDeleteInput = (index: number) => {
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  };

  const handleCreateReading = async () => {
    const formData = new FormData();
    formData.append("description", description);
    if (file) {
      formData.append("pdf_file", file);
    }
    inputs.forEach((url) => {
      formData.append("url[]", url);
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

  const handleSeeReading = () => {
    router.push(`/admin/reading?lectureId=${id}&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setFileName(file.name);
    }
  };

  const fetchData = async () => {
    try {
      if (id !== undefined) {
        setIsLoading(true);
        const response = await getReadings(token, id);
        const { reading } = response;
        setReadingsData(reading);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {readingsData?.length === 0 ? (
        <>
          <button className="text-white bg-[#2FA8FF] p-2 rounded-md text-sm mb-5" onClick={handleSeeReading}>
            ნახე დამხმარე მასალები
          </button>
          <div className="grid grid-cols-6 w-full">
            <div className="flex flex-col gap-3 col-span-5">
              <h1 className="text-gray-600 font-FiraGO font-medium text-base md:text-lg lg:text-xl xl:text-2xl">დამხმარე მასალა</h1>
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

              {file ? (
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col gap2 items-start">
                    <p>ატვირთული ფაილი:</p>
                    <span>{fileName}</span>
                  </div>

                  <button className="text-white bg-[#2FA8FF] p-2 rounded-md text-sm" onClick={() => setFile(null)}>
                    წაშლა
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center gap-[6px] pt-3 pb-[6px] px-4 bg-[#EEE] rounded-lg w-36 cursor-pointer">
                  <input type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => handleFileUpload(e)} />
                  <Image src="/assets/img/admin/AddVideo.png" alt={""} width={25} height={27} />
                  <p className="text-lg text-center text-[#CACACA] font-medium">ატვირთე pdf მასალა</p>
                </label>
              )}
              <div className="flex justify-between max-w-[780px]">
                <div className="flex flex-col gap-2">
                  {inputs.map((url, index) => (
                    <div className="relative w-[220px] flex items-center gap-1" key={index}>
                      <input
                        id={`text-${index}`}
                        ref={(element) => (fileInputRefs.current[index] = element!)}
                        type="url"
                        placeholder="ლინკის ატვირთვა"
                        className="border border-1-[#D1D1D1] outline-none w-44 rounded-lg p-2"
                        value={url}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                      <Image src="/assets/img/admin/AddFile.png" width={16} height={16} alt={"Add Icon"} />
                      <Image src={"/assets/img/admin/closeIcon.png"} width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute top-4 -right-0" onClick={() => handleDeleteInput(index)} />
                    </div>
                  ))}
                  <div>
                    <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full flex mt-[300px] col-span-2">
                <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={handleCreateReading}>
                  შენახვა
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 ">
          <h1 className="text-2xl">დამხმარე მასალა დამატებულია</h1>

          <button className="text-white bg-[#2FA8FF] p-2 rounded-md text-sm mb-5 w-[300px]" onClick={handleSeeReading}>
            ნახე დამხმარე მასალები
          </button>
        </div>
      )}
    </div>
  );
};

export default Reading;
