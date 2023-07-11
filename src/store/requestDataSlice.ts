import { createSlice } from "@reduxjs/toolkit";
import { IReqData } from "../types/types";

const initialState: IReqData = {
  startDate: "",
  endDate: "",
  timeUnit: "date",
  category: "",
  keyword: "",
  device: "",
  gender: "",
  ages: [],
};

export const requestDataState = createSlice({
  name: "requestData",
  initialState,
  reducers: {
    setRequestData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setRequestData } = requestDataState.actions;

export default requestDataState.reducer;
