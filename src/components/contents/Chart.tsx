import React from "react";
import { useSelector } from "react-redux";

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

import type { RootState } from "../../store/store";

const COLOR_ARR = [
  "#84D8FF",
  "#E8559E",
  "#FFE05B",
  "#6BE8C5",
  "#C755FF",
  "#005148",
];
const AGES = ["10대", "20대", "30대", "40대", "50대", "60대"];

const Chart = () => {
  const transformResData = useSelector(
    (state: RootState) => state.transformResData
  );

  return (
    <div style={{ margin: "70px auto" }}>
      <ResponsiveContainer minWidth={1200} height={400}>
        <LineChart
          data={transformResData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke={"#dedede"} strokeWidth={0.5} />
          <XAxis
            dataKey="period"
            tick={{ fontSize: "0.8rem", fill: "#999" }}
            tickLine={{ stroke: "#dedede" }}
            axisLine={{ stroke: "#bbb" }}
          />
          <YAxis
            tick={{ fontSize: "0.8rem", fill: "#999" }}
            tickCount={6}
            tickLine={{ stroke: "#dedede" }}
            axisLine={{ stroke: "#bbb" }}
          />
          <Tooltip />
          <Legend
            iconType="rect"
            iconSize={13}
            wrapperStyle={{
              paddingBottom: "30px",
            }}
            verticalAlign="top"
            formatter={(value) => (
              <span style={{ color: "#aaa", fontSize: "0.7rem" }}>{value}</span>
            )}
          />
          {AGES.map((x: any, i: number) => (
            <Line
              type="monotone"
              key={AGES[i]}
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
