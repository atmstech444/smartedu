"use client";
import React, { useLayoutEffect } from "react";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import search from "@/public/assets/icons/search-normal.svg";
import UserCard from "./components/UserCard";
import { redirect, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { getAllUsers } from "./services/getAllUsers";
import download from "@/public/assets/icons/Received.svg";
import date from "@/public/assets/icons/date.svg";
import { exportToExcel } from "./components/downloadDataAsExcel";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  surname: string;
  formatted_created_at: string;
}
const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const cookies = parseCookies();
  const token = cookies.authToken;
  const router = useRouter();
  useLayoutEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, []);

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const handleStartDateInputClick = () => {
    if (startDateRef.current) {
      startDateRef.current.showPicker();
    }
  };

  const handleEndDateInputClick = () => {
    if (endDateRef.current) {
      endDateRef.current.showPicker();
    }
  };

  const handleUserClick = (userId: number) => {
    router.push(`/users/${userId}`);
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const data = await getAllUsers(token);
        const filteredUsers = data.user.filter((user: any) => {
          const formattedUserDate = formatDateForInput(user.formatted_created_at);
          const isUserDateInRange = startDate && endDate && formattedUserDate ? isDateInRange(formattedUserDate, startDate, endDate) : true;

          const isNameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
          const isSurnameMatch = user.surname.toLowerCase().includes(searchTerm.toLowerCase());
          const isEmailMatch = user.email.toLowerCase().includes(searchTerm.toLowerCase());
          const isDateMatch = user.formatted_created_at.toLowerCase().includes(searchTerm.toLowerCase());

          return (isNameMatch || isSurnameMatch || isEmailMatch || isDateMatch) && isUserDateInRange;
        });

        setUsers(filteredUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, [token, startDate, endDate, searchTerm]);

  const formatDateForInput = (serverDate: string): string | null => {
    const [day, month, year] = serverDate.split(".");
    if (day && month && year) {
      return `${year}-${month}-${day}`;
    }
    return null;
  };

  const isDateInRange = (userDate: string, startDate: string, endDate: string): boolean => {
    const date = new Date(userDate);
    const start = new Date(startDate);
    const end = new Date(endDate);

    return date >= start && date <= end;
  };

  const filtered = users.filter((user) => {
    const isNameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isSurnameMatch = user.surname.toLowerCase().includes(searchTerm.toLowerCase());
    const isEmailMatch = user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const isDateMatch = user.formatted_created_at.toLowerCase().includes(searchTerm.toLowerCase());

    const formattedUserDate = formatDateForInput(user.formatted_created_at);

    const isUserDateInRange = startDate && endDate && formattedUserDate ? isDateInRange(formattedUserDate, startDate, endDate) : true;

    return (isNameMatch || isSurnameMatch || isEmailMatch || isDateMatch) && isUserDateInRange;
  });

  const handleExportClick = () => {
    exportToExcel(filtered);
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex gap-8">
          <Navbar />
          <div className="flex flex-col gap-3 mt-6 w-[85%]">
            <h1 className="text-black text-xl font-normal my-4">მომხმარებლები</h1>
            <section className="flex items-start gap-4 w-full">
              <div className="relative w-[40%]">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="ძიება" className="bg-lightGray p-3 w-full rounded-faqBordeR" />
                <Image src={search} alt="search" className="absolute right-2 top-[25%]" />
              </div>
              <div className="relative">
                <div className="bg-lightGray flex items-center justify-center gap-3 w-[140px] xl:w-40 p-3 rounded-faqBordeR cursor-pointer" onClick={handleStartDateInputClick}>
                  <Image src={date} alt="date" />
                  <p>{startDate || "dd/mm/yyyy"}</p>
                </div>
                <input
                  type="date"
                  ref={startDateRef}
                  className="bg-lightGray p-3 rounded-faqBordeR"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    top: "0",
                  }}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <span className="text-base absolute  top-[-45%]">საიდან</span>
              </div>
              <div className="relative">
                <div className="bg-lightGray flex items-center justify-center  gap-3 w-[140px] xl:w-40 p-3 rounded-faqBordeR cursor-pointer" onClick={handleEndDateInputClick}>
                  <Image src={date} alt="date" />
                  <p>{endDate || "dd/mm/yyyy"}</p>
                </div>
                <input
                  ref={endDateRef}
                  type="date"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    top: "0",
                  }}
                  className="bg-lightGray p-3 rounded-faqBordeR"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <span className="text-base absolute  top-[-45%]">სადამდე</span>
              </div>

              <div className="w-40 text-white bg-blue flex items-center gap-2 justify-center py-3 rounded-faqBordeR cursor-pointer" onClick={handleExportClick}>
                <p>ჩამოტვირთვა</p>
                <Image src={download} alt="date" />
              </div>
            </section>
            <main className="w-[100%] xl:w-[90%] mt-16">
              <div className="grid grid-cols-5 gap-4 font-semibold mb-4">
                <div className="font-semibold  text-xl text-blue">სახელი</div>
                <div className="font-semibold  text-xl text-blue">გვარი</div>
                <div className="col-span-2 font-semibold  text-xl text-blue">ელ.ფოსტა</div>
                <div className="font-semibold  text-xl text-blue">თარიღი</div>
              </div>
              {filtered?.map((user) => (
                <UserCard key={user.id} user={user} onClick={() => handleUserClick(user.id)} />
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
