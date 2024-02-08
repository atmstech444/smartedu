import React, { useState } from "react";
import Image from "next/image";

interface Section {
  id: number;
  content?: JSX.Element[];
  fileName?: string;
}

const QuizUpload = () => {
  const [sections, setSections] = useState<Section[]>([{ id: 1 }]);

  const handleAddItem = () => {
    const newId = sections.length + 1;
    setSections((prevSections) => [...prevSections, { id: newId }]);
  };

  const handleDeleteItem = (id: number) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== id));
  };

  const handleAddContent = (id: number) => {
    const newContent = (
      <div className="flex gap-2 items-center relative" key={sections[id - 1].content?.length ?? 0}>
        <label className="flex gap-1 cursor-pointer">
          <input type="radio" name={`answer_${id}`} id={`answer_${id}`} />
        </label>
        <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" />
        <Image src="/assets/img/admin/pencil.png" className="absolute left-40" alt={""} width={12} height={12} />

        <button onClick={() => handleDeleteContent(id)} className="text-white bg-[#FF3333] py-1 px-3 rounded-lg w-[100px] text-center">
          წაშლა
        </button>
      </div>
    );

    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, content: section.content ? [...section.content, newContent] : [newContent] } : section)));
  };

  const handleDeleteContent = (id: number) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, content: undefined } : section)));
  };

  const handleFileUpload = (id: number, file: File | undefined) => {
    if (file) {
      const fileName = file.name;
      setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, fileName } : section)));
    }
  };

  const handleDeleteFile = (id: number) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, fileName: undefined } : section)));
  };

  return (
    <main>
      {sections.map(({ id, content, fileName }, sectionIndex) => (
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
                  {fileName ? (
                    <div className="flex items-center gap-2">
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

          {content && content.map((item, contentIndex) => <div key={contentIndex}>{item}</div>)}

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
    </main>
  );
};

export default QuizUpload;
