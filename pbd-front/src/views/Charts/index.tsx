import React, { useState } from "react";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import { HistorianDataType, HistorianData2Type } from "../../templates/App";
import * as S from "./styled";

interface Props {
  data: HistorianDataType[];
  data2: HistorianData2Type[];
}

const Charts: React.FC<Props> = ({ data, data2 }) => {
  const [selectedChart, selectChart] = useState("area");

  return (
    <S.Wrapper>
      <S.BtnsWrapper>
        <S.Button
          onClick={() => selectChart("area")}
          isSelected={selectedChart === "area"}
        >
          Wykres obszarowy "raw data"
        </S.Button>
        <S.Button
          onClick={() => selectChart("line")}
          isSelected={selectedChart === "line"}
        >
          Wykres liniowy "calculated data"
        </S.Button>
      </S.BtnsWrapper>

      {selectedChart === "area" && <AreaChart data={data} />}
      {selectedChart === "line" && <LineChart data={data2} />}
    </S.Wrapper>
  );
};

export default Charts;
