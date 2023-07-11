import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";

import { getDataApi } from "../services/data";
import type { RootState } from "../store/store";

export const useData = () => {
  const requestData = useSelector((state: RootState) => state.requestData);

  const { data, error, refetch } = useQuery<any, AxiosError>(
    ["datas", requestData],
    () => getDataApi(requestData),
    {
      enabled: false,
    }
  );
  return { data, error, refetch };
};
