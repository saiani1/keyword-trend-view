import axios from "axios";
import { IData } from "../types/types";

const baseURL =
  "https://openapi.naver.com/v1/datalab/shopping/category/keyword/age";

export const getDataApi = async (data: IData) => {
  const res = await axios.post(baseURL, data, {
    headers: {
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
      "Content-Type": "application/json",
    },
  });
  return res;
};
