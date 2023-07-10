import React from "react";
import { Input, Space } from "antd";
import { IData } from "../../types/types";

interface IProps {
  label: string;
  placeholder: string;
  apiData: IData;
  setApiData: React.Dispatch<React.SetStateAction<IData>>;
}

const TextInput = ({ label, placeholder, apiData, setApiData }: IProps) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.currentTarget.value;
    setApiData({ ...apiData, [placeholder]: data });
  };

  return (
    <Space>
      <label>{label}</label>
      <Input placeholder={placeholder} onChange={inputChangeHandler} />
    </Space>
  );
};

export default TextInput;
