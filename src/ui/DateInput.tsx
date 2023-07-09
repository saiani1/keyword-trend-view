import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DateInput = () => {
  return (
    <Space>
      <label>시작/종료일자:</label>
      <RangePicker picker="date" />
    </Space>
  );
};

export default DateInput;
