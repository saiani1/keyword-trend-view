import { useDispatch } from "react-redux";
import { Select, Space } from "antd";

import {
  setTimeUnit,
  setDevice,
  setGender,
} from "../../store/requestDataSlice";

interface IProps {
  label: string;
  defaultValue: string | undefined | null;
  options: {}[];
}

const SelectBox = ({ label, defaultValue, options }: IProps) => {
  const dispatch = useDispatch();

  const selectChangeHandler = (value: string) => {
    if (label === "timeUnit") dispatch(setTimeUnit(value));
    else if (label === "device") dispatch(setDevice(value));
    else if (label === "gender") dispatch(setGender(value));
  };

  return (
    <Space>
      <label>{label}:</label>
      <Select
        style={{ minWidth: "100px" }}
        defaultValue={defaultValue}
        options={options}
        mode="tags"
        onChange={selectChangeHandler}
      />
    </Space>
  );
};

export default SelectBox;
