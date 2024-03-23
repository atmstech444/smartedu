import { useState } from "react";
import { Syllabus } from "../[id]/page";
import Image from "next/image";
import DownArrow from "@/public/assets/icons/DownArrow.svg";
import TrashIcon from "@/public/assets/icons/TrashIcon.svg";
import PenIcon from "@/public/assets/icons/PenIcon.svg";
import BlackPenIcon from "@/public/assets/icons/BlackPenIcon.svg";
import BlackTrashIcon from "@/public/assets/icons/BlackTrashIcon.svg";
import PlusIcon from "@/public/assets/icons/plus.png";
import { addNewDescription, changeDescription, deleteDescription, deleteLecture } from "@/services/syllabus";
import Swal from "sweetalert2";

interface DescriptionCountObject {
  description: string;
  id: number;
}

const Lecture = ({ id, lecture, removeSyllabus }: { id: number; lecture: Syllabus; removeSyllabus: (id: any) => void }) => {
  const [showDescriptions, setShowDescriptions] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [formData, setFormData] = useState({
    title: lecture.title,
    course_id: lecture.course_id,
    descriptions: lecture.descriptions,
  });
  const [descriptionCount, setDescriptionCount] = useState<DescriptionCountObject[] | []>([]);
  const [editDesc, setEditDesc] = useState<number | null>(null);

  const handleExpandButton = () => {
    setShowDescriptions((prevState) => !prevState);
  };

  const handleDeleteLecture = async () => {
    const response = await deleteLecture(id);
    if (response && response.status === 200) {
      removeSyllabus(id);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleTitleChange = (e: any) => {
    setFormData((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const submitTitleChange = async () => {
    setEditTitle(false);
  };

  const handleDescriptionChange = (e: any) => {
    const { id, value } = e.target;
    const newDescriptions = formData.descriptions.map((desc) => (desc.id.toString() === id ? { ...desc, description: value } : desc));
    setFormData((prevState) => ({
      ...prevState,
      descriptions: newDescriptions,
    }));
  };

  const submitDescChange = async (id: number) => {
    const description = formData.descriptions.find((desc) => desc.id === id)?.description;
    await changeDescription(id, description as string);
    setEditDesc(null);
  };

  const handleDeleteDescription = async (id: number) => {
    const response = await deleteDescription(id);
    if (response && response.status === 200) {
      setFormData((prevState) => ({
        ...prevState,
        descriptions: prevState.descriptions.filter((desc) => desc.id !== id),
      }));
    } else {
      Swal.fire({
        icon: "warning",
        title: "Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const addDescription = () => {
    setDescriptionCount((prevState) => [...prevState, { description: "", id: descriptionCount.length }]);
  };

  const handleNewDescriptionChange = (e: any) => {
    const { id, value } = e.target;
    const newDescription = descriptionCount.map((desc) => (desc.id.toString() === id ? { ...desc, description: value } : desc));
    setDescriptionCount(newDescription);
  };

  const handleNewDescriptionSubmit = async (e: any) => {
    e.preventDefault();

    const dataArr = descriptionCount.map((desc) => desc.description);
    const filteredData = dataArr.filter((desc) => desc !== "");
    const response = await addNewDescription(id, filteredData);
    if (response && response.status === 201 && "data" in response) {
      setFormData((prevState) => ({
        ...prevState,
        descriptions: [...prevState.descriptions, ...response.data.descriptions],
      }));
    } else {
      Swal.fire({
        icon: "warning",
        title: "Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setDescriptionCount([]);
  };

  const deleteNewDescription = (id: any) => {
    const newDescriptionCount = descriptionCount.filter((description) => description.id !== id);
    setDescriptionCount(newDescriptionCount);
  };

  return (
    <div className="w-[802px] mt-3  border border-[#bfbfbf] rounded-[12px]">
      <div className="bg-[#5AC1F4] rounded-[12px]  text-xl py-3 pl-8 flex   justify-between text-white">
        <input type="text" value={formData.title} onChange={handleTitleChange} className="bg-transparent outline-none text-xl text-white placeholder:text-white w-[90%]" readOnly={!editTitle} />
        <div className="flex pr-5 space-x-6 items-center">
          {editTitle ? (
            <button className="text-xs" onClick={submitTitleChange}>
              save
            </button>
          ) : (
            <Image src={PenIcon} alt="pen icon" onClick={() => setEditTitle(true)} className="hover:cursor-pointer" />
          )}
          <Image src={TrashIcon} alt="trash icon" className="hover:cursor-pointer" onClick={handleDeleteLecture} />
          <Image src={DownArrow} alt="down arrow" className={`hover:cursor-pointer  ${showDescriptions ? "rotate-180" : "rotate-0"}`} onClick={handleExpandButton} />
        </div>
      </div>
      {showDescriptions && (
        <div className="px-8 pb-4">
          {formData.descriptions.map((item) => {
            return (
              <div key={item.id} className="border-b border-[#bfbfbf] flex items-center justify-between last:border-b-0">
                <input
                  // type="text"
                  id={item.id.toString()}
                  value={item.description}
                  className="bg-transparent w-[90%] outline-none py-5"
                  onChange={handleDescriptionChange}
                  readOnly={editDesc !== item.id}
                />
                <div className="flex pl-3  space-x-3">
                  {editDesc === item.id ? (
                    <button className="text-xs" onClick={() => submitDescChange(item.id)}>
                      save
                    </button>
                  ) : (
                    <Image src={BlackPenIcon} alt="pen" className="hover:cursor-pointer h-[16px] w-[16px]" onClick={() => setEditDesc(item.id)} />
                  )}

                  <Image src={BlackTrashIcon} alt="trash" className="hover:cursor-pointer" onClick={() => handleDeleteDescription(item.id)} />
                </div>
              </div>
            );
          })}
          <form onSubmit={handleNewDescriptionSubmit} className="flex flex-col w-full">
            {descriptionCount.map((desc) => {
              return (
                <div className="w-full flex items-center" key={desc.id}>
                  <input
                    key={desc.id}
                    id={desc.id.toString()}
                    onChange={handleNewDescriptionChange}
                    value={desc.description}
                    type="text"
                    placeholder="დაამატე აღწერა"
                    className="w-full pl-6 border border-solid border-[#c6c6c6] rounded-mediumBorder outline-none mt-3 py-1 mx-auto"
                  />
                  <div className="flex  px-2 items-center">
                    <Image src={BlackTrashIcon} alt="trash" className="hover:cursor-pointer" onClick={() => deleteNewDescription(desc.id)} />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end items-center space-x-3">
              {descriptionCount.length !== 0 && (
                <button type="submit" className="pt-2">
                  save
                </button>
              )}

              <div className="flex justify-end mt-2">
                <Image src={PlusIcon} alt="add description button" className="hover:cursor-pointer" onClick={addDescription} />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Lecture;
