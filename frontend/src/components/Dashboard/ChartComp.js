import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
function ChartComp() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Sales", "Marketing", "Accounting", "Management"],
    datasets: [
      {
        label: "Employee Breakdown",
        data: [300, 150, 100, 80],
        backgroundColor: ["#00b7ff", "#ff8a2b", "#1dc547", "red"],
      },
    ],
  };
  return (
    <ChartCont>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </ChartCont>
  );
}

export default ChartComp;
const ChartCont = styled.div`
  width: 80vw;
  max-width: 450px;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 0px 5px #d6d6d6;
`;
