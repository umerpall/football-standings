"use client";

// import { useEffect, useState, useCallback, useRef } from "react";
import data from "../data.json";
import ReactFlow, { Background } from "reactflow";

const FlowChart = ({ allRankedLeagues }: any) => {
  const initialEdges = data.initialEdges;
  const initialNodes: any = [
    {
      id: "leagues",
      sourcePosition: "right",
      type: "input",
      data: { label: "Leagues" },
      position: { x: 0, y: 100 },
    },
    {
      id: "ligue_1",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[0][0].group },
      position: { x: 250, y: -200 },
    },
    {
      id: "bundesliga",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[1][0].group },
      position: { x: 250, y: -100 },
    },
    {
      id: "serie_a",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[2][0].group },
      position: { x: 250, y: 50 },
    },
    {
      id: "premier_league",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[3][0].group },
      position: { x: 250, y: 200 },
    },
    {
      id: "la_liga",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[4][0].group },
      position: { x: 250, y: 350 },
    },
    {
      id: "league_to_1",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[0][0].team.name },
      position: { x: 500, y: -300 },
    },
    {
      id: "league_to_2",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[0][1].team.name },
      position: { x: 500, y: -250 },
    },
    {
      id: "league_to_3",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[0][2].team.name },
      position: { x: 500, y: -200 },
    },
    {
      id: "league_to_4",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[1][0].team.name },
      position: { x: 500, y: -150 },
    },
    {
      id: "league_to_5",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[1][1].team.name },
      position: { x: 500, y: -100 },
    },
    {
      id: "league_to_6",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[1][2].team.name },
      position: { x: 500, y: -50 },
    },
    {
      id: "league_to_7",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[2][0].team.name },
      position: { x: 500, y: 0 },
    },
    {
      id: "league_to_8",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[2][1].team.name },
      position: { x: 500, y: 50 },
    },
    {
      id: "league_to_9",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[2][2].team.name },
      position: { x: 500, y: 100 },
    },
    {
      id: "league_to_10",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[3][0].team.name },
      position: { x: 500, y: 150 },
    },
    {
      id: "league_to_11",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[3][1].team.name },
      position: { x: 500, y: 200 },
    },
    {
      id: "league_to_12",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[3][2].team.name },
      position: { x: 500, y: 250 },
    },
    {
      id: "league_to_13",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[4][0].team.name },
      position: { x: 500, y: 300 },
    },
    {
      id: "league_to_14",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[4][1].team.name },
      position: { x: 500, y: 350 },
    },
    {
      id: "league_to_15",
      sourcePosition: "right",
      targetPosition: "left",
      data: { label: allRankedLeagues[4][2].team.name },
      position: { x: 500, y: 400 },
    },
  ];
  //   const [rankedTeams, setRankedTeams] = useState([]);
  //   useEffect(() => {
  //     setRankedTeams(allRankedLeagues);
  //   }, [allRankedLeagues]);
  console.log(initialNodes);

  return (
    <>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background />
      </ReactFlow>
    </>
  );
};

export default FlowChart;
