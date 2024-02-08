import React from "react";
import Image from "next/image";
const QuizUpload = () => {
  return (
    <main>
      <div className="border border-1-[#D1D1D1] p-4 rounded-lg w-[970px] h-auto flex flex-col gap-4">
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

        <div className="flex gap-2 items-center relative">
          <label className="flex gap-1">
            <input type="radio" name="answer" id="answer" />
          </label>
          <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" />
          <Image src="/assets/img/admin/pencil.png" className="absolute left-40" alt={""} width={12} height={12} />
        </div>

        <div>
          <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" />
        </div>
      </div>

      <div className="w-5 h-5 ml-4 mt-4">
        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer w-full" />
      </div>
    </main>
  );
};

export default QuizUpload;
