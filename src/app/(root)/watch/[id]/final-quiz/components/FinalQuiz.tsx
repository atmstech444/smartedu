import React from "react";
import { useParams, useRouter } from "next/navigation";

const FinalQuiz = () => {
  const router = useRouter();
  const params = useParams();

  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/final-quiz/start`);
  };
  return (
    <>
      <main className="relative w-full bg-white flex items-center justify-center lg:block">
        <div className="mt-[55px] sm:mt-0 flex gap-3 flex-col p-[24px] w-[90%]   rounded-md">
          <h1 className="text-xl m-0">ქვიზი</h1>
          <p className="text-base	m-0 text-black mt-5">პროგრამირების საწყისები</p>
          <button className={`text-base bg-[#006CFA] w-[200px] h-[35px] text-white rounded-sm`} onClick={navigateToQuiz}>
            შედეგების ნახვა
          </button>
        </div>
      </main>
    </>
  );
};

export default FinalQuiz;
