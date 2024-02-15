"use client";
import React, { useState, useEffect } from "react";
import { Quiz } from "../page";
import { useRouter } from "next/navigation";

interface QuizPageProps {
  quizzes: Quiz[] | null;
}

interface CheckedAnswers {
  [quizId: number]: {
    [answerIndex: number]: boolean;
  };
}

const EditQuiz = ({ quizzes }: QuizPageProps) => {
  const router = useRouter();
  const [checkedAnswers, setCheckedAnswers] = useState<CheckedAnswers>({});

  useEffect(() => {
    if (quizzes) {
      const initialCheckedAnswers: CheckedAnswers = {};
      quizzes.forEach((quiz) => {
        initialCheckedAnswers[quiz.id] = {};
        if (Array.isArray(quiz.correct_answer)) {
          quiz.correct_answer.forEach((correctAnswer) => {
            const correctIndex = quiz.answer.findIndex((answer) => answer === correctAnswer);
            if (correctIndex !== -1) {
              initialCheckedAnswers[quiz.id][correctIndex] = true;
            }
          });
        }
      });
      setCheckedAnswers(initialCheckedAnswers);
    }
  }, [quizzes]);

  const handleCheckboxChange = (quizId: number, answerIndex: number) => {
    setCheckedAnswers((prevState) => ({
      ...prevState,
      [quizId]: {
        ...prevState[quizId],
        [answerIndex]: !prevState[quizId]?.[answerIndex],
      },
    }));
  };

  if (!quizzes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {quizzes.length === 0 ? (
        <div className="flex flex-col gap-3 items-start text-base ">
          <h1 className="text-black font-extrabold">ქვიზი არ არის დამატებული</h1>
          <div className="flex justify-center">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
              დაამატე ქვიზი
            </button>
          </div>
        </div>
      ) : (
        quizzes.map((quiz, index) => (
          <div className="flex flex-col gap-9 justify-between" key={quiz.id}>
            <div className="flex gap-1 items-start text-base text-black font-extrabold">
              <span>{index + 1}.</span>
              <input value={quiz.question} className="border border-[#2FA8FF] rounded-md p-1" />
            </div>
            {quiz.url && <img src={`http://192.168.99.238:8000/${quiz.url}`} alt="Quiz Image" className="w-32 h-auto" />}

            <div>
              {quiz.answer.map((answer, answerIndex) => (
                <div key={answerIndex} className="flex gap-[8px] items-baseline">
                  <input type="checkbox" checked={checkedAnswers[quiz.id]?.[answerIndex]} onChange={() => handleCheckboxChange(quiz.id, answerIndex)} />
                  <input value={answer} className="border border-[#2FA8FF] rounded-md p-1 mt-2" />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      {quizzes?.length !== 0 && (
        <div>
          <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]">რედაქტირება</button>
        </div>
      )}
    </div>
  );
};

export default EditQuiz;
