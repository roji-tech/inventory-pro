import { useEffect, useState } from "react";
import { isTokenExpired } from "@utils/jwtUtils";
import useAuth from "@contexts/AuthContext";
import Spinner from "@components/spinners/Spinner1";
import { refreshAccessToken } from "@utils/refreshAccessToken";

function ProtectedPage({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const {
    logout1,
    dispatchFunc,
    state: { access_token },
  } = useAuth();

  const runRefreshAccessToken = async () => {
    try {
      await refreshAccessToken(dispatchFunc, setIsLoading);
    } catch (error) {
      console.log(error);
      logout1(false);
    }
  };

  useEffect(() => {
    if (!access_token | isTokenExpired(access_token)) {
      runRefreshAccessToken();
    } else {
      setIsLoading(false);
    }
  }, [runRefreshAccessToken]);

  return isLoading ? <Spinner /> : <> {children} </>;
}

export default ProtectedPage;
