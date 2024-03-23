"use client";
import Course from "@/components/Course";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import { useLayoutEffect } from "react";

const Page = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  useLayoutEffect(() => {
    if (!token) {
      redirect("/admin");
    }
  }, [token]);
  return (
    <main className="w-[85%] flex gap-8">
      <Navbar />
      <Course />
    </main>
  );
};

export default Page;
