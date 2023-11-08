"use client";
import React from "react";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Preloader from "@/components/common/Preloader";

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoading = false;

  return (
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        {isLoading ? (
          <>
            <Preloader />
          </>
        ) : (
          <>{children}</>
        )}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
