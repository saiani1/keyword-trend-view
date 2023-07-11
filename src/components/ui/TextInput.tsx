import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Space } from "antd";

import { setRequestData } from "../../store/requestDataSlice";
import type { RootState } from "../../store/store";

interface IProps {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder }: IProps) => {
  const requestData = useSelector((state: RootState) => state.requestData);
  const dispatch = useDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.currentTarget.value;
    dispatch(setRequestData({ ...requestData, [placeholder]: data }));
  };

  return (
    <Space>
      <label>{label}</label>
      <Input placeholder={placeholder} onChange={inputChangeHandler} />
    </Space>
  );
};

export default TextInput;
