import { useEffect, useState } from "react";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import useAxios from "@hooks/useAxios";

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

  useEffect(() => {
    fetchDataWithUseAxios(myaxios, url, method, {}, label).then((res) => {
      if (res?.results?.length > 0)
        setDataList({ ...res, results: filterFunction(res?.results) });
      else setDataList({ results: filterFunction([...defaultData]) });
      console.log("DATAAAA", res?.results);
    });
  }, []);

  return [dataList, setDataList];
}
