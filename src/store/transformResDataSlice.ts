import { createSlice } from "@reduxjs/toolkit";
import { ITransformResData } from "../types/types";

const initialState: ITransformResData[] = [];

export const transformResDataState = createSlice({
  name: "transformResData",
  initialState,
  reducers: {
    setTransformResData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setTransformResData } = transformResDataState.actions;

export default transformResDataState.reducer;
