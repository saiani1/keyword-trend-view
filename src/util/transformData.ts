import { IResData } from "../types/types";

export const transformData = (ages: string[], data: IResData[]) => {
  let transData = [];

  if (ages.length === 1) {
    data.forEach((x) => {
      transData.push({ period: x.period, [`${ages[0]}대`]: x.ratio });
    });
  } else {
    let tmpArr: any = [];
    let tmpObj: any = {};

    for (let i = 0; i < data.length; i++) {
      if (tmpArr.length === 0) tmpArr.push(data[i]);
      if (tmpArr[0].period === data[i].period) {
        tmpArr.push(data[i]);
      }
      if (tmpArr[0].period !== data[i].period || i === data.length - 1) {
        tmpObj.period = tmpArr[0].period;
        for (let j = 0; j < tmpArr.length; j++) {
          tmpObj[`${tmpArr[j].group}대`] = tmpArr[j].ratio;
        }
        transData.push(tmpObj);
        tmpArr = [data[i]];
        tmpObj = {};
      }
    }
  }

  return transData;
};
