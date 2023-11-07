import axios from "axios";
import { baseURL } from "../config";
import useAuth from "../contexts/AuthContext";

// message: 'timeout exceeded' code: ECONNABORTED
// message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK',
const useAxios = () => {
  const { token, logout } = useAuth();

  const local_token = globalThis?.localStorage?.getItem("BRANDDE_AUTH_DATA")
    ? JSON.parse(globalThis?.localStorage?.getItem("BRANDDE_AUTH_DATA"))
    : null;

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: token || local_token?.token || null,
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  axiosInstance.interceptors.response.use(
    (resp) => resp, // RETURNS RESPONSES DIRECTLY

    // Do something with response error
    async (error) => {
      console.log(`==ERROR ${error?.response?.status} IN INTERCEPTOR=`);
      if (error?.response?.status === 401) {
        logout();
      }
      return Promise.reject(error);
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
