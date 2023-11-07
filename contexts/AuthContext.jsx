import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuthLocalStore from "../hooks/useAuthLocalStore";
import useLocalStore from "../hooks/useLocalStore";
import useAxios from "../hooks/useAxios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const axiosInstance = useAxios();
  const [token, setToken] = useAuthLocalStore("BRANDDE_AUTH_DATA");
  const [user, setUser] = useLocalStore("BRANDDE_AUTH_DATA", null);
  const router = useRouter();

  const fetchUser = async () => {
    if (token) {
      await axiosInstance
        .get("/central/myusers/me/")
        .then((resp) => {
          console.log("FROM AUTHPROVIDER");
          console.log(resp.data);
          setUser(() => ({ ...resp.data }));
        })
        .catch((err) => console.log(`ERROR-- ${err?.response?.status}===`));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "/central/token/logout/",
      headers: {
        Authorization: token,
      },
    };
    router.push("/dp/auth/login")

    // await axiosInstance(config)
    //   .then((resp) => {
    //     setToken(null);
    //     setUser(null);
    //   })
    //   .catch((e) => console.warn(e))
    //   .finally(() => {
    //     globalThis.localStorage.removeItem("BRANDDE_AUTH_DATA");
    //     globalThis.localStorage.removeItem("BRANDDE_AUTH_DATA");
    //     // navigate("/login");
    //   });
    

  };

  const contextData = {
    setToken,
    setUser,
    user,
    token,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

// =================   USECONTEXT   ======================

const useAuth = () => useContext(AuthContext);

export default useAuth;
