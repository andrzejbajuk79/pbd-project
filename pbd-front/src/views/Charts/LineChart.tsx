import * as React from "react";
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { HistorianDataType } from "../../templates/App";

export interface LineChartProps {
  data: HistorianDataType[];
}

const LineChart: React.SFC<LineChartProps> = ({ data }) => {
  return (
    <Chart width={1500} height={600} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#829Cd0" />
    </Chart>
  );
};

export default LineChart;
