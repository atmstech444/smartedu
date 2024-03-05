"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { Get_Lecture } from "@/services/AllCourses";

interface AnswerState {
  index: number;
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
}

const QuizStart = () => {
  const params = useParams();
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerState[]>([]);
  const [finalQuiz, setFinalQuiz] = useState<QuizesTypes[]>([]);
  const token = useAppSelector((state) => state.user.user?.token);

  const fetchData = async () => {
    try {
      const lecture = await Get_Lecture(params.id, token);
      setFinalQuiz(lecture.final_quiz);
    } catch (error) {
      console.error("Error fetching lecture:", error);
    }
  };
  console.log(finalQuiz);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main className="relative w-full bg-white">
        {/* {isMenuOpened && (
      <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
        <SecondaryNav id={id} />
      </UserMobileMenu>
    )} */}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] w-[100%] rounded-md">
          <div className="flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" />
            <h1 className="text-xl m-0">ქვიზი</h1>
          </div>

          {finalQuiz.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <h1 className="text-black text-base m-0 w-[70%]">{`${index + 1}. ${item.question}`}</h1>
                <p className="text-black font-bold bg-[#CCE2FE] px-2 py-1 rounded-sm">1 ქულა</p>
              </div>
              {item.url && <Image src={process.env.NEXT_PUBLIC_API_STORAGE + item.url} width="200" height="200" alt="back" />}
              <ul className="mt-[25px]">
                {item.is_open ? (
                  <input
                    type="text"
                    className="rounded-md border border-solid border-[#5A5454] p-2 w-full"
                    placeholder="შეიყვანე პასუხი"
                    value={selectedAnswers.find((item) => item.index === index)?.answer[0] || ""}
                    //    onChange={(e) => handleTextChange(index, e.target.value)}
                  />
                ) : (
                  item.answer.map((ans, answerIndex) => (
                    <li key={answerIndex} className="my-2 flex gap-3">
                      <input
                        type="checkbox"
                        id={`answer-${index}-${answerIndex}`}
                        name={`answer-${index}`}
                        className="p-2"
                        checked={selectedAnswers.some((item) => item.index === index && item.answer.includes(ans))}
                        //    onChange={() => handleCheckboxChange(index, ans)}
                      />
                      <label htmlFor={`answer-${index}-${answerIndex}`}>{ans}</label>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}

          {/* {lectureDetail.mideterm_quiz_check_answers?.length === 0 && (
        <button className="text-white bg-[#006CFA] rounded-md py-2 px-2 w-[140px]" onClick={handleSubmit}>
          დადასტურება
        </button>
      )} */}
        </div>
      </main>
    </>
  );
};

export default QuizStart;
