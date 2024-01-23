"use client";
import Course from "@/components/Course";
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
  }, []);
  return (
    <main className="w-[85%]">
      <Course />
    </main>
  );
};

export default Page;
