import React from "react";

export default function Button({ text, isLoading }: { text: string; isLoading?: boolean }) {
  return (
    <button disabled={isLoading} className="e-btn w-100">
      {isLoading ? "იტვირთება..." : text}
    </button>
  );
}
