import React, { useState } from "react";
import Image from "next/image";
const QuizUpload = () => {
  const [isTypingInput, setIsTypingInput] = useState(false);
  const [inputs, setInputs] = useState<{ key: number; element: JSX.Element }[]>([]);
  const [isTypingInAnswerInput, setIsTypingAnswerInput] = useState(false);
  const [anotherQuizInputs, setAnotherQuizInputs] = useState<{ key: number; element: JSX.Element }[]>([]);

  const handleTypingInput = () => {
    setIsTypingInput(true);
  };

  const handleBlurInput = () => {
    if (isTypingInput) {
      setIsTypingInput(false);
    }
  };

  const handleTypingAnswerInput = () => {
    setIsTypingAnswerInput(true);
  };

  const handleBlurAnswerInput = () => {
    if (isTypingInAnswerInput) {
      setIsTypingAnswerInput(false);
    }
  };

  const handleImageClick = () => {
    const newInputKey = inputs.length + 1;

    const handleDeleteInput = () => {
      setInputs((prevInputs) => prevInputs.filter((input) => input.key !== newInputKey));
    };
    const newInputElement = (
      <div className="flex gap-1 relative w-52" key={newInputKey}>
        <label className="flex gap-1">
          <input type="radio" name="rad" />
        </label>
        <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" />

        <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] left-[155px]" alt={""} width={12} height={12} />
        <Image src={"/assets/img/admin/closeIcon.png"} width={10} height={10} alt="delete icon" className="hover:cursor-pointer absolute top-4 -right-0" onClick={handleDeleteInput} />
      </div>
    );

    setInputs((prevInputs) => [...prevInputs, { key: newInputKey, element: newInputElement }]);
  };

  const handleAddAnotherQuizUpload = () => {
    const newInputKey = anotherQuizInputs.length + 1;

    const handleDeleteInput = () => {
      setAnotherQuizInputs((prevInputs) => prevInputs.filter((input) => input.key !== newInputKey));
    };

    const newQuizuploadElement = (
      <div className="w-48 relative flex flex-col gap-3">
        <input
          type="text"
          placeholder="ჩაწერე კითხვა"
          className="h-auto resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
          onFocus={handleTypingInput}
          onBlur={handleBlurInput}
        />
        {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-5" alt={""} width={12} height={12} />}

        <div className="border border-1-[#D1D1D1] p-4 rounded-lg w-[970px] h-auto flex flex-col gap-4">
          <div className="flex gap-1 relative">
            <label className="flex gap-1">
              <input type="radio" name="rad" />
            </label>
            <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" onFocus={handleTypingAnswerInput} onBlur={handleBlurAnswerInput} />

            {!isTypingInAnswerInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-[770px]" alt={""} width={12} height={12} />}
          </div>
          {inputs.map((input) => input.element)}
          <div>
            <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
          </div>
        </div>
      </div>
    );
    setAnotherQuizInputs((prevInputs) => [...prevInputs, { key: newInputKey, element: newQuizuploadElement }]);
  };

  return (
    <>
      <div>
        <div className="w-48 relative flex flex-col gap-3">
          <input
            type="text"
            placeholder="ჩაწერე კითხვა"
            className="h-auto resize-none rounded-lg pl-3 py-1 border border-1-[#D1D1D1] outline-none bg-transparent placeholder-[#000000] placeholder-opacity-60"
            onFocus={handleTypingInput}
            onBlur={handleBlurInput}
          />
          {!isTypingInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-5" alt={""} width={12} height={12} />}

          <div className="border border-1-[#D1D1D1] p-4 rounded-lg w-[970px] h-auto flex flex-col gap-4">
            <div className="flex gap-1 relative">
              <label className="flex gap-1">
                <input type="radio" name="rad" />
              </label>
              <input type="text" className="border border-1-[#D1D1D1] p-1 rounded-lg w-40 outline-none" placeholder="ჩაწერე პასუხი" onFocus={handleTypingAnswerInput} onBlur={handleBlurAnswerInput} />

              {!isTypingInAnswerInput && <Image src="/assets/img/admin/pencil.png" className="absolute top-[10px] right-[770px]" alt={""} width={12} height={12} />}
            </div>
            {inputs.map((input) => input.element)}
            <div>
              <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleImageClick} />
            </div>
          </div>
        </div>
      </div>
      {anotherQuizInputs.map((input) => input.element)}
      <div>
        <Image src="/assets/img/admin/plusicon.png" alt={""} width={20} height={20} className="cursor-pointer" onClick={handleAddAnotherQuizUpload} />
      </div>
    </>
  );
};

export default QuizUpload;
