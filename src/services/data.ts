import axios from "axios";

import { IReqData } from "../types/types";

export const getDataApi = async (params: IReqData) => {
  const res = await axios.post(
    "v1/datalab/shopping/category/keyword/age",
    params,
    {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
