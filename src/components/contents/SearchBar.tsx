import { useSelector, useDispatch } from "react-redux";
import { Button, Layout, Space } from "antd";
import toast from "react-hot-toast";

import {
  timeUnitData,
  agesData,
  genderData,
  deviceData,
} from "../../assets/data/data";
import TextInput from "../ui/TextInput";
import SelectBox from "../ui/SelectBox";
import DateInput from "../ui/DateInput";
import { transformData } from "../../util/transformData";
import type { RootState } from "../../store/store";
import { setTransformResData } from "../../store/transformResDataSlice";
import { getDataApi } from "../../services/data";
import SelectMultipleBox from "../ui/SelectMultipleBox";

const SearchBar = () => {
  const requestData = useSelector((state: RootState) => state.requestData);
  const resData = useSelector((state: RootState) => state.transformResData);
  const dispatch = useDispatch();

  console.log(requestData, resData);
  const submitHandler = () => {
    if (
      requestData.startDate.length === 0 ||
      requestData.endDate.length === 0 ||
      requestData.category.length === 0 ||
      requestData.keyword.length === 0
    ) {
      toast.error("시작/종료일자, 카테고리, 키워드를 입력해주세요.");
      dispatch(setTransformResData([]));
    } else {
      getDataApi(requestData)
        .then((res) => {
          const dataArr = res.data.results[0].data;
          if (dataArr.length !== 0) {
            toast.success("조회가 완료되었습니다.");
            dispatch(
              setTransformResData(transformData(requestData.ages, dataArr))
            );
          } else {
            toast.error("검색결과가 없습니다.");
            dispatch(setTransformResData([]));
          }
        })
        .catch((err) => {
          toast.error(err.response.data.errMsg);
          dispatch(setTransformResData([]));
        });
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
        />
        <SelectMultipleBox options={agesData} />
        <SelectBox
          label="gender"
          defaultValue={genderData[0].label}
          options={genderData}
        />
        <SelectBox
          label="device"
          defaultValue={deviceData[0].label}
          options={deviceData}
        />
        <Button type="primary" onClick={submitHandler}>
          조회
        </Button>
      </Space>
    </Layout>
  );
};

export default SearchBar;
