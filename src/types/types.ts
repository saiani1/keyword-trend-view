export interface IReqData {
  startDate: string;
  endDate: string;
  timeUnit: string;
  category: string;
  keyword: string;
  device: string;
  gender: string;
  ages: string[];
}

export interface IResData {
  period: string;
  ratio: number;
  group: string;
}

export interface ITransformResData {
  period: string;
  10: number | undefined;
  20: number | undefined;
  30: number | undefined;
  40: number | undefined;
  50: number | undefined;
  60: number | undefined;
}
