import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Space } from "antd";

import { setRequestData } from "../../store/requestDataSlice";
import type { RootState } from "../../store/store";

interface IProps {
  label: string;
  defaultValue: string | undefined | null;
  options: {}[];
  mode: "multiple" | "tags" | undefined;
}

const SelectBox = ({ label, defaultValue, options, mode }: IProps) => {
  const requestData = useSelector((state: RootState) => state.requestData);
  const dispatch = useDispatch();

  const selectChangeHandler = (value: string) => {
    dispatch(setRequestData({ ...requestData, [label]: value }));
  };

  return (
    <Space>
      <label>{label}:</label>
      <Select
        style={{ minWidth: "100px" }}
        defaultValue={defaultValue}
        options={options}
        mode={mode}
        placeholder="all"
        onChange={selectChangeHandler}
      />
    </Space>
  );
};

export default SelectBox;
