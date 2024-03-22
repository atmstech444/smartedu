"use client";
import SignInMain from "@/components/signIn/SignInMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const SignInPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <SignInMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default SignInPage;
