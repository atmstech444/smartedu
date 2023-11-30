import React from "react";
import styled from "styled-components";

export default function Progress({ progress }: { progress: number }) {
  return (
    <Parent>
      <Filled progress={progress} />
    </Parent>
  );
}

const Parent = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f3f5f8;
  position: relative;
  border-radius: 8px;
`;

const Filled = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 10px;
  background-color: #2b4eff;
  border-radius: 8px;
`;
