import * as React from "react";
import "reactflow/dist/style.css";
import FlowChart from "./components/FlowChart";
import { getFootballStandingsData } from "./helpers/getFootballStandingsData";

export default async function Home() {
  const allRankedLeagues = await getFootballStandingsData();

  const filteredData = allRankedLeagues.map((league: any) =>
    league.response[0].league.standings[0].slice(0, 3)
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <FlowChart allRankedLeagues={filteredData} />
    </div>
  );
}
