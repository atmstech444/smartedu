import React from "react";
import Watching from "./Watching";

export default function page({ params }: { params: { id: number } }) {
  return (
    <>
      <Watching params={params} />
    </>
  );
}
