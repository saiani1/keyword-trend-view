import { useSelector } from "react-redux";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { colorArr, agesArr } from "../../assets/data/data";
import type { RootState } from "../../store/store";

const Chart = () => {
  const transformResData = useSelector(
    (state: RootState) => state.transformResData
  );

  return (
    <div style={{ margin: "70px auto" }}>
      {transformResData.length !== 0 && (
        <LineChart
          data={transformResData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          width={1200}
          height={500}
        >
          <CartesianGrid stroke={"#dedede"} strokeWidth={0.5} />
          <XAxis
            dataKey="period"
            tick={{ fontSize: "0.8rem", fill: "#999" }}
            tickLine={{ stroke: "#dedede" }}
            axisLine={{ stroke: "#bbb" }}
            padding={{ left: 40, right: 40 }}
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
          {agesArr.map((age: string, i: number) => (
            <Line
              type="monotone"
              key={age}
              dataKey={age}
              dot={{ r: 1.5 }}
              fill={colorArr[i]}
              stroke={colorArr[i]}
            />
          ))}
        </LineChart>
      )}
    </div>
  );
};

export default Chart;
