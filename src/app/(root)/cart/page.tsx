"use client";
import CartMain from "@/components/cart/CartMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <CartMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default CartPage;
