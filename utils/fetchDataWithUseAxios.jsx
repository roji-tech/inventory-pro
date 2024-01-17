import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "./ShowSuccess";

export const fetchDataWithUseAxios = async (
  axiosInstance,
  url,
  method = "get",
  data = {},
  error_message = "",
  setLoading = (bool) => {}
) => {
  const config = { method, url, data };
  try {
    setLoading(true);
    const response = await axiosInstance(config);
    // ShowSuccess("Successful" + url);
    console.warn("fetchDataWithUseAxios" + " " + url, response?.data);
    return response?.data;
  } catch (error) {
    console.warn("fetchDataWithUseAxios Error " + url, error);
    console.warn("fetchDataWithUseAxios", error?.response);
    // if (error_message) ShowErrors(error_message);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};

// import { ShowErrors } from "@utils/ShowErrors";

// export const fetchDataWithUseAxios = async (
//   axiosInstance,
//   url,
//   method = "get",
//   data = {},
//   label = ""
// ) => {
//   const config = { method, url, data };

//   await axiosInstance(config)
//     .then((response) => {
//       console.warn("RES dATA", response?.data);
//       return response?.data;
//     })
//     .catch((error) => {
//       console.warn(error);
//       ShowErrors("An Error Occured in  " + label);
//       return error;
//     });
// };
