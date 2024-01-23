import Image from "next/image";
import DeleteIcon from "@/public/assets/icons/DeleteIcon.svg";
import PlusIcon from "@/public/assets/icons/plus.png";
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react";
import { syllabusData } from "../[id]/types";

const SyllabusForm = ({
  id,
  setFormCount,
  formCount,
}: {
  id: number;
  setFormCount: Dispatch<SetStateAction<[] | syllabusData[]>>;
  formCount: [] | syllabusData[];
}) => {
  const handleTitle: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFormCount((prevState) => {
      return [
        ...prevState.slice(0, id),
        { title: value, descriptions: prevState[id].descriptions },
        ...prevState.slice(id + 1),
      ];
    });
  };

  const handleAddDescription = () => {
    setFormCount((prevState) => {
      const newDescription = {
        ...prevState[id].descriptions,
        [Object.keys(prevState[id].descriptions).length]: "",
      };
      return [
        ...prevState.slice(0, id),
        { title: prevState[id].title, descriptions: newDescription },
        ...prevState.slice(id + 1),
      ];
    });
  };

  const handleDescriptionChange = (property: number, value: string) => {
    setFormCount((prevState) => {
      const updatedDescription = {
        ...prevState[id].descriptions,
        [property]: value,
      };
      return [
        ...prevState.slice(0, id),
        { title: prevState[id].title, descriptions: updatedDescription },
        ...prevState.slice(id + 1),
      ];
    });
  };

  const removeSyllabusForm = () => {
    setFormCount((prevState) =>
      prevState.filter((form, index) => index !== id)
    );
  };

  return (
    <div className="w-[801px] min-h-[138px] border border-solid border-[#BFBFBF] rounded-[12px] mt-4">
      <div className="bg-[#5AC1F4] rounded-[12px] py-3 pl-8 flex justify-between">
        <input
          className="bg-transparent outline-none text-xl w-[90%] text-white placeholder:text-white"
          type="text"
          name="title"
          value={formCount[id].title}
          onChange={handleTitle}
          placeholder="დაამატე კურსის თემა..."
        />
        <Image
          onClick={removeSyllabusForm}
          src={DeleteIcon}
          alt="delete icon"
          className="mr-3 hover:cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        {Object.entries(formCount[id].descriptions).map(([property, value]) => (
          <input
            key={property}
            type="text"
            placeholder="დაამატე აღწერა"
            value={value}
            onChange={(e) =>
              handleDescriptionChange(Number(property), e.target.value)
            }
            className="w-[774px] pl-6 border border-slid border-[#c6c6c6] rounded-mediumBorder outline-none mt-3 py-1 mx-auto"
          />
        ))}
        <div className="flex justify-end">
          <button
            type="button"
            className="w-6 h-6 mr-2"
            onClick={handleAddDescription}
          >
            <Image src={PlusIcon} alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyllabusForm;
