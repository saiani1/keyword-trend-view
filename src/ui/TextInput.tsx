import React from "react";
import { Input, Space } from "antd";

interface IProps {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder }: IProps) => {
  return (
    <Space>
      <label>{label}</label>
      <Input placeholder={placeholder} />
    </Space>
  );
};

export default TextInput;
