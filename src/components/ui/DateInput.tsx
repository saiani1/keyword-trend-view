import { useDispatch } from "react-redux";
import { DatePicker, Space } from "antd";
import type { Dayjs } from "dayjs";

import { setDate } from "../../store/requestDataSlice";

const { RangePicker } = DatePicker;

const DateInput = () => {
  const dispatch = useDispatch();

  const dateChangeHandler = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) dispatch(setDate(dateStrings));
    else dispatch(setDate(["", ""]));
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
