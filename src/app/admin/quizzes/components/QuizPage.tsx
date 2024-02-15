import React from "react";
import { Quiz } from "../page";
import { useRouter } from "next/navigation";

const QuizPage = ({ quizzes }: { quizzes: Quiz[] }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      {quizzes?.length === 0 ? (
        <div className="flex flex-col gap-3 items-start text-base ">
          <h1 className="text-black font-extrabold">ქვიზი არ არის დამატებული</h1>
          <div className="flex justify-center">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
              დაამატე ქვიზი
            </button>
          </div>
        </div>
      ) : (
        quizzes?.map((quiz, index) => (
          <div className="flex flex-col gap-9 justify-between" key={quiz.id}>
            <div className="flex gap-1 items-center text-base text-black font-extrabold">
              <span>{index + 1}.</span>
              <p>{quiz.question}</p>
            </div>
            {quiz.url && <img src={`http://192.168.99.238:8000/${quiz.url}`} alt="Quiz Image" className="w-32 h-auto" />}

            <div>
              {quiz.answer.map((answer, answerIndex) => (
                <div key={answerIndex} className="flex gap-[8px] items-center">
                  <input type="checkbox" checked={Array.isArray(quiz.correct_answer) && quiz.correct_answer.includes(answer)} readOnly />
                  <label>{answer}</label>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QuizPage;
