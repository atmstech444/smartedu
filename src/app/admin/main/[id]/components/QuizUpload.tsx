import React, { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import AddFinalQuiz from "./AddFinalQuiz";
import RegularQuiz from "./RegularQuiz";

const useQueryParams = () => {
  const [id, setID] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setID(id);
  }, []);

  return id;
};

const QuizUpload = ({ lectures, courseData }: any) => {
  const router = useRouter();
  const id = useQueryParams();

  const [isFinalQuiz, setIsfinalQuiz] = useState(false);

  const toggleFinalQuiz = () => {
    setIsfinalQuiz((prevState) => !prevState);
  };
  const handleSeeQuiz = () => {
    router.push(`/admin/quizzes?lectureId=${id}&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };
  const handleEditQuiz = () => {
    router.push(`/admin/edit-quiz?lectureId=${id}&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };

  const handleSeeFinalQuiz = () => {
    router.push(`/admin/final-quiz?lectureId=${id}&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}`);
  };

  return (
    <main className="w-full flex flex-col">
      {isFinalQuiz ? (
        <div className="flex gap-2">
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => handleSeeFinalQuiz()}>
            ნახე საბოლოო ქვიზი
          </button>
          <button className="text-white bg-[#2FA8FF] py-1 text-center rounded-lg w-[270px]" onClick={() => handleEditQuiz()}>
            რედაქტირება(საბოლოო ქვიზი)
          </button>
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => toggleFinalQuiz()}>
            დაამატე ჩვეულებრივი ქვიზი
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => handleSeeQuiz()}>
            ნახე ჩვეულებრივი ქვიზი
          </button>
          <button className="text-white bg-[#2FA8FF] py-1 text-center rounded-lg w-[270px]" onClick={() => handleEditQuiz()}>
            რედაქტირება(ჩვეულებერივი ქვიზი)
          </button>
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => toggleFinalQuiz()}>
            დაამატე საბოლოო ქვიზი
          </button>
        </div>
      )}

      {isFinalQuiz ? (
        <div>
          <AddFinalQuiz />
        </div>
      ) : (
        <>
          <RegularQuiz />
        </>
      )}
    </main>
  );
};

export default QuizUpload;
