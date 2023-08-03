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
import SelectMultipleBox from "../ui/SelectMultipleBox";
import { transformData } from "../../util/transformData";
import type { RootState } from "../../store/store";
import { setTransformResData } from "../../store/transformResDataSlice";
import { useData } from "../../hooks/useData";

const SearchBar = () => {
  const getData = useData();
  const dispatch = useDispatch();
  const requestData = useSelector((state: RootState) => state.requestData);

  const submitHandler = () => {
    if (
      requestData.startDate.length === 0 ||
      requestData.endDate.length === 0 ||
      requestData.category.length === 0 ||
      requestData.keyword.length === 0
    ) {
      toast.error("시작/종료일자, 카테고리, 키워드를 입력해주세요.");
      dispatch(setTransformResData([]));
      return;
    }
    getData.mutate(requestData, {
      onSuccess: (data) => {
        const dataArr = data?.data.results[0].data;
        if (dataArr.length !== 0) {
          toast.success("조회가 완료되었습니다.");
          dispatch(
            setTransformResData(transformData(requestData.ages, dataArr))
          );
        } else {
          toast.error("검색결과가 없습니다.");
          dispatch(setTransformResData([]));
        }
      },
      onError: (err: any) => {
        toast.error(err.response.data.errMsg);
        dispatch(setTransformResData([]));
      },
    });
  };

  return (
    <Layout>
      <Space size="large" style={{ margin: "0 auto 20px" }}>
        <DateInput defaultValue={requestData} />
        <TextInput
          label="카테고리:"
          placeholder="category"
          defaultValue={requestData.category}
        />
        <TextInput
          label="키워드:"
          placeholder="keyword"
          defaultValue={requestData.keyword}
        />
      </Space>
      <Space size="large" style={{ margin: "0 auto" }}>
        <SelectBox
          label="timeUnit"
          defaultValue={requestData.timeUnit}
          options={timeUnitData}
        />
        <SelectMultipleBox options={agesData} defaultValue={requestData.ages} />
        <SelectBox
          label="gender"
          defaultValue={requestData.gender}
          options={genderData}
        />
        <SelectBox
          label="device"
          defaultValue={requestData.device}
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
