import { configureStore } from "@reduxjs/toolkit";
import requestDataSlice from "./requestDataSlice";
import transformResSlice from "./transformResDataSlice";

export const store = configureStore({
  reducer: {
    requestData: requestDataSlice,
    transformResData: transformResSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
