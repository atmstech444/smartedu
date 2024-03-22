"use client";
import SignUpMain from "@/components/sign-up/SignUpMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const SignUpPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <SignUpMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default SignUpPage;
