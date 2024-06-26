"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { parseCookies } from "nookies";
import { addFinalQuiz } from "../../main/[id]/services/addFinalQuiz";
import { useRouter } from "next/navigation";

interface Section {
  id: number;
  question: string;
  answers: string[];
  file?: File;
  fileName?: string;
}

const useQueryParams = () => {
  const [id, setID] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setID(id);
  }, []);

  return id;
};

const FinalQuizAdding = ({ courseId, courseData, lectures }: any) => {
  const router = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number[]>>({});
  const cookies = parseCookies();
  const token = cookies.authToken;
  const [sections, setSections] = useState<Section[]>([{ id: 1, question: "", answers: [] }]);
  const [loading, setLoading] = useState(false);
  const handleAddContent = (id: number) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id
          ? {
              ...section,
              answers: [...section.answers, ""],
            }
          : section
      )
    );
  };

  const handleDeleteContent = (id: number, index: number) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id
          ? {
              ...section,
              answers: section.answers.filter((_, i) => i !== index),
            }
          : section
      )
    );
  };

  const handleAddItem = () => {
    const newId = sections.length + 1;
    setSections((prevSections) => [...prevSections, { id: newId, question: "", answers: [] }]);
  };

  const handleDeleteItem = (id: number) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== id));
  };

  const handleQuestionChange = (id: number, value: string) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, question: value } : section)));
  };

  const handleAnswerChange = (sectionId: number, answerIndex: number, value: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              answers: [...section.answers.slice(0, answerIndex), value, ...section.answers.slice(answerIndex + 1)],
            }
          : section
      )
    );
  };

  const handleFileUpload = (id: number, file: File | undefined) => {
    if (file) {
      const fileName = file.name;
      setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, file, fileName } : section)));
    }
  };

  const handleDeleteFile = (id: number) => {
    setSections((prevSections) => prevSections.map((section) => (section.id === id ? { ...section, file: undefined, fileName: undefined } : section)));
  };

  const handleCheckboxClick = (sectionId: number, answerIndex: number) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const currentSelected = prevSelectedAnswers[sectionId] || [];
      const updatedSelected = currentSelected.includes(answerIndex) ? currentSelected.filter((index) => index !== answerIndex) : [...currentSelected, answerIndex];
      return {
        ...prevSelectedAnswers,
        [sectionId]: updatedSelected,
      };
    });
  };

  const handleCreateQuiz = async () => {
    try {
      setLoading(true);
      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      const formData = new FormData();
      sections.forEach(({ id, question, answers, file }, index) => {
        formData.append(`final_quiz_content[${index}][question]`, question);
        answers.forEach((answer, answerIndex) => {
          formData.append(`final_quiz_content[${index}][answer][${answerIndex}]`, answer);
        });

        const correctAnswers = selectedAnswers[id] || [];
        const correctAnswerValues = correctAnswers.map((answerIndex) => answers[answerIndex]);
        correctAnswerValues.forEach((correctAnswer, answerIndex) => {
          formData.append(`final_quiz_content[${index}][correct_answer][${answerIndex}]`, correctAnswer);
        });

        if (file) {
          formData.append(`final_quiz_content[${index}][image]`, file);
        }
        const isOpenCheckbox = document.getElementById(`isOpen_${id}`) as HTMLInputElement;
        const isOpen = isOpenCheckbox.checked;
        formData.append(`final_quiz_content[${index}][is_open]`, isOpen ? "1" : "0");

        const scoreInput = document.getElementById(`score_${id}`) as HTMLInputElement;
        const score = parseInt(scoreInput.value);
        formData.append(`final_quiz_content[${index}][score]`, score.toString());
      });

      const response = await addFinalQuiz(token, formData, courseId);
      if (response.message === "Final quiz create successfully") {
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("Failed to create quiz");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    let isValid = true;

    sections.forEach(({ id, question, answers }) => {
      if (question.trim() === "") {
        Swal.fire({
          icon: "warning",
          title: "გთხოვთ შეიყვანოთ შეკითხვა ყველა განყოფილებისთვის.",
          showConfirmButton: false,
          timer: 3000,
        });
        isValid = false;
      }

      if (answers.filter((answer) => answer.trim() !== "").length === 0) {
        Swal.fire({
          icon: "warning",
          title: `გთხოვთ, ჩაწეროთ მინიმუმ ერთი პასუხი კითხვაზე ${id}.`,
          showConfirmButton: false,
          timer: 3000,
        });
        isValid = false;
      }

      if (!(selectedAnswers[id]?.length > 0)) {
        Swal.fire({
          icon: "warning",
          title: `გთხოვთ, მონიშნოთ მინიმუმ ერთი სწორი პასუხი კითხვაზე ${id}.`,
          showConfirmButton: false,
          timer: 3000,
        });
        isValid = false;
      }

      const scoreInput = document.getElementById(`score_${id}`) as HTMLInputElement;
      const score = parseInt(scoreInput.value);
      if (isNaN(score) || score <= 0) {
        Swal.fire({
          icon: "warning",
          title: `გთხოვთ, შეიყვანოთ ქულა შეკითხვისთვის ${id}.`,
          showConfirmButton: false,
          timer: 3000,
        });
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSeeFinalQuiz = (courseId: number) => {
    router.push(`/admin/final-quiz?&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}&courseId=${courseId}`);
  };
  const handleEditFinalQuiz = (courseId: number) => {
    router.push(`/admin/edit-final-quiz?&lectures=${encodeURIComponent(JSON.stringify(lectures))}&courseData=${encodeURIComponent(JSON.stringify(courseData))}&courseId=${courseId}`);
  };

  return (
    <main className="w-full flex flex-col">
      <div className="flex justify-start items-center relative cursor-pointer" onClick={() => router.back()}>
        <img src={"/assets/img/admin/go-back-arrow.svg"} alt="go-back" className="w-7 h-7 absolute" />
        <button className="text-black ml-10 rounded-lg">უკან</button>
      </div>

      <div className="flex gap-2 mt-10">
        <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => handleSeeFinalQuiz(courseId)}>
          ნახე ქვიზი
        </button>
        <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px]" onClick={() => handleEditFinalQuiz(courseId)}>
          რედაქტირება
        </button>
      </div>

      {sections.map(({ id, question, answers, file, fileName }, sectionIndex) => (
        <div key={id} className="border border-1-[#D1D1D1] p-4 rounded-lg w-[970px] h-auto flex flex-col gap-4 mt-5">
          <div className="flex gap-2">
            <section className="flex gap-4 items-center">
              <div className="relative">
                <input
                  type="text"
                  name="question"
                  id="question"
                  className="w-[200px] h-[42px] resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
                  placeholder="ჩაწერე კითხვა"
                  value={question}
                  onChange={(e) => handleQuestionChange(id, e.target.value)}
                />
                <Image src="/assets/img/admin/pencil.png" className="absolute top-4 right-2" alt={""} width={12} height={12} />
              </div>

              <div className=" flex items-center gap-1">
                <div>
                  {file ? (
                    <div className="flex items-center gap-2">
                      <img src={URL.createObjectURL(file)} alt={fileName} className="h-8 w-auto" />
                      <p>{fileName}</p>
                      <button onClick={() => handleDeleteFile(id)} className="text-white bg-[#FF3333] py-1 px-2 rounded-lg w-[100px] text-sm">
                        წაშალე ფაილი
                      </button>
                    </div>
                  ) : (
                    <label htmlFor={`file_${id}`} className="bg-[#2FA8FF] text-white py-[13px] px-2 rounded-lg cursor-pointer">
                      ატვირთე ფაილი
                      <input id={`file_${id}`} type="file" className="hidden" onChange={(e) => handleFileUpload(id, e.target.files?.[0])} />
                    </label>
                  )}
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" id={`isOpen_${id}`} />
                  <label htmlFor="">მონიშნე როგორც ღია კითხვა</label>
                </div>

                <div className="flex gap-2 ml-5 items-center">
                  <input type="text" id={`score_${id}`} className="border border-black rounded-md p-1 outline-none" />
                  <label htmlFor="">ქულა</label>
                </div>
              </div>
            </section>
          </div>

          {answers.map((answer, index) => (
            <div className="flex gap-2 items-center relative" key={`answer_${id}_${index}`}>
              <label className="flex gap-1 cursor-pointer">
                <input type="checkbox" name={`answer_${id}`} checked={selectedAnswers[id]?.includes(index)} onChange={() => handleCheckboxClick(id, index)} />
              </label>
              <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" value={answer} onChange={(e) => handleAnswerChange(id, index, e.target.value)} />
              <Image src="/assets/img/admin/pencil.png" className="absolute left-40" alt={""} width={12} height={12} />
              <button onClick={() => handleDeleteContent(id, index)} className="text-white bg-[#FF3333] py-1 px-3 rounded-lg w-[100px] text-center">
                წაშლა
              </button>
            </div>
          ))}

          <div>
            <button onClick={() => handleAddContent(id)} className="text-white bg-[#2FA8FF] py-1 px-1 rounded-lg w-[200px] text-center">
              პასუხის დამატება
            </button>
          </div>

          {sectionIndex !== 0 && (
            <button onClick={() => handleDeleteItem(id)} className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg w-[200px] self-end">
              წაშლა
            </button>
          )}
        </div>
      ))}

      <div className="w-5 h-5 ml-4 mt-4" onClick={handleAddItem}>
        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer w-full" />
      </div>

      <div className="self-end mr-28 mb-6 ">
        <div className="w-full flex col-span-2">
          {loading ? (
            "იტვირთება..."
          ) : (
            <button className="text-white bg-[#2FA8FF] py-1 px-7 rounded-lg" onClick={handleCreateQuiz}>
              შენახვა
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default FinalQuizAdding;
