import React from "react";
import { Button, Layout, Space } from "antd";

import {
  timeUnitData,
  agesData,
  genderData,
  deviceData,
} from "../../assets/data/selectData";
import TextInput from "../../ui/TextInput";
import SelectBox from "../../ui/SelectBox";
import DateInput from "../../ui/DateInput";

const SearchBar = () => {
  return (
    <Layout style={{ marginTop: "50px" }}>
      <Space size="large" style={{ margin: "0 auto 20px" }}>
        <DateInput />
        <TextInput label="카테고리:" placeholder="category" />
        <TextInput label="키워드:" placeholder="keyword" />
      </Space>
      <Space size="large" style={{ margin: "0 auto" }}>
        <SelectBox
          label="timeUnit:"
          defaultValue={timeUnitData[0].label}
          options={timeUnitData}
          mode={undefined}
        />
        <SelectBox
          label="age:"
          defaultValue={undefined}
          options={agesData}
          mode="multiple"
        />
        <SelectBox
          label="gender:"
          defaultValue={genderData[0].label}
          options={genderData}
          mode={undefined}
        />
        <SelectBox
          label="device:"
          defaultValue={deviceData[0].label}
          options={deviceData}
          mode={undefined}
        />
        <Button type="primary">조회</Button>
      </Space>
    </Layout>
  );
};

export default SearchBar;
