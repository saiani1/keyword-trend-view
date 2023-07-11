import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { IResData } from "../../types/types";

interface IProps {
  resData: IResData[];
}

const COLOR_ARR = [
  "#84D8FF",
  "#E8559E",
  "#FFE05B",
  "#6BE8C5",
  "#C755FF",
  "#005148",
];
const AGES = ["10대", "20대", "30대", "40대", "50대", "60대"];

const Chart = ({ resData }: IProps) => {
  console.log(resData);
  return (
    <div style={{ margin: "50px auto" }}>
      <ResponsiveContainer minWidth={900} height={400}>
        <LineChart
          data={resData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke={"#dedede"} strokeWidth={0.5} />
          <XAxis
            dataKey="period"
            tick={{ fontSize: "0.7rem", fill: "#999" }}
            tickLine={{ stroke: "#dedede" }}
            axisLine={{ stroke: "#bbb" }}
          />
          <YAxis
            tick={{ fontSize: "0.7rem", fill: "#999" }}
            tickCount={6}
            tickLine={{ stroke: "#dedede" }}
            axisLine={{ stroke: "#bbb" }}
          />
          <Tooltip />
          <Legend
            iconType="rect"
            iconSize={13}
            wrapperStyle={{
              paddingBottom: "20px",
            }}
            verticalAlign="top"
            formatter={(value) => (
              <span style={{ color: "#999", fontSize: "0.5rem" }}>{value}</span>
            )}
          />
          {AGES.map((x: any, i: number) => (
            <Line
              type="monotone"
              key={x.period}
              dataKey={AGES[i]}
              dot={{ r: 1.5 }}
              fill={COLOR_ARR[i]}
              stroke={COLOR_ARR[i]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
