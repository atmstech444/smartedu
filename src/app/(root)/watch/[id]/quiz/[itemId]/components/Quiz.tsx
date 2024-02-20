"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../../components/SecondaryNav";
import UserMobileMenu from "../../../../components/UserMobileMenu";
import { LectureTypes } from "../../../course/Lecture";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  lectureDetail?: LectureTypes | undefined;
  id: any;
}

interface AnswerState {
  [questionIndex: number]: number;
}
const Quiz = ({ id, lectureDetail }: Props) => {
  const params = useParams();
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerState>({});

  const handleCheckboxChange = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }));
  };

  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
  const quiz = lectureDetail?.quizzes;

  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/quiz/${lectureDetail?.id}`);
  };

  return (
    <>
      <main className="relative w-full bg-white">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} lectureDetail={lectureDetail} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] md:w-[80%] lg:w-[90%]   rounded-md">
          <div className=" flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuiz} />
            <h1 className="text-xl m-0">ქვიზი</h1>
          </div>

          {quiz &&
            quiz.map((item, questionIndex) => (
              <div key={questionIndex}>
                <h1 className="text-black text-base m-0">{`${questionIndex + 1}. ${item.question}`}</h1>
                <ul className=" mt-[25px]">
                  {item.answer.map((answer, answerIndex) => (
                    <li key={answerIndex} className=" my-2 flex gap-3">
                      <input
                        type="checkbox"
                        id={`answer-${questionIndex}-${answerIndex}`}
                        name={`answer-${questionIndex}`}
                        className="p-2"
                        checked={selectedAnswers[questionIndex] === answerIndex}
                        onChange={() => handleCheckboxChange(questionIndex, answerIndex)}
                      />
                      <label htmlFor={`answer-${questionIndex}-${answerIndex}`}>{answer}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default Quiz;
