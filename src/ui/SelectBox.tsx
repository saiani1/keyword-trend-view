import React from "react";
import { Select, Space } from "antd";

interface IProps {
  label: string;
  defaultValue: string | undefined | null;
  options: {}[];
  mode: "multiple" | "tags" | undefined;
}

const SelectBox = ({ label, defaultValue, options, mode }: IProps) => {
  return (
    <Space>
      <label>{label}</label>
      <Select
        style={{ minWidth: "100px" }}
        defaultValue={defaultValue}
        options={options}
        mode={mode}
      />
    </Space>
  );
};

export default SelectBox;
