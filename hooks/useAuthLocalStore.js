import { useState, useEffect } from "react";

const useAuthLocalStore = (key) => {
  // const [refreshToken, setRefreshToken] = useState(() =>
  //   localStorage.getItem("INV_AUTH_DATA")
  //     ? JSON.parse(localStorage.getItem("INV_AUTH_DATA"))
  //     : null
  // );
  const [value, setValue] = useState(() => {
    try {
      if (globalThis.localStorage.getItem(key) != null) {
        return JSON.parse(globalThis.localStorage.getItem(key))?.token;
      }
      return "";
    } catch (error) {
      console.warn(error);
    }
  });

  useEffect(() => {
    const dict = {
      token: value,
    };
    globalThis.localStorage.setItem(key, JSON.stringify(dict));
  }, [key, value]);

  return [value, setValue];
};

export default useAuthLocalStore;
