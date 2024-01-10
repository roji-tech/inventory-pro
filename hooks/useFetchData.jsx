import { useEffect, useState } from "react";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import useAxios from "@hooks/useAxios";
// import { ShowErrors } from "@utils/ShowErrors";

export function useFetchData(
  defaultData,
  url,
  method,
  {},
  label = "",
  filterFunction = (param) => param
) {
  const myaxios = useAxios();
  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDataWithUseAxios(myaxios, url, method, {}, label, setLoading)
      .then((res) => {
        if (res?.results?.length > 0)
          setDataList({ ...res, results: filterFunction(res?.results) });
        else setDataList({ results: filterFunction([...defaultData]) });
        console.log("DATAAAA", res);
      })
      .catch((error) => {
        // ShowErrors("An Error Occurred");
        return error;
      });
  }, []);

  return [dataList, setDataList, loading];
}
