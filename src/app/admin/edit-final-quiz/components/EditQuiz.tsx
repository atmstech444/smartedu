"use client";
import React, { useState, useEffect } from "react";
import { Quiz } from "../page";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { editQuiz } from "../services/editQuiz";
import { boolean } from "yup";
import { API_STORAGE } from "@/api/API_PATH";
import SecondLoadingSpinner from "@/components/LoadingSpinner";
import Swal from "sweetalert2";

interface QuizPageProps {
  quizzes: Quiz[] | null;
  onDeleteAnswer: (quizId: number, answerIndex: number) => void;
  onAddAnswer: (quizId: number, newAnswer: string) => void;
  setQuizData: any;
  isLoading: any;
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
  url?: any;
  _method: any;
  score: any;
}

const EditQuiz = ({ quizzes, onDeleteAnswer, onAddAnswer, setQuizData, isLoading }: QuizPageProps) => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const router = useRouter();
  const [checkedAnswers, setCheckedAnswers] = useState<CheckedAnswers>({});
  const [editingQuizId, setEditingQuizId] = useState<number | null>(null);
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [editedQuestion, setEditedQuestion] = useState<string>("");
  const [editedAnswers, setEditedAnswers] = useState<{ [quizId: number]: string[] }>({});
  const [isCancel, setIsCancelled] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ [quizId: number]: File | null }>({});
  const [showImage, setShowImage] = useState<{ [quizId: number]: boolean }>({});
  const [editedScores, setEditedScores] = useState<{ [quizId: number]: string }>({});

  useEffect(() => {
    if (quizzes) {
      const initialCheckedAnswers: CheckedAnswers = {};
      const initialEditedAnswers: { [quizId: number]: string[] } = {};
      const initialShowImage: { [quizId: number]: boolean } = {};
      quizzes.forEach((quiz) => {
        initialCheckedAnswers[quiz.id] = {};
        initialEditedAnswers[quiz.id] = quiz.answer;
        initialShowImage[quiz.id] = true;
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
      setEditedAnswers(initialEditedAnswers);
      setShowImage(initialShowImage);
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

  const handleScoreChange = (quizId: number, value: string) => {
    setEditedScores((prevScores) => ({
      ...prevScores,
      [quizId]: value,
    }));
  };

  const handleSaveQuiz = async (quizId: number) => {
    try {
      const currentQuiz = quizzes?.find((quiz) => quiz.id === quizId);

      const checkedIndices = Object.entries(checkedAnswers[quizId] || {})
        .filter(([index, isChecked]) => isChecked)
        .map(([index]) => parseInt(index, 10));

      const newAnswerIndex = editedAnswers[quizId].length - 1;
      if (checkedAnswers[quizId]?.[newAnswerIndex]) {
        checkedIndices.push(newAnswerIndex);
      }

      const oldScore = currentQuiz?.score;
      const newScoreInput = document.getElementById(`score_${quizId}`) as HTMLInputElement;
      const newScore = newScoreInput.value.trim();
      const updatedScore = newScore === "" ? oldScore : parseInt(newScore);

      const updatedQuizData: QuizData = {
        question: currentQuiz?.question || "",
        answer: editedAnswers[quizId].slice(0, currentQuiz?.answer.length || 0),
        correct_answer: checkedIndices.map((index) => currentQuiz?.answer[index] || ""),
        url: uploadedFiles[quizId] === null ? "" : uploadedFiles[quizId],
        score: updatedScore,
        _method: "put",
      };

      if (uploadedFiles[quizId] !== null && uploadedFiles[quizId] !== undefined) {
      }

      const response = await editQuiz(token, quizId, updatedQuizData);
      if (response.message === "successfully update final quiz") {
        setQuizData((prevQuizData: any[]) => {
          if (!prevQuizData) return null;
          return prevQuizData.map((quiz) => {
            if (quiz.id === quizId) {
              return {
                ...quiz,
                question: updatedQuizData.question,
                answer: updatedQuizData.answer,
                correct_answer: updatedQuizData.correct_answer,
                url: response.final_quiz.url,
                score: updatedScore,
              };
            }
            return quiz;
          });
        });

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Quiz updated successfully!",
          confirmButtonColor: "#2FA8FF",
          confirmButtonText: "OK",
        });
      }

      setEditedQuestion("");
      setEditedAnswers({});
      setCheckedAnswers({});
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  const handleAddAnswer = (quizId: number) => {
    if (!quizzes) return;
    const newAnswers = [...editedAnswers[quizId], newAnswer];
    setEditedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizId]: newAnswers,
    }));
    onAddAnswer(quizId, newAnswer);
    setNewAnswer("");
    const newAnswerIndex = newAnswers.length - 1;
    setCheckedAnswers((prevState) => ({
      ...prevState,
      [quizId]: {
        ...prevState[quizId],
        [newAnswerIndex]: false,
      },
    }));
  };

  const handleDeleteAnswer = (quizId: number, answerIndex: number) => {
    onDeleteAnswer(quizId, answerIndex);
    setEditedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizId]: prevAnswers[quizId].filter((_, index) => index !== answerIndex),
    }));
  };

  const handleFileUpload = (id: number, file: File | undefined) => {
    if (file) {
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [id]: file,
      }));
    }
  };

  const handleFileDelete = (id: number) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles };
      delete updatedFiles[id];
      return updatedFiles;
    });
  };

  const handleHideImage = (quizId: number) => {
    setShowImage((prevState) => ({
      ...prevState,
      [quizId]: false,
    }));
    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [quizId]: null,
    }));
  };

  const handleCancelClick = (quizId: number) => {
    setIsCancelled(true);
    setShowImage((prevState) => ({
      ...prevState,
      [quizId]: true,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 justify-start items-center">
        <SecondLoadingSpinner />
        <p>იტვირთება...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-start items-center relative cursor-pointer" onClick={() => router.back()}>
        <img src={"/assets/img/admin/go-back-arrow.svg"} alt="go-back" className="w-7 h-7 absolute" />
        <button className="text-black ml-10 rounded-lg">უკან</button>
      </div>
      {quizzes?.length === 0 ? (
        <div className="flex flex-col gap-3 items-start text-base w-full">
          <h1 className="text-black font-extrabold">ქვიზი არ არის დამატებული</h1>
          <div className="flex justify-center">
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => router.back()}>
              დაამატე ქვიზი
            </button>
          </div>
        </div>
      ) : (
        quizzes?.map((quiz, index) => (
          <div className="flex flex-col gap-3 justify-between items-start" key={quiz.id}>
            <div className="flex gap-1 items-baseline text-base text-black font-extrabold w-full">
              <span>{index + 1}.</span>
              {editingQuizId === quiz.id ? (
                <input type="text" defaultValue={quiz.question} onChange={(e) => setEditedQuestion(e.target.value)} className="rounded-md p-1 w-full outline-none border border-[#2FA8FF]" />
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="rounded-md p-1 w-full outline-none">{quiz.question}</p>
                  <p>
                    <span className="text-base text-black font-extrabold">ქულა: </span>
                    {quiz.score}
                  </p>
                </div>
              )}
              <span onClick={() => toggleEditing(quiz.id)} className="cursor-pointer">
                {editingQuizId === quiz.id ? (
                  <div className="flex flex-col gap-2">
                    <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={() => handleSaveQuiz(quiz.id)}>
                      შენახვა
                    </button>
                    <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={() => handleCancelClick(quiz.id)}>
                      გაუქმება
                    </button>
                  </div>
                ) : (
                  <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg ">რედაქტირება</button>
                )}
              </span>
            </div>
            {quiz.url === null || showImage[quiz.id] === false ? "" : <img src={`${API_STORAGE}${quiz.url}`} alt="Quiz Image" className="w-56 h-auto" />}
            {editingQuizId === quiz.id && (
              <>
                {showImage && quiz.url && (
                  <div className="flex gap-10 items-center">
                    <button className="text-white bg-[#FF3333] py-[13px] px-2 rounded-lg cursor-pointer w-[149px]" onClick={() => handleHideImage(quiz.id)}>
                      წაშალე ფოტო
                    </button>
                  </div>
                )}
              </>
            )}

            {editingQuizId === quiz.id && (
              <>
                {uploadedFiles[quiz.id] ? (
                  <div className="flex flex-col items-start gap-2">
                    <img src={URL.createObjectURL(uploadedFiles[quiz.id] as Blob)} alt={uploadedFiles[quiz.id]?.name} className="h-8 w-auto" />
                    <p>{uploadedFiles[quiz.id]?.name}</p>
                    <button onClick={() => handleFileDelete(quiz.id)} className="text-white bg-[#FF3333] py-1 px-2 rounded-lg w-[100px] text-sm">
                      წაშალე ფაილი
                    </button>

                    <div className="flex gap-2 items-center">
                      <p className="text-base text-black font-extrabold">ქულა</p>
                      <input type="text" value={editedScores[quiz.id] || quiz.score} id={`score_${quiz.id}`} className="border border-1-black p-1 rounded-md" onChange={(e) => handleScoreChange(quiz.id, e.target.value)} />
                    </div>
                  </div>
                ) : (
                  <>
                    <label htmlFor={`file_${quiz.id}`} className="bg-[#2FA8FF] text-white py-[13px] px-2 rounded-lg cursor-pointer">
                      ატვირთე ფაილი
                      <input id={`file_${quiz.id}`} type="file" className="hidden" onChange={(e) => handleFileUpload(quiz.id, e.target.files?.[0])} />
                    </label>

                    <div className="flex gap-2 items-center">
                      <p className="text-base text-black font-extrabold">ქულა</p>
                      <input type="text" value={editedScores[quiz.id] || quiz.score} id={`score_${quiz.id}`} className="border border-1-black p-1 rounded-md" onChange={(e) => handleScoreChange(quiz.id, e.target.value)} />
                    </div>
                  </>
                )}
                <div className="flex flex-col gap-2"></div>
              </>
            )}

            <div className=" w-full">
              {quiz.answer.map((answer, answerIndex) => (
                <div key={answerIndex} className="flex gap-[8px] items-baseline">
                  <input type="checkbox" checked={checkedAnswers[quiz.id]?.[answerIndex]} onChange={() => handleCheckboxChange(quiz.id, answerIndex)} />
                  {editingQuizId === quiz.id ? (
                    <input
                      type="text"
                      defaultValue={answer}
                      className="rounded-md p-1 mt-2 outline-none border border-[#2FA8FF] "
                      onChange={(e) => {
                        const newAnswers = { ...editedAnswers };
                        newAnswers[quiz.id][answerIndex] = e.target.value;
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
