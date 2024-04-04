"use client";
import Course from "@/components/Course";
import Navbar from "@/components/Navbar";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useLayoutEffect } from "react";

const Page = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  useLayoutEffect(() => {
    if (!token) {
      redirect("/admin");
    }
  }, [token]);
  const router = useRouter();
  useEffect(() => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      router.replace('/admin/');
    }
  }, [router]);
  return (
    <main className="w-[85%] flex gap-8">
      <Navbar />
      <Course />
    </main>
  );
};

export default Page;
