"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { Get_Lecture, POST_FINAL_QUIZ } from "@/services/AllCourses";

interface AnswerState {
  questionIndex: number;
  answer: any;
}
interface QuizesTypes {
  answer: string[];
  id: number;
  question: string;
  score: number;
  correct_answer: string[];
  url: string | null;
  is_open: number;
  course_id: number;
}

const QuizStart = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerState[]>([]);
  const [finalQuiz, setFinalQuiz] = useState<QuizesTypes[]>([]);
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

  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/final-quiz/`);
  };

  const fetchData = async () => {
    try {
      const lecture = await Get_Lecture(params.id, token);
      setFinalQuiz(lecture.final_quiz);
    } catch (error) {
      console.error("Error fetching lecture:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleQuizSubmit = async (data: any) => {
    const currentTime = new Date();
    const currentTimeString = currentTime.toLocaleTimeString("en-US", { hour12: false });
    const requestData = {
      final_quiz_check_answers: data,
      time: currentTimeString,
    };

    try {
      const result = await POST_FINAL_QUIZ(token, requestData);
      router.push(`/watch/${params.id}/final-quiz/`);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const handleSubmit = () => {
    if (finalQuiz.length > 0 && selectedAnswers.length > 0) {
      const results = finalQuiz.map((question, index) => {
        const correctAnswers = question.correct_answer.map((answer) => answer.toLowerCase().trim());
        const selectedAnswersForQuestion = selectedAnswers.find((item) => item.questionIndex === index)?.answer || [];
        const selectedAnswersLowerCaseTrimmed = selectedAnswersForQuestion.map((answer: any) => answer.toLowerCase().trim());
        const isCorrect = correctAnswers.length === selectedAnswersLowerCaseTrimmed.length && correctAnswers.every((correctAnswer) => selectedAnswersLowerCaseTrimmed.includes(correctAnswer));
        return {
          course_final_quiz_id: question.id,
          correct_answer: isCorrect ? 1 : 0,
          course_id: question.course_id,
        };
      });
      handleQuizSubmit(results);
    }
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
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] w-[100%] rounded-md">
          <div className="flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuiz} />
            <h1 className="text-xl m-0">ქვიზი</h1>
          </div>

          {finalQuiz.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <h1 className="text-black text-base m-0 w-[70%]">{`${index + 1}. ${item.question}`}</h1>
                <p className="text-black font-bold bg-[#CCE2FE] px-2 py-1 rounded-sm">{item.score + " ქულა"}</p>
              </div>
              {item.url && <Image src={process.env.NEXT_PUBLIC_API_STORAGE + item.url} onClick={() => openModal(item.url)} className="cursor-pointer" width={200} height={200} alt="back" />}
              {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
                  <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md flex justify-center items-center">
                    <div className="relative w-[70%] lg:w-[30%] mt-[20%] lg:mt-[50px]">
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
                    value={selectedAnswers.find((item) => item.questionIndex === index)?.answer[0] || ""}
                    onChange={(e) => handleTextChange(index, e.target.value)}
                  />
                ) : (
                  item.answer.map((ans, answerIndex) => (
                    <li key={answerIndex} className="my-2 flex gap-3">
                      <input
                        type="checkbox"
                        id={`answer-${index}-${answerIndex}`}
                        name={`answer-${index}`}
                        className="p-2"
                        checked={selectedAnswers.some((item) => item.questionIndex === index && item.answer.includes(ans))}
                        onChange={() => handleCheckboxChange(index, ans)}
                      />

                      <label htmlFor={`answer-${index}-${answerIndex}`}>{ans}</label>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}

          <button className="text-white bg-[#006CFA] rounded-md py-2 px-2 w-[140px]" onClick={handleSubmit}>
            დადასტურება
          </button>
        </div>
      </main>
    </>
  );
};

export default QuizStart;
