import React from "react";
import { DatePicker, Space } from "antd";
import type { Dayjs } from "dayjs";

import { IData } from "../../types/types";

interface IProps {
  apiData: IData;
  setApiData: React.Dispatch<React.SetStateAction<IData>>;
}

const { RangePicker } = DatePicker;

const DateInput = ({ apiData, setApiData }: IProps) => {
  const dateChangeHandler = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates)
      setApiData({
        ...apiData,
        startDate: dateStrings[0],
        endDate: dateStrings[1],
      });
    else
      setApiData({
        ...apiData,
        startDate: "",
        endDate: "",
      });
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
