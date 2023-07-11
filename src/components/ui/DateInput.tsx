import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker, Space } from "antd";
import type { Dayjs } from "dayjs";

import { setRequestData } from "../../store/requestDataSlice";
import type { RootState } from "../../store/store";

const { RangePicker } = DatePicker;

const DateInput = () => {
  const requestData = useSelector((state: RootState) => state.requestData);
  const dispatch = useDispatch();

  const dateChangeHandler = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates)
      dispatch(
        setRequestData({
          ...requestData,
          startDate: dateStrings[0],
          endDate: dateStrings[1],
        })
      );
    else
      dispatch(
        setRequestData({
          ...requestData,
          startDate: "",
          endDate: "",
        })
      );
  };

  return (
    <Space>
      <label>시작/종료일자:</label>
      <RangePicker
        picker="date"
        format="YYYY-MM-DD"
        onChange={dateChangeHandler}
      />
    </Space>
  );
};

export default DateInput;
