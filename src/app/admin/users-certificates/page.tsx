import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import UsersCertificates from "./components/UsersCertificates";

const page = () => {
  return (
    <div>
      <Header />

      <div>
        <div className="flex gap-8">
          <Navbar />

          <div className="w-[85%] mx-auto mt-10">
            <UsersCertificates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
