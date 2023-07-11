import React, { useState } from "react";
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
import { IReqData, IResData } from "../../types/types";
import { getDataApi } from "../../api/base";
import { transformData } from "../../util/transformData";

interface IProps {
  resData: IResData[];
  setResData: React.Dispatch<React.SetStateAction<IResData[]>>;
}

const SearchBar = ({ resData, setResData }: IProps) => {
  const [apiData, setApiData] = useState<IReqData>({
    startDate: "",
    endDate: "",
    timeUnit: "date",
    category: "",
    keyword: "",
    device: "",
    gender: "",
    ages: [],
  });

  const submitHandler = () => {
    getDataApi(apiData)
      .then((res) => {
        const data = res.data.results[0].data;
        if (data.length !== 0) {
          toast.success("조회가 완료되었습니다.");
          console.log(data);
          setResData(transformData(apiData.ages, data));
        } else {
          toast.success("검색결과가 없습니다.");
        }
      })
      .catch((err) => toast.error(err.response.data.errMsg));
  };

  return (
    <Layout style={{ marginTop: "50px" }}>
      <Space size="large" style={{ margin: "0 auto 20px" }}>
        <DateInput apiData={apiData} setApiData={setApiData} />
        <TextInput
          label="카테고리:"
          placeholder="category"
          apiData={apiData}
          setApiData={setApiData}
        />
        <TextInput
          label="키워드:"
          placeholder="keyword"
          apiData={apiData}
          setApiData={setApiData}
        />
      </Space>
      <Space size="large" style={{ margin: "0 auto" }}>
        <SelectBox
          label="timeUnit"
          defaultValue={timeUnitData[0].label}
          options={timeUnitData}
          mode={undefined}
          apiData={apiData}
          setApiData={setApiData}
        />
        <SelectBox
          label="ages"
          defaultValue={undefined}
          options={agesData}
          mode="multiple"
          apiData={apiData}
          setApiData={setApiData}
        />
        <SelectBox
          label="gender"
          defaultValue={genderData[0].label}
          options={genderData}
          mode={undefined}
          apiData={apiData}
          setApiData={setApiData}
        />
        <SelectBox
          label="device"
          defaultValue={deviceData[0].label}
          options={deviceData}
          mode={undefined}
          apiData={apiData}
          setApiData={setApiData}
        />
        <Button type="primary" onClick={submitHandler}>
          조회
        </Button>
      </Space>
    </Layout>
  );
};

export default SearchBar;
