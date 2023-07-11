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
  [key: string]: string | number | undefined;
}
