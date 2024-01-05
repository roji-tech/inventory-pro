import { AIRALO_API, AIRALO_CLIENT_ID, AIRALO_CLIENT_SECRET } from "@config";
import { getPath } from "@utils/get_path";

const fs = require("fs");
var axios = require("axios");
var FormData = require("form-data");

const filePath = `${getPath(__dirname).rootParentPath}/secret/airalo.txt`;

export async function fetchAiraloAccess() {
  var data = new FormData();
  data.append("client_id", AIRALO_CLIENT_ID);
  data.append("client_secret", AIRALO_CLIENT_SECRET);
  data.append("grant_type", "client_credentials");

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${AIRALO_API}/token`,
    headers: {
      Accept: "application/json",
      ...data.getHeaders(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(response?.data?.data?.access_token, "\n\n\n\n");
      fs.writeFileSync(filePath, response?.data?.data?.access_token);
      return response?.data?.data?.access_token;
    })
    .catch(function (error) {
      console.log(error?.response);
      console.log(error?.response?.data);
      return null;
    });
}

export function getAiraloAccess() {
  console.log("\n\n\n\n");

  try {
    const value = fs.readFileSync(filePath, "utf8");
    if (value?.length < 10) {
      return fetchAiraloAccess();
    }
    return value.trim();
  } catch (error) {
    if (error.code === "ENOENT") {
      return fetchAiraloAccess();
    }
    throw error;
  }
}
