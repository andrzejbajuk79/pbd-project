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
import { HistorianData2Type } from "../../templates/App";

export interface LineChartProps {
  data: HistorianData2Type[];
}

const LineChartCalculated: React.SFC<LineChartProps> = ({ data }) => {
  return (
    <Chart width={1500} height={600} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="TANK1_WYSOKOSC" stroke="red" />
      <Line type="monotone" dataKey="TANKR_WYSOKOSC" stroke="blue" />
      <Line type="monotone" dataKey="SIM_VAR" stroke="green" />
    </Chart>
  );
};

export default LineChartCalculated;
