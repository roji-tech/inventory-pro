import { ShowErrors } from "@utils/ShowErrors";

export const fetchDataWithUseAxios = async (
  axiosInstance,
  url,
  method = "get",
  data = {},
  label = ""
) => {
  const config = { method, url, data };

  try {
    const response = await axiosInstance(config);
    console.warn(response?.data);
    return response?.data;
  } catch (error) {
    ShowErrors("Unable to fetch " + label);
    return error;
  }

  return data;
};
