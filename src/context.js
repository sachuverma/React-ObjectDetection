import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [detectedItems, setDetectedItems] = useState([]);

  return (
    <AppContext.Provider
      value={{
        detectedItems,
        setDetectedItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
