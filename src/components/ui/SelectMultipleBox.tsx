import { useDispatch } from "react-redux";
import { Select, Space } from "antd";

import { setAges } from "../../store/requestDataSlice";

interface IProps {
  options: {}[];
  defaultValue: string[];
}

const SelectMultipleBox = ({ options, defaultValue }: IProps) => {
  const dispatch = useDispatch();
  const selectChangeHandler = (value: string[]) => {
    dispatch(setAges(value));
  };

  return (
    <Space>
      <label>ages: </label>
      <Select
        style={{ minWidth: "100px" }}
        options={options}
        mode="multiple"
        placeholder="all"
        defaultValue={defaultValue}
        onChange={selectChangeHandler}
      />
    </Space>
  );
};

export default SelectMultipleBox;
