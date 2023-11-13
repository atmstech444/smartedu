import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/redux/store";

export const metadata = {
  title: "The Smart – education",
  description: "The Smart – education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="The Smart – education" />
          <meta name="robots" content="noindex, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" href="./favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </head>

        <body>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
