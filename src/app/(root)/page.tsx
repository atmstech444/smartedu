"use client";
import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import Wrapper from "@/layout/DefaultWrapper";
import { useEffect, useState } from "react";
// Fix for vercel
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <HomeTwoMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default Home;
