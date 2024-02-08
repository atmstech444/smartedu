"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addQuiz } from "../services/addQuiz";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";

interface Section {
  id: number;
  content: { id: string; element: JSX.Element }[];
  file?: File;
  fileName?: string;
}

const useQueryParams = () => {
  const [id, setID] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setID(id);
  }, []);

  return id;
};

const QuizUpload = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const id = useQueryParams();
  const [sections, setSections] = useState<Section[]>([{ id: 1, content: [] }]);

  const handleAddItem = () => {
    const newId = sections.length + 1;
    setSections((prevSections) => [...prevSections, { id: newId, content: [] }]);
  };

  const handleDeleteItem = (id: number) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== id));
  };

  const handleAddContent = (id: number) => {
    const contentId = `content_${id}_${sections[id - 1].content.length + 1}`;

    const newContent = (
      <div className="flex gap-2 items-center relative" key={contentId}>
        <label className="flex gap-1 cursor-pointer">
          <input type="radio" name={`answer_${id}`} id={`answer_${id}`} />
        </label>
        <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" />
        <Image src="/assets/img/admin/pencil.png" className="absolute left-40" alt={""} width={12} height={12} />

        <button onClick={() => handleDeleteContent(id, contentId)} className="text-white bg-[#FF3333] py-1 px-3 rounded-lg w-[100px] text-center">
          წაშლა
        </button>
      </div>
    );

    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, content: [...section.content, { id: contentId, element: newContent }] } : section)));
  };

  const handleDeleteContent = (id: number, contentId: string) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, content: section.content.filter((item) => item.id !== contentId) } : section)));
  };

  const handleFileUpload = (id: number, file: File | undefined) => {
    if (file) {
      const fileName = file.name;
      setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, file, fileName } : section)));
    }
  };

  const handleDeleteFile = (id: number) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, file: undefined, fileName: undefined } : section)));
  };

  const handleCreateQuiz = async () => {
    const formData = new FormData();

    try {
      const response = await addQuiz(token, formData, id);
      console.log(response);
      if (response.message === "quiz add successfully") {
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
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

  return (
    <main className="w-full flex flex-col">
      {sections.map(({ id, content, file, fileName }, sectionIndex) => (
        <div key={id} className="border border-1-[#D1D1D1] p-4 rounded-lg w-[970px] h-auto flex flex-col gap-4 mt-5">
          <div className="flex gap-2">
            <section className="flex gap-4 items-center">
              <div className="relative">
                <input
                  type="text"
                  name="question"
                  id="question"
                  className="w-[200px] h-[42px] resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
                  placeholder="ჩაწერე კითხვა"
                />
                <Image src="/assets/img/admin/pencil.png" className="absolute top-4 right-2" alt={""} width={12} height={12} />
              </div>

              <div className=" flex items-center gap-1">
                <div>
                  {file ? (
                    <div className="flex items-center gap-2">
                      <img src={URL.createObjectURL(file)} alt={fileName} className="h-8 w-auto" />
                      <p>{fileName}</p>
                      <button onClick={() => handleDeleteFile(id)} className="text-white bg-[#FF3333] py-1 px-2 rounded-lg w-[100px] text-sm">
                        წაშალე ფაილი
                      </button>
                    </div>
                  ) : (
                    <label htmlFor={`file_${id}`} className="bg-[#2FA8FF] text-white py-[13px] px-2 rounded-lg cursor-pointer">
                      ატვირთე ფაილი
                      <input id={`file_${id}`} type="file" className="hidden" onChange={(e) => handleFileUpload(id, e.target.files?.[0])} />
                    </label>
                  )}
                </div>
              </div>
            </section>
          </div>

          {content && content.map((item) => <div key={item.id}>{item.element}</div>)}

          <div>
            <button onClick={() => handleAddContent(id)} className="text-white bg-[#2FA8FF] py-1 px-1 rounded-lg w-[200px] text-center">
              პასუხის დამატება
            </button>
          </div>

          {sectionIndex !== 0 && (
            <button onClick={() => handleDeleteItem(id)} className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px] self-end">
              წაშლა
            </button>
          )}
        </div>
      ))}

      <div className="w-5 h-5 ml-4 mt-4" onClick={handleAddItem}>
        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer w-full" />
      </div>


      <div className="self-end mr-28 mb-6 ">
        <div className="w-full flex col-span-2">
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={handleCreateQuiz}>
            შენახვა
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuizUpload;
