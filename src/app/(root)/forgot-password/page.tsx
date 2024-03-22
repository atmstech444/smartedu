"use client";
import ForgotPasswordMain from "@/components/forgot-password/ForgotPasswordMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <ForgotPasswordMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
