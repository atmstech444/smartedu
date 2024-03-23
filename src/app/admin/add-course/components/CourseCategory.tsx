"use client";
import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { getCategories } from "../services/getCategories";
import { parseCookies } from "nookies";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
import PlusIcon from "@/public/assets/icons/plus.png";
import BlackTrashIcon from "@/public/assets/icons/BlackTrashIcon.svg";
import { deleteCategory, storeCategory } from "@/services/category";

const CourseCategory = ({ onCheckChange }: { onCheckChange: (checkedIndexes: number[]) => void }) => {
  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [addCategoryInput, setAddCategoryInput] = useState<{ title: string; description?: string }[] | []>([]);

  const cookies = parseCookies();
  const token = cookies.authToken;
  const handleExclusiveCheckboxChange = (categoryId: number) => {
    const newCheckedIndexes = [categoryId];

    setCheckedIndexes(newCheckedIndexes);
    onCheckChange(newCheckedIndexes);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories(token);
        setCategories(data.course_categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [token]);

  useEffect(() => {
    if (checkedIndexes.length > 0) {
      onCheckChange(checkedIndexes);
    } else {
      onCheckChange([]);
    }
  }, [checkedIndexes, onCheckChange]);

  const handleAddCategoryForm = () => {
    setAddCategoryInput((prevState) => [...prevState, { title: "" }]);
  };

  const handleCategoryAddChange = (e: any) => {
    const { id, value } = e.target;
    const newCategory = addCategoryInput.map((category, index) => (index.toString() === id ? { ...category, title: value } : category));

    setAddCategoryInput(newCategory);
  };

  const handleNewCategorySubmit = async (e: any, id: number) => {
    e.preventDefault();
    let category = addCategoryInput.find((_category, index) => index === id);
    const response = await storeCategory(category);
    if (response && response.status === 201) {
      const newCategory = response.data.category;
      setCategories((prevState) => [...prevState, newCategory]);
      setAddCategoryInput((prevState) => prevState.filter((_category, index) => index !== id));
    }
  };

  const handleDeleteCategory = async (id: number) => {
    const response = await deleteCategory(id);
    if (response && response.status === 200) {
      setCategories((prevState) => prevState.filter((category) => category.id !== id));
    }
  };

  const deleteNewCategoryInput = (id: number) => {
    setAddCategoryInput((prevState) => prevState.filter((_category, index) => index !== id));
  };

  return (
    <div className="pr-10 pt-4">
      <h1 className="pb-7">მიაკუთვნე კურსი კატეგორიას</h1>
      <div className="flex flex-col gap-7">
        {loading ? (
          <LoadingSpinner />
        ) : (
          categories.map((category, _index) => (
            <div className="flex justify-between" key={category.id}>
              <Checkbox key={category.id} label={category.title} checked={checkedIndexes.includes(category.id)} onChange={() => handleExclusiveCheckboxChange(category.id)} />
              <Image onClick={() => handleDeleteCategory(category.id)} src={BlackTrashIcon} alt="delete category" className="hover:cursor-pointer" />
            </div>
          ))
        )}
      </div>
      {addCategoryInput.length !== 0 &&
        addCategoryInput.map((category, index) => {
          return (
            <form className="mt-2 flex justify-between" onSubmit={(e) => handleNewCategorySubmit(e, index)} key={index}>
              <input type="text" value={category.title} id={index.toString()} onChange={handleCategoryAddChange} className="border border-black" />
              <button type="submit">შენახვა</button>
              <button type="button" onClick={() => deleteNewCategoryInput(index)}>
                <Image src={BlackTrashIcon} alt="delete" />
              </button>
            </form>
          );
        })}
      <div className="flex justify-end mt-2">
        <Image src={PlusIcon} alt="add category" className="hover:cursor-pointer" onClick={handleAddCategoryForm} />
      </div>
    </div>
  );
};

export default CourseCategory;
