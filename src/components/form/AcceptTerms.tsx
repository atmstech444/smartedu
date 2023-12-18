"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface InputProps {
  addError: any;
  removeError: any;
  id: string;
  valStarted: boolean;
  startVal: any;
}
export default function AcceptTerms({ id, addError, removeError, valStarted, startVal }: InputProps) {
  const [checked, setChecked] = useState(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (valStarted) {
      console.log(checked);
      if (!checked) {
        addError(id);
        setError("წესებზე და პირობებზე დათანხმება აუცილებელია");
      } else {
        removeError(id);
        setError(null);
      }
    }
  }, [valStarted, checked]);

  return (
    <div style={{ position: "relative" }} className="sign__action d-flex justify-content-between mb-30">
      <div className="sign__agree d-flex align-items-center">
        <Inp
          onChange={(event: any) => {
            startVal(true);
            setChecked(event.target.checked);
          }}
          className="m-check-input"
          type="checkbox"
          id="m-agree"
        />

        <Label className="m-check-label" htmlFor="m-agree">
          ვეთანხმები <Link href="/terms-conditions">წესებს და პირობებს</Link>
        </Label>

        {error && <ErrorText>{error}</ErrorText>}
      </div>
    </div>
  );
}
const Label = styled.label`
  font-size: 16px !important;
`;

const Inp = styled.input`
  font-size: 16px !important;
`;
const ErrorText = styled.p`
  color: red;
  position: absolute;
  top: 24px;
  font-size: 14px !important;
`;
