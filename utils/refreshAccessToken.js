import { typ } from "@reducers/AuthReducer";
import axios from "axios";

export const refreshAccessToken = async (dispatchFunc, setIsLoading = null) => {
  const config = {
    method: "get",
    url: "/api/auth/refresh",
  };

  return await axios(config)
    .then((response) => {
      dispatchFunc(typ.setAll, response.data);
    })
    .catch((error) => {
      throw error;
    })
    .finally(() => {
      if (setIsLoading) {
        setIsLoading(false);
      }
    });
};
