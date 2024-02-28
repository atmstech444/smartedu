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
import { POST_QUIZ } from "@/services/AllCourses";

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
  const token = useAppSelector((state) => state.user.user?.token);

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

  const handleQuizSubmit = async (data: any) => {
    const requestData = {
      midterm_quiz_check_answers: data,
    };
    try {
      const result = await POST_QUIZ(token, requestData);
      router.push(`/watch/${params.id}/quiz/${lectureDetail.id}`);
      console.log("Quiz submission successful!", result);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const handleSubmit = () => {
    if (quiz.length > 0 && selectedAnswers.length > 0) {
      const results = quiz.map((question, index) => {
        const correctAnswers = question.correct_answer;
        const selectedAnswersForQuestion = selectedAnswers.find((item) => item.questionIndex === index)?.answer || [];
        const isCorrect = correctAnswers.length === selectedAnswersForQuestion.length && correctAnswers.every((correctAnswer) => selectedAnswersForQuestion.includes(correctAnswer));
        return {
          course_lecture_quiz_id: question.id,
          correct_answer: isCorrect ? 1 : 0,
          course_lecture_id: question.lecture_id,
        };
      });
      handleQuizSubmit(results);
    }
  };
  // console.log(lectureDetail.mideterm_quiz_check_answers);
  return (
    <>
      <main className="relative w-full bg-white">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] w-[100%] rounded-md">
          <div className="flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuiz} />
            <h1 className="text-xl m-0">ქვიზი</h1>
          </div>

          {lectureDetail.mideterm_quiz_check_answers?.length > 0
            ? lectureDetail.mideterm_quiz_check_answers?.map((ans: any, index: number) => (
                <div key={index}>
                  <li className="my-2 gap-3">
                    <p>{`${index + 1}. ${ans.course_lecture_quizzes.question}`}</p>
                    {ans.correct_answer == 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                          fill="#1F8354"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                          fill="#D30001"
                        />
                      </svg>
                    )}
                  </li>
                </div>
              ))
            : quiz &&
              quiz.map((item, questionIndex) => (
                <div key={questionIndex}>
                  <div className="flex justify-between">
                    <h1 className="text-black text-base m-0 w-[70%]">{`${questionIndex + 1}. ${item.question}`}</h1>
                    <p className="text-black font-bold bg-[#CCE2FE] px-2 py-1 rounded-sm">1 ქულა</p>
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
          {lectureDetail.mideterm_quiz_check_answers?.length === 0 && (
            <button className="text-white bg-[#006CFA] rounded-md py-2 px-2 w-[140px]" onClick={handleSubmit}>
              დადასტურება
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Quiz;
