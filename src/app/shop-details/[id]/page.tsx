import ShopDetailsMain from "@/components/shop-details/ShopDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <ShopDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default page;
