"use client";
import SignInMain from "@/components/signIn/SignInMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const showed = useRef<boolean>(false);
  useEffect(() => {
    if (showed.current) return;
    toast.success("თქვენი ექაუნთი ვერიფიცირებულია", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    showed.current = true;
  }, []);

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
