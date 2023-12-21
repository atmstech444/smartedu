import React from "react";
import Head from "next/head";
import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "The Smart – education",
  description: "The Smart – education",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="./favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <StyledComponentsRegistry>
          <ReduxProvider>
            <AppProvider>
              {children}
              <ToastContainer />
            </AppProvider>
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </>
  );
}
