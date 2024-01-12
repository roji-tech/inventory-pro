import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export const RedirectElement = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace("/login");
  }, []);

  return <div />;
};
