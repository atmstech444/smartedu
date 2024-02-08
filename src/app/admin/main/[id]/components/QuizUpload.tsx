import React, { useState } from "react";
import Image from "next/image";

interface Section {
  id: number;
  content?: JSX.Element[];
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
        <label className="flex gap-1">
          <input type="radio" name={`answer_${id}`} id={`answer_${id}`} />
        </label>
        <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" />
        <Image src="/assets/img/admin/pencil.png" className="absolute left-40" alt={""} width={12} height={12} />

        <button onClick={() => handleDeleteContent(id, newContent)} className="text-white bg-[#FF3333] py-1 px-3 rounded-lg w-[100px] text-center">
          წაშლა
        </button>
      </div>
    );

    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, content: section.content ? [...section.content, newContent] : [newContent] } : section)));
  };

  const handleDeleteContent = (id: number, contentItem: JSX.Element) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, content: section.content?.filter((item) => item !== contentItem) } : section)));
  };

  return (
    <main>
      {sections.map(({ id, content }, sectionIndex) => (
        <div key={id} className="border border-1-[#D1D1D1] p-4 rounded-lg w-[970px] h-auto flex flex-col gap-4 mt-5">
          <div className="flex gap-2">
            <section className="relative">
              <input
                type="text"
                name="question"
                id="question"
                className="w-[200px] h-[42px] resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
                placeholder="ჩაწერე კითხვა"
              />
              <Image src="/assets/img/admin/pencil.png" className="absolute top-4 right-2" alt={""} width={12} height={12} />
            </section>

            <div className="relative w-[220px] flex items-center gap-1">
              <input id="type" placeholder="ლინკის ატვირთვა" className="border border-1-[#D1D1D1] outline-none w-44 rounded-lg p-2" onChange={() => {}} />
              <Image src="/assets/img/admin/AddFile.png" width={16} height={16} alt={"Add Icon"} />
            </div>
          </div>

          {content && content.map((item, contentIndex) => <div key={contentIndex}>{item}</div>)}

          <div>
            <button onClick={() => handleAddContent(id)} className="text-white bg-[#2FA8FF] py-1 px-3 rounded-lg w-[100px] text-center">
              დამატება
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
