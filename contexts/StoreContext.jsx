import { useLocalStore } from "@hooks/useLocalStore";
import useSessionStore from "@hooks/useSessionStore";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [esim, setEsim] = useSessionStore("CURRENT_PACKAGE");
  const [showSearch, setShowSearch] = useState(false);

  const contextData = {
    esim,
    setEsim,
    showSearch,
    setShowSearch,
  };

  return (
    <StoreContext.Provider value={contextData}>
      {children}
    </StoreContext.Provider>
  );
};

// =================   USECONTEXT   ======================

const useStore = () => useContext(StoreContext);

export default useStore;
