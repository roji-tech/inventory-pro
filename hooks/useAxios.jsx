import axios from "axios";
import { api } from "@config.js";
import useAuth from "../contexts/AuthContext";
import { typ } from "@reducers/AuthReducer";

// message: 'timeout exceeded' code: ECONNABORTED
// message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK',
const useAxios = () => {
  const { logout, state, dispatchFunc } = useAuth();

  let local_access_token =
    globalThis?.localStorage?.getItem("access_token") ?? null;

  const axiosInstance = axios.create({
    baseURL: api?.baseURL,
    headers: {
      Authorization: state?.access_token ?? local_access_token,
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  axiosInstance.interceptors.response.use(
    (resp) => resp, // RETURNS RESPONSES DIRECTLY

    // Do something with response error
    async (error) => {
      console.log(`==ERROR ${error?.response?.status} IN INTERCEPTOR=`);
      console.log(error?.response?.headers);
      if (error?.response?.status === 401) {
        try {
          refreshAccessToken(state?.refresh_token, dispatchFunc, logout);
        } catch (error) {
          console.warn(error);
          logout();
          return Promise.reject(error);
        }
      }
    }
  );

  return axiosInstance;
};

export default useAxios;

// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

// If you need to remove an interceptor later you can.

// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

const refreshAccessToken = async (refresh_token, dispatchFunc, logout) => {
  const local_refresh_token =
    globalThis?.localStorage?.getItem("refresh_token") ?? null;

  const token = refresh_token ?? local_refresh_token;

  if (!token) {
    logout();
    throw "No token";
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: api.refresh,
    headers: {
      "Content-Type": "application/json",
    },
    data: { refresh: token },
  };

  console.log({ refresh: token });

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    alert(JSON.stringify(response.data));
    dispatchFunc(typ.setAccessToken, response.data);
    return response.data?.access;
  } catch (error) {
    console.log(error);
    logout();
    throw error;
  }
};
