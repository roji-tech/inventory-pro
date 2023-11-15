import { useState, useEffect } from "react";

const useLocalStore = (key, defaultValue) => {
  const jsonValue = globalThis.localStorage?.getItem(key);

  const [value, setValue] = useState(() => {
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    }
    return defaultValue;
  });

  useEffect(() => {
    const dict = {
      ...value,
    };
    // alert(JSON.stringify(dict));
    globalThis.localStorage?.setItem(key, JSON.stringify(dict));
  }, [key, value, jsonValue]);

  return [value, setValue];
};

export default useLocalStore;
