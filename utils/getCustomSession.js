import axios from "axios";
// import { storeToFile } from "@utils/storeToFile";

export const getCustomSession = async () => {
  let config = {
    method: "get",
    url: "/api/auth/custom_session",
  };
  return await axios(config)
    .then((resp) => {
      return resp;
    })
    .catch((e) => {
      throw e;
    });
};
