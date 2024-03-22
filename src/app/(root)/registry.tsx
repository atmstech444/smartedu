"use client";

import React, { useState, useEffect } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

interface StyledComponentsRegistryProps {
  children: any;
}

export default function StyledComponentsRegistry({ children }: StyledComponentsRegistryProps) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useEffect(() => {
    const cleanup = () => {
      styledComponentsStyleSheet.instance.clearTag();
    };
    return cleanup;
  }, [styledComponentsStyleSheet]);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}
