"use client";
import { AdminLogOut } from "@/services/logout";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LogOut = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.authToken;

  const handleLogOut = async () => {
    try {
      const response = await AdminLogOut(token);
      if (response) {
        Cookies.remove("authToken");
        router.push("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mb-20 pl-5">
      <button className="bg-mainBlue  rounded-faqBordeR  text-base mt-2 text-center text-white hover:opacity-75  transition-all ease-in-out  px-4 py-2" onClick={handleLogOut}>
        გამოსვლა
      </button>
    </div>
  );
};

export default LogOut;
