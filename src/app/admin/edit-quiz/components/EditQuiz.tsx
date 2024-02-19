"use client";
import React, { useState, useEffect } from "react";
import { Quiz } from "../page";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { editQuiz } from "../services/editQuiz";

interface QuizPageProps {
  quizzes: Quiz[] | null;
  onDeleteAnswer: (quizId: number, answerIndex: number) => void;
  onAddAnswer: (quizId: number, newAnswer: string) => void;
  setQuizData: any;
}

interface CheckedAnswers {
  [quizId: number]: {
    [answerIndex: number]: boolean;
  };
}

interface QuizData {
  question: string;
  answer: string[];
  correct_answer: string[];
}

const EditQuiz = ({ quizzes, onDeleteAnswer, onAddAnswer, setQuizData }: QuizPageProps) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const router = useRouter();
  const [checkedAnswers, setCheckedAnswers] = useState<CheckedAnswers>({});
  const [editingQuizId, setEditingQuizId] = useState<number | null>(null);
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [editedQuestion, setEditedQuestion] = useState<string>("");
  const [editedAnswers, setEditedAnswers] = useState<string[]>([]);
  const [_, setIsCancelled] = useState(false);
  const [files, setFiles] = useState<{ [quizId: number]: File | null }>({});

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

  const toggleEditing = (quizId: number) => {
    setEditingQuizId(quizId === editingQuizId ? null : quizId);
  };

  const handleSaveQuiz = async (quizId: number) => {
    try {
      const currentQuiz = quizzes?.find((quiz) => quiz.id === quizId);

      const updatedQuizData: QuizData = {
        question: currentQuiz?.question || "",
        answer: currentQuiz?.answer || [],
        correct_answer: currentQuiz?.correct_answer || [],
      };

      if (editedQuestion !== "") {
        updatedQuizData.question = editedQuestion;
      }

      if (editedAnswers.length > 0) {
        updatedQuizData.answer = editedAnswers;
      }

      const checkedIndices = Object.entries(checkedAnswers[quizId] || {})
        .filter(([index, isChecked]) => isChecked)
        .map(([index]) => parseInt(index, 10));

      if (checkedIndices.length === 0) {
        updatedQuizData.correct_answer = currentQuiz?.correct_answer || [];
      } else {
        updatedQuizData.correct_answer = checkedIndices.map((index) => updatedQuizData.answer[index]);
      }

      const response = await editQuiz(token, quizId, updatedQuizData);
      if ((response.message = "successfully update quiz")) {
        setQuizData((prevQuizData: any[]) => {
          if (!prevQuizData) return null;
          return prevQuizData.map((quiz) => {
            if (quiz.id === quizId) {
              return {
                ...quiz,
                question: updatedQuizData.question,
                answer: updatedQuizData.answer,
                correct_answer: updatedQuizData.correct_answer,
              };
            }
            return quiz;
          });
        });
      }

      setEditedQuestion("");
      setEditedAnswers([]);
      setCheckedAnswers({});
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  const handleAddAnswer = (quizId: number) => {
    if (!quizzes) return;
    onAddAnswer(quizId, newAnswer);
    setNewAnswer("");
    const newAnswerIndex = quizzes.find((quiz) => quiz.id === quizId)?.answer.length || 0;
    setCheckedAnswers((prevState) => ({
      ...prevState,
      [quizId]: {
        ...prevState[quizId],
        [newAnswerIndex]: false,
      },
    }));
    setEditedAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  const handleDeleteAnswer = (quizId: number, answerIndex: number) => {
    onDeleteAnswer(quizId, answerIndex);
    setEditedAnswers((prevAnswers) => prevAnswers.filter((_, index) => index !== answerIndex));
  };

  const handleFileUpload = (id: number, file: File | undefined) => {
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [id]: file,
      }));
    }
  };

  const handleDeleteFile = (id: number) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [id]: null,
    }));
  };

  if (quizzes === null || quizzes === undefined) {
    return <div>ქვიზი ვერ მოიძებნა...</div>;
  }

  return (
    <div className="flex flex-col gap-16">
      {quizzes.length === 0 ? (
        <div className="flex flex-col gap-3 items-start text-base w-full">
          <h1 className="text-black font-extrabold">ქვიზი არ არის დამატებული</h1>
          <div className="flex justify-center">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
              დაამატე ქვიზი
            </button>
          </div>
        </div>
      ) : (
        quizzes.map((quiz, index) => (
          <div className="flex flex-col gap-3 justify-between items-start" key={quiz.id}>
            <div className="flex gap-1 items-baseline text-base text-black font-extrabold w-full">
              <span>{index + 1}.</span>
              {editingQuizId === quiz.id ? (
                <input type="text" defaultValue={quiz.question} onChange={(e) => setEditedQuestion(e.target.value)} className="rounded-md p-1 w-full outline-none border border-[#2FA8FF]" />
              ) : (
                <p className="rounded-md p-1 w-full outline-none">{quiz.question}</p>
              )}
              <span onClick={() => toggleEditing(quiz.id)} className="cursor-pointer">
                {editingQuizId === quiz.id ? (
                  <div className="flex flex-col gap-2">
                    <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={() => handleSaveQuiz(quiz.id)}>
                      შენახვა
                    </button>
                    <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={() => setIsCancelled(true)}>
                      გაუქმება
                    </button>
                  </div>
                ) : (
                  <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg ">რედაქტირება</button>
                )}
              </span>
            </div>
            {quiz.url && <img src={`http://192.168.99.238:8000/${quiz.url}`} alt="Quiz Image" className="w-56 h-auto" />}

            <div className=" w-full">
              {editingQuizId === quiz.id && (
                <div>
                  {files[quiz.id] ? (
                    <div className="flex items-center gap-2">
                      {files[quiz.id] && (
                        <>
                          <img src={URL.createObjectURL(files[quiz.id] as Blob)} alt="Uploaded File" className="h-8 w-auto" />
                          <p>{files[quiz.id]?.name}</p>
                        </>
                      )}

                      <button onClick={() => handleDeleteFile(quiz.id)} className="text-white bg-[#FF3333] py-3 px-2 rounded-lg w-[130px] text-sm">
                        წაშალე ფაილი
                      </button>
                    </div>
                  ) : (
                    <div className="mb-7 ml-2">
                      <label htmlFor={`file_${quiz.id}`} className="bg-[#2FA8FF] text-white py-[13px] px-2 rounded-lg cursor-pointer">
                        ატვირთე ფაილი
                        <input id={`file_${quiz.id}`} type="file" className="hidden" onChange={(e) => handleFileUpload(quiz.id, e.target.files?.[0])} />
                      </label>
                    </div>
                  )}
                </div>
              )}
              {quiz.answer.map((answer, answerIndex) => (
                <div key={answerIndex} className="flex gap-[8px] items-baseline">
                  <input type="checkbox" checked={checkedAnswers[quiz.id]?.[answerIndex]} onChange={() => handleCheckboxChange(quiz.id, answerIndex)} />
                  {editingQuizId === quiz.id ? (
                    <input
                      type="text"
                      defaultValue={answer}
                      className="rounded-md p-1 mt-2 outline-none border border-[#2FA8FF] "
                      onChange={(e) => {
                        const newAnswers = [...editedAnswers];
                        newAnswers[answerIndex] = e.target.value;
                        setEditedAnswers(newAnswers);
                      }}
                    />
                  ) : (
                    <p className=" rounded-md p-1 mt-2 outline-none">{answer}</p>
                  )}
                  {editingQuizId === quiz.id && (
                    <>
                      <button className="text-[#2FA8FF] bg-white rounded-md p-1" onClick={() => handleDeleteAnswer(quiz.id, answerIndex)}>
                        Delete
                      </button>
                      <button className="text-[#2FA8FF] bg-white rounded-md p-1" onClick={() => handleAddAnswer(quiz.id)}>
                        +
                      </button>
                    </>
                  )}
                </div>
              ))}
              {editingQuizId === quiz.id && quiz.answer.length === 0 && (
                <button className="text-[#2FA8FF] bg-white rounded-md p-1" onClick={() => handleAddAnswer(quiz.id)}>
                  +
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EditQuiz;
