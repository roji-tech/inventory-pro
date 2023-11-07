import { createContext, useRef, useState, useContext } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [isopen, setIsOpen] = useState(false);
  const hamburgerRef = useRef();

  const contextData = {
    hamburgerRef,
   isopen,
    setIsOpen,
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
