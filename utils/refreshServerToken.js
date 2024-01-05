import { MyApiUrls } from "@backendUrl";
import axios from "axios";
import cookie from "cookie";

export const refreshServerToken = async (refresh) => {
  if (!refresh) {
    return { status: 401, logout: true };
  }

  try {
    const config = {
      method: "post",
      url: MyApiUrls.refresh,
      data: { refresh },
    };
    const response = await axios(config);

    const { Authorization: access_token, refresh: refresh_token } =
      response.data;
    setRefreshHeaders(res, refresh_token);

    return { status: 200, access_token, refresh_token };
  } catch (error) {
    Promise.reject(error);
    return { status: 401, logout: true };
  }
};

export const setRefreshHeaders = (res, refresh = "", logout = false) => {
  const secure = process.env.NODE_ENV !== "development";
  // const secure = false;
  const expiredDate = new Date(0).toUTCString();

  // const accMaxAge = logout ? 0 : 60 * 15; // 15 mins
  const resMaxAge = logout ? 0 : 60 * 60 * 24 * 7 * 3; // 1 week

  // const logoutOptions = {
  //   expires: expiredDate,
  // };

  const setOptions = (maxAge) => {
    let opt = {
      httpOnly: true,
      secure,
      maxAge,
      sameSite: "strict",
      path: "/",
    };
    // if (logout) {
    //   opt = { ...opt, ...logoutOptions };
    // }
    return opt;
  };

  res.setHeader("Set-Cookie", [
    cookie.serialize("refresh_token", String(refresh), setOptions(resMaxAge)),
    // cookie.serialize("access_token", String(access), setOptions(accMaxAge)),
  ]);
};
