"use client";
import ShopMainArea from "@/components/shop/ShopMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const ShopPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <ShopMainArea />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default ShopPage;
