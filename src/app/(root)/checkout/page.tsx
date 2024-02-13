"use client";
import CheckoutMain from "@/components/checkout/CheckoutMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <CheckoutMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default CheckoutPage;
