"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../../public/assets/icons/arrowLeft.svg";
import SecondaryNav from "../../../../components/SecondaryNav";
import UserMobileMenu from "../../../../components/UserMobileMenu";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { POST_QUIZ } from "@/services/AllCourses";

interface AnswerState {
  questionIndex: number;
  answer: any;
}
const Quiz = () => {
  const params = useParams();
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerState[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");
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
  const handleTextChange = (questionIndex: number, answer: any) => {
    setSelectedAnswers((prevAnswers) => {
      const index = prevAnswers.findIndex((item) => item.questionIndex === questionIndex);

      if (index !== -1) {
        return [...prevAnswers.slice(0, index), { questionIndex, answer: [answer] }, ...prevAnswers.slice(index + 1)];
      } else {
        return [...prevAnswers, { questionIndex, answer: [answer] }];
      }
    });
  };

  const openModal = (url: any) => {
    setModalImageUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImageUrl("");
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="relative w-full bg-white">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav />
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
                    <div className="flex justify-between">
                      <h1 className="text-black text-base m-0 w-[70%]">{`${index + 1}. ${ans.course_lecture_quizzes.question}`}</h1>
                      <p className="text-black font-bold bg-[#CCE2FE] px-2 py-1 rounded-sm h-[37px]"> {ans.correct_answer ? "1/1 ქულა" : "0/1 ქულა"} </p>
                    </div>
                    {ans.course_lecture_quizzes.url && (
                      <Image src={process.env.NEXT_PUBLIC_API_STORAGE + ans.course_lecture_quizzes.url} onClick={() => openModal(ans.course_lecture_quizzes.url)} className="cursor-pointer" width={200} height={200} alt="back" />
                    )}
                    {isModalOpen && (
                      <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                        <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md flex justify-center items-center">
                          <div className="relative w-[70%]">
                            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            <img src={process.env.NEXT_PUBLIC_API_STORAGE + modalImageUrl} alt="Image" className="w-full" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className=" bg-[#F5FDF6] rounded-sm h-10 flex items-center pl-3 mt-3">
                      {ans.correct_answer ? (
                        <div className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                              fill="#1F8354"
                            />
                          </svg>
                          <p className=" text-[#1F8354] m-0">სწორია</p>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                              fill="#D30001"
                            />
                          </svg>
                          <p className=" text-[#D30001] m-0">არასწორია</p>
                        </div>
                      )}
                    </div>
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
                  {item.url && <Image src={process.env.NEXT_PUBLIC_API_STORAGE + item.url} onClick={() => openModal(item.url)} className="cursor-pointer" width={200} height={200} alt="back" />}
                  {isModalOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                      <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md flex justify-center items-center">
                        <div className="relative w-[70%]">
                          <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <img src={process.env.NEXT_PUBLIC_API_STORAGE + modalImageUrl} alt="Image" className="w-full" />
                        </div>
                      </div>
                    </div>
                  )}
                  <ul className="mt-[25px]">
                    {item.is_open ? (
                      <input
                        type="text"
                        className="rounded-md border border-solid border-[#5A5454] p-2 w-full"
                        placeholder="შეიყვანე პასუხი"
                        value={selectedAnswers.find((item) => item.questionIndex === questionIndex)?.answer[0] || ""}
                        onChange={(e) => handleTextChange(questionIndex, e.target.value)}
                      />
                    ) : (
                      item.answer.map((ans, answerIndex) => (
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
                      ))
                    )}
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
