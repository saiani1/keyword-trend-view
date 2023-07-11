import React from "react";
import { Select, Space } from "antd";
import { IReqData } from "../../types/types";

interface IProps {
  label: string;
  defaultValue: string | undefined | null;
  options: {}[];
  mode: "multiple" | "tags" | undefined;
  apiData: IReqData;
  setApiData: React.Dispatch<React.SetStateAction<IReqData>>;
}

const SelectBox = ({
  label,
  defaultValue,
  options,
  mode,
  apiData,
  setApiData,
}: IProps) => {
  const selectChangeHandler = (value: string) => {
    setApiData({ ...apiData, [label]: value });
  };

  return (
    <Space>
      <label>{label}:</label>
      <Select
        style={{ minWidth: "100px" }}
        defaultValue={defaultValue}
        options={options}
        mode={mode}
        onChange={selectChangeHandler}
      />
    </Space>
  );
};

export default SelectBox;
