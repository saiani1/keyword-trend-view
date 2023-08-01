import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setDate: (state, action: PayloadAction<string[]>) => {
      state.startDate = action.payload[0];
      state.endDate = action.payload[1];
    },
    setTimeUnit: (state, action: PayloadAction<string>) => {
      state.timeUnit = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setDevice: (state, action: PayloadAction<string>) => {
      state.device = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setAges: (state, action: PayloadAction<string[]>) => {
      state.ages = action.payload;
    },
  },
});

export const {
  setDate,
  setTimeUnit,
  setCategory,
  setKeyword,
  setDevice,
  setGender,
  setAges,
} = requestDataState.actions;

export default requestDataState.reducer;
