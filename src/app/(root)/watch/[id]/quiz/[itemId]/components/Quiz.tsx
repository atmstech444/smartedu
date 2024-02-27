"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../../components/SecondaryNav";
import UserMobileMenu from "../../../../components/UserMobileMenu";
import { LectureTypes } from "../../../course/Lecture";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

interface Props {
  id: any;
}

interface AnswerState {
  questionIndex: number;
  answer: any;
}
const Quiz = ({ id }: Props) => {
  const params = useParams();
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerState[]>([]);

  const handleCheckboxChange = (questionIndex: number, answer: any) => {
    setSelectedAnswers((prevAnswers) => {
      const index = prevAnswers.findIndex((item) => item.questionIndex === questionIndex);
      if (index !== -1) {
        const updatedAnswers = [...prevAnswers[index].answer];
        const answerIndex = updatedAnswers.indexOf(answer);
        if (answerIndex !== -1) {
          updatedAnswers.splice(answerIndex, 1);
        } else {
          updatedAnswers.push(answer);
        }

        return [...prevAnswers.slice(0, index), { questionIndex, answer: updatedAnswers }, ...prevAnswers.slice(index + 1)];
      } else {
        return [...prevAnswers, { questionIndex, answer: [answer] }];
      }
    });
  };

  const lectureDetail = useAppSelector((state) => state.lecture.lecture);

  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
  const quiz = lectureDetail?.quizzes;

  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/quiz/${lectureDetail?.id}`);
  };

  const handleSubmit = () => {
    if (quiz.length > 0 && selectedAnswers.length > 0) {
      const results = quiz.map((question, index) => {
        const correctAnswers = question.correct_answer;
        const selectedAnswersForQuestion = selectedAnswers.find((item) => item.questionIndex === index)?.answer || [];
        const isCorrect = correctAnswers.length === selectedAnswersForQuestion.length && correctAnswers.every((correctAnswer) => selectedAnswersForQuestion.includes(correctAnswer));
        return {
          questionIndex: index,
          isCorrect,
        };
      });

      console.log("Results:", results);
    }
  };

  // console.log(quiz);
  // console.log(selectedAnswers);
  return (
    <>
      <main className="relative w-full bg-white">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] w-[100%]   rounded-md">
          <div className=" flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuiz} />
            <h1 className="text-xl m-0">ქვიზი</h1>
          </div>

          {quiz &&
            quiz.map((item, questionIndex) => (
              <div key={questionIndex}>
                <div className=" flex justify-between">
                  <h1 className="text-black text-base m-0 w-[70%]">{`${questionIndex + 1}. ${item.question}`}</h1>
                  <p className=" text-black font-bold bg-[#CCE2FE] px-2 py-1 rounded-sm">1 ქულა</p>
                </div>
                <ul className="mt-[25px]">
                  {item.answer.map((ans, answerIndex) => (
                    <li key={answerIndex} className="my-2 flex gap-3">
                      <input
                        type="checkbox"
                        id={`answer-${questionIndex}-${answerIndex}`}
                        name={`answer-${questionIndex}`}
                        className="p-2"
                        checked={selectedAnswers.some((item) => item.questionIndex === questionIndex && item.answer.includes(ans))}
                        onChange={() => handleCheckboxChange(questionIndex, ans)}
                      />
                      <label htmlFor={`answer-${questionIndex}-${answerIndex}`}>{ans}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <button className=" text-white bg-[#006CFA] rounded-md py-2 px-2 w-[140px]" onClick={handleSubmit}>
            დადასტურება
          </button>
        </div>
      </main>
    </>
  );
};

export default Quiz;
