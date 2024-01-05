import { useEffect, useRef } from "react";

const useClickOutside = (ref, ref2, callback, dependency) => {
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  });

  const handler = (event) => {
    if (
      ref?.current?.contains(event?.target) ||
      ref2?.current?.contains(event?.target)
    ) {
      return null;
    } else {
      saveCallback.current();
    }
  };

  useEffect(() => {
    if (dependency) {
      document.addEventListener("click", handler);
    }
    return () => document.removeEventListener("click", handler);
  }, [dependency]);

  return null;
};
export default useClickOutside;

export const useClickOutside2 = (ref, ref2, callback, dependency) => {
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  });

  const handler = (event) => {
    if (
      ref?.current?.contains(event?.target) ||
      ref2?.current?.contains(event?.target)
    ) {
      return null;
    } else {
      saveCallback.current();
    }
  };

  useEffect(() => {
    if (dependency) {
      document.addEventListener("click", handler);
    }
    return () => document.removeEventListener("click", handler);
  }, [dependency]);

  return null;
};
