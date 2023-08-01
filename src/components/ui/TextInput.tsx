import React from "react";
import { useDispatch } from "react-redux";
import { Input, Space } from "antd";

import { setCategory, setKeyword } from "../../store/requestDataSlice";

interface IProps {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder }: IProps) => {
  const dispatch = useDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.currentTarget.value;
    if (placeholder === "category") {
      dispatch(setCategory(data));
    } else {
      dispatch(setKeyword(data));
    }
  };

  return (
    <Space>
      <label>{label}</label>
      <Input placeholder={placeholder} onChange={inputChangeHandler} />
    </Space>
  );
};

export default TextInput;
