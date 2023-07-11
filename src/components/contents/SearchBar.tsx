import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Layout, Space } from "antd";
import toast from "react-hot-toast";

import {
  timeUnitData,
  agesData,
  genderData,
  deviceData,
} from "../../assets/data/selectData";
import TextInput from "../ui/TextInput";
import SelectBox from "../ui/SelectBox";
import DateInput from "../ui/DateInput";
import { transformData } from "../../util/transformData";
import type { RootState } from "../../store/store";
import { setTransformResData } from "../../store/transformResDataSlice";
import { useData } from "../../hooks/useData";

const SearchBar = () => {
  const { data, error, refetch } = useData();
  const requestData = useSelector((state: RootState) => state.requestData);
  const dispatch = useDispatch();

  const submitHandler = () => {
    refetch();
    const dataArr = data?.data.results[0].data;
    console.log(dataArr);
    if (data) {
      if (dataArr.legnth !== 0) {
        toast.success("조회가 완료되었습니다.");
        dispatch(setTransformResData(transformData(requestData.ages, dataArr)));
      } else {
        toast.success("검색결과가 없습니다.");
        dispatch(setTransformResData([]));
      }
    }
    if (error) {
      toast.error((error.response?.data as { errMsg: string })?.errMsg);
      dispatch(setTransformResData([]));
    }
  };

  return (
    <Layout>
      <Space size="large" style={{ margin: "0 auto 20px" }}>
        <DateInput />
        <TextInput label="카테고리:" placeholder="category" />
        <TextInput label="키워드:" placeholder="keyword" />
      </Space>
      <Space size="large" style={{ margin: "0 auto" }}>
        <SelectBox
          label="timeUnit"
          defaultValue={timeUnitData[0].label}
          options={timeUnitData}
          mode={undefined}
        />
        <SelectBox
          label="ages"
          defaultValue={undefined}
          options={agesData}
          mode="multiple"
        />
        <SelectBox
          label="gender"
          defaultValue={genderData[0].label}
          options={genderData}
          mode={undefined}
        />
        <SelectBox
          label="device"
          defaultValue={deviceData[0].label}
          options={deviceData}
          mode={undefined}
        />
        <Button type="primary" onClick={submitHandler}>
          조회
        </Button>
      </Space>
    </Layout>
  );
};

export default SearchBar;
