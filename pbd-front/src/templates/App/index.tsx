import React, { useState, useEffect } from "react";
import Charts from "../../views/Charts";
import * as S from "./styled";

const mock = [
  {
    name: "03.12.2019  18:33:12",
    value: 51
  },
  {
    name: "03.12.2019  18:33:13",
    value: 47
  },
  {
    name: "03.12.2019  18:33:14",
    value: 44
  },
  {
    name: "03.12.2019  18:33:15",
    value: 41
  }
];

export type HistorianDataType = {
  date: string;
  TANK1_WYSOKOSC: number;
  quality: string;
};

export type HistorianData2Type = {
  date: string;
  TANK1_WYSOKOSC: number;
  TANKR_WYSOKOSC: number;
  SIM_VAR: number;
};

const App: React.FC = () => {
  const [dataFromHistorian, setHistorianData] = useState<HistorianDataType[]>(
    []
  );
  const [data2FromHistorian, setHistorianData2] = useState<
    HistorianData2Type[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/data", { method: "GET" })
      .then(res => res.json())
      .then(data => setHistorianData(data.data));

    fetch("http://localhost:8000/api/data2", { method: "GET" })
      .then(res => res.json())
      .then(data => setHistorianData2(data.data));
  }, []);

  return (
    <S.AppWrapper>
      <S.Header>
        Projekt <span>Przemysłowe Bazy Danych</span>
      </S.Header>

      {dataFromHistorian.length !== 0 ? (
        <>
          {/* <p>Nazwa danych: {dataFromHistorian.projectName}</p> */}
          <Charts data={dataFromHistorian} data2={data2FromHistorian} />
        </>
      ) : (
        <S.LoadingText>Loading...</S.LoadingText>
      )}

      <S.Footer>
        <h4>AEI, Politechika Śląska 2019/2020</h4>
        <h5>Tomasz Grzesik, Filip Lipiński, Filip Lechowicz</h5>
      </S.Footer>
    </S.AppWrapper>
  );
};

export default App;
