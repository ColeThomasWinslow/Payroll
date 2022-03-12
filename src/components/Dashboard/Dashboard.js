import React from "react";
import ChartComp from "./ChartComp";
import Totals from "./Totals";
import styled from "styled-components";
function Dashboard() {
  return (
    <>
      <Title>
        <h2>Dashboard</h2>
      </Title>
      <DashboardCont>
        <Totals />
        <ChartComp />
      </DashboardCont>
    </>
  );
}

export default Dashboard;
const DashboardCont = styled.div`
  display: flex;
  align-items: center;
  height: 82vh;
  width: 100%;
  flex-wrap: wrap;

  padding-bottom: 50px;
  justify-content: space-evenly;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: flex-end;
  z-index: -1;
  h2 {
    width: 90vw;
    max-width: 200px;
    text-align: center;
    text-transform: uppercase;
    margin: 0px;
    padding: 8px;
    color: #b92626;
    font-size: 14px;
  }
`;
