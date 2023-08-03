import { IReqData } from "./../types/types";
import { useMutation } from "@tanstack/react-query";

import { getDataApi } from "../services/data";

export const useData = () => {
  return useMutation((data: IReqData) => getDataApi(data));
};
