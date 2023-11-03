"use client";
import React from "react";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Preloader from "@/components/common/Preloader";

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoading = false;

  // const [isLoading, setIsLoading] = useState<boolean>(false); // Add this state

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 40); // Set the desired delay in milliseconds

  //   return () => clearTimeout(loadingTimeout);
  // }, []);

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
