
import React, { createContext, useState, useContext } from "react";
import Loader from "../components/common/Loader";
import LoaderBgEffect from "../components/common/LoaderBgEffect";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
const showLoader = () => {
  console.log("showLoader called");
  setLoading(true);
};

const hideLoader = () => {
  console.log("hideLoader called");
  setLoading(false);
};


  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
      {loading && <LoaderBgEffect/>}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
