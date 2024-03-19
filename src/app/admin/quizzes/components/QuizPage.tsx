import React from "react";
import { Quiz } from "../page";
import { useRouter } from "next/navigation";
import { API_STORAGE } from "@/api/API_PATH";
import SecondLoadingSpinner from "@/components/LoadingSpinner";

interface QuizPageProps {
  quizzes: Quiz[] | null;
  handleDeleteQuiz: () => void;
  swalMessage: string;
  isLoading: any;
  handleDeleteQuizById: any;
}

const QuizPage: React.FC<QuizPageProps> = ({ quizzes, handleDeleteQuiz, swalMessage, isLoading, handleDeleteQuizById }) => {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 justify-start items-center">
        <SecondLoadingSpinner />
        <p>იტვირთება...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center relative cursor-pointer" onClick={() => router.back()}>
        <img src={"/assets/img/admin/go-back-arrow.svg"} alt="go-back" className="w-7 h-7 -ml-20 absolute" />
        <button className="text-black  py-1 px-7 rounded-lg w-[200px]">უკან</button>
      </div>
      {quizzes?.length === 0 || quizzes === undefined ? (
        <div className="flex flex-col gap-3 items-start text-base ">
          <h1 className="text-black font-extrabold">ქვიზი არ არის დამატებული</h1>
          <div className="flex justify-center">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
              დაამატე ქვიზი
            </button>
          </div>
        </div>
      ) : (
        <>
          {quizzes?.map((quiz, index) => (
            <div className="flex  gap-9 justify-between items-center border border-pink-100 p-2 rounded-md" key={quiz.id}>
              <section className="flex flex-col gap-9 justify-between">
                <div className="flex gap-1 items-start text-base text-black font-extrabold">
                  <span>{index + 1}.</span>
                  <p>{quiz.question}</p>
                </div>
                {quiz.url && <img src={`${API_STORAGE}${quiz.url}`} alt="Quiz Image" className="w-32 h-auto" />}

                <div>
                  {quiz.answer.map((answer, answerIndex) => (
                    <div key={answerIndex} className="flex gap-[8px] items-center">
                      <input type="checkbox" checked={Array.isArray(quiz.correct_answer) && quiz.correct_answer.includes(answer)} readOnly />
                      <label>{answer}</label>
                    </div>
                  ))}
                </div>
              </section>
              <button className="text-white bg-red py-1 px-7 rounded-lg" onClick={() => handleDeleteQuizById(quiz.id)}>
                წაშალე
              </button>
            </div>
          ))}
          <div>
            <button className="text-white bg-red py-1 px-7 rounded-lg w-[200px]" onClick={handleDeleteQuiz}>
              წაშალე ქვიზი
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;
