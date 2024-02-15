import React from "react";
import { Quiz } from "../page";

const QuizPage = ({ quizzes }: { quizzes: Quiz[] }) => {
  return (
    <div className="flex flex-col gap-8">
      {quizzes?.map((quiz, index) => (
        <div className="flex flex-col gap-9 justify-between" key={quiz.id}>
          <div className="flex gap-1 items-center text-base text-black font-extrabold">
            <span>{index + 1}.</span>
            <p>{quiz.question}</p>
          </div>
          {quiz.url && <img src={quiz.url} alt="Quiz Image" className="w-32 h-auto" />}
          <div>
            {quiz.answer.map((answer, answerIndex) => (
              <div key={answerIndex} className="flex gap-[8px] items-center">
                <input type="checkbox" checked={Array.isArray(quiz.correct_answer) && quiz.correct_answer.includes(answer)} readOnly />
                <label>{answer}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
