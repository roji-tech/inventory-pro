import { useState, useEffect } from "react";

const useSessionStore = (key) => {
  // const [refreshToken, setRefreshToken] = useState(() =>
  //   localStorage.getItem("BRANDDE_AUTH_DATA")
  //     ? JSON.parse(localStorage.getItem("BRANDDE_AUTH_DATA"))
  //     : null
  // );
  const jsonValue = globalThis.sessionStorage.getItem(key);
  const [value, setValue] = useState(() => {
    if (globalThis.sessionStorage.getItem(key) != null) {
      return JSON.parse(jsonValue)?.token;
    }
    return "";
  });

  useEffect(() => {
    const dict = {
      token: value,
    };
    globalThis.sessionStorage.setItem(key, JSON.stringify(dict));
  }, [key, value, jsonValue]);

  return [value, setValue];
};

export default useSessionStore;
