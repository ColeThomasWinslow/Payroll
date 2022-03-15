import React, { useEffect } from "react";
import ChartComp from "./ChartComp";
import Totals from "./Totals";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { reset, getEmployees } from "../../features/employees/employeeSlice";
import { useSelector, useDispatch } from "react-redux";
function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { employees, isError, message } = useSelector(
    (state) => state.employee
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/Login");
    }
    dispatch(getEmployees());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      <Title>
        <h2>Dashboard</h2>
      </Title>
      <div className="Page">
        <div className="Container">
          <DashboardCont>
            <Totals employees={employees} />
            <ChartComp employees={employees} />
          </DashboardCont>
        </div>
      </div>
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
    font-style: italic;
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
