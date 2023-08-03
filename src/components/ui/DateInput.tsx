import { useDispatch } from "react-redux";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

import { setDate } from "../../store/requestDataSlice";
import { IReqData } from "../../types/types";

const { RangePicker } = DatePicker;

interface IProps {
  defaultValue: IReqData;
}

const DateInput = ({ defaultValue }: IProps) => {
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
        defaultValue={
          defaultValue.startDate.length !== 0
            ? [
                dayjs(defaultValue.startDate, "YYYY-MM-DD"),
                dayjs(defaultValue.endDate, "YYYY-MM-DD"),
              ]
            : undefined
        }
        onChange={dateChangeHandler}
      />
    </Space>
  );
};

export default DateInput;
