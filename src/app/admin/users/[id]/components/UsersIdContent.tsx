"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { getUsersById } from "../../services/getUsersById";
import MainContent from "./MainContent";

export interface Course {
  course_category_id: number;
  cover_image: string;
  created_at: string;
  deleted_at: string | null;
  description: string;
  duration: string;
  id: number;
  intro: string;
  is_completed: number;
  language: string;
  lecturer_id: number;
  price: string;
  title: string;
  updated_at: string;
}

export interface Purchase {
  course: Course;
  course_completed: number;
  course_id: number;
  created_at: string;
  deleted_at: string | null;
  external_order_id: string;
  formatted_created_at: string;
  id: number;
  order_id: string;
  order_status: string;
  total_amount: number;
  updated_at: string;
  user_id: number;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  age: string;
  city: string;
  created_at: string;
  deleted_at: string | null;
  education: string;
  email_verified_at: string;
  employment_industry: string;
  employment_position: string;
  employment_status: string;
  faculty: string;
  formatted_created_at: string;
  gender: string;
  is_admin: number;
  phone_number: string;
  updated_at: string;
  purchases: Purchase[];
}

const UsersIdContent = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const cookies = parseCookies();
    if (!cookies.authToken) {
      redirect("/admin");
    }
  }, []);

  const handleGoBack = () => {
    router.push("/admin/users");
  };

  const [user, setUser] = useState<User | null>(null);

  const cookies = parseCookies();
  const token = cookies.authToken;
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[pathArray.length - 1];

    const fetchUser = async () => {
      try {
        const data = await getUsersById(token, id);
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [token]);

  return (
    <div>
      <Header />
      <div>
        <div className="flex gap-8">
          <Navbar />

          <MainContent user={user} handleGoBack={handleGoBack} />
        </div>
      </div>
    </div>
  );
};

export default UsersIdContent;
