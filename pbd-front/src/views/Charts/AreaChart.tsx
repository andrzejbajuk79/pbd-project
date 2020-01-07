import * as React from "react";
import {
  AreaChart as Chart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { HistorianDataType } from "../../templates/App";

export interface AreaChartProps {
  data: HistorianDataType[];
}

const AreaChart: React.SFC<AreaChartProps> = ({ data }) => {
  return (
    <Chart width={1500} height={600} data={data}>
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#829Cd0" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#829Cd0" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="TANK1_WYSOKOSC"
        stroke="#829Cd0"
        fillOpacity={1}
        fill="url(#colorValue)"
      />
    </Chart>
  );
};

export default AreaChart;
