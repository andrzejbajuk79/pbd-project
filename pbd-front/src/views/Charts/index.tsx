import React, { useState } from "react";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import { HistorianDataType } from "../../templates/App";
import * as S from "./styled";

interface Props {
  data: HistorianDataType[];
}

const Charts: React.FC<Props> = ({ data }) => {
  const [selectedChart, selectChart] = useState("line");

  return (
    <S.Wrapper>
      <S.BtnsWrapper>
        <S.Button
          onClick={() => selectChart("line")}
          isSelected={selectedChart === "line"}
        >
          Wykres liniowy
        </S.Button>
        <S.Button
          onClick={() => selectChart("area")}
          isSelected={selectedChart === "area"}
        >
          Wykres obszarowy
        </S.Button>
      </S.BtnsWrapper>

      {selectedChart === "line" && <LineChart data={data} />}
      {selectedChart === "area" && <AreaChart data={data} />}
    </S.Wrapper>
  );
};

export default Charts;
