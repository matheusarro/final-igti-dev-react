import { useEffect, useState } from "react";
import { PageContainer, PageHeader } from "../components/atoms"
import { YearSelector } from "../components/molecules";
import { selectableYears } from "../helpers";
import { iTeamResult } from "../interfaces";
import { getStandingsInfo } from "../services";

const ChampionshipStandings = () => {
  const [yearsList, setYearsList] = useState<number[]>(selectableYears());
  const [yearIndex, setYearIndex] = useState<number>(selectableYears().length-1);
  const [standingsList, setStandingsList] = useState<iTeamResult[]>();

  // useEffect(() => {
  //   setYearsList(selectableYears());
  // }, []);

  useEffect(() => {
    const getStandings = async () => {
      const standings : iTeamResult[] = await getStandingsInfo(yearsList[yearIndex]);
      setStandingsList(standings);
    }

    getStandings();
  }, [yearsList, yearIndex]);

  const handleYearSelection = (event: any) => {
    const clickType = event.target.id;

    if (clickType === '+' && yearIndex < yearsList.length - 1) {
      setYearIndex(yearIndex + 1);
    }
    if (clickType === '-' && yearIndex > 0) {
      setYearIndex(yearIndex - 1);
    }
  };

  return (
    <>
      <header>
        <PageHeader>CAMPEONATO BRASILEIRO</PageHeader>
      </header>
      <main>
        <PageContainer>
          <YearSelector year={yearsList[yearIndex]} clickHandler={handleYearSelection} />
        </PageContainer>
      </main>
      {/* <footer>
        FOOTER
      </footer> */}
    </>
  )
};

export default ChampionshipStandings;