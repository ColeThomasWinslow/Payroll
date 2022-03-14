import React, { useState } from "react";
import FadeIn from "react-fade-in";
import EmployeeCard from "./EmployeeCard";
import styled from "styled-components";
function Employees() {
  const TestEmployees = [
    {
      id: 1,
      name: "Cole Winslow",
      phone: "6030800888",
      email: "ctwinslow7@gmail.com",
      cat: "management",
      salary: 80000,
    },
    {
      id: 2,
      name: "John Doe",
      phone: "6030056678",
      email: "JohnDoe@gmail.com",
      cat: "marketing",
      salary: 95000,
    },
    {
      id: 3,
      name: "Tim Somethin",
      phone: "6045667888",
      email: "Tim@gmail.com",
      cat: "sales",
      salary: 60000,
    },
    {
      id: 4,
      name: "Berhta dsfsafca",
      phone: "4059967888",
      email: "bertha@gmail.com",
      cat: "accounting",
      salary: 65000,
    },
  ];
  const [SearchName, setSearchName] = useState("");
  const [Employees, setEmployees] = useState(TestEmployees);

  return (
    <>
      <Title>
        <h2>Company Employees</h2>
      </Title>
      <div className="Page">
        <div className="Container">
          <EmployeesCont>
            <SearchCont>
              <h3>Search For Employees</h3>
              <input
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Employee Name"
              />
            </SearchCont>
            <EmployeeList>
              <FadeIn delay="80">
                {Employees.map((employee) => {
                  return <EmployeeCard key={employee.id} employee={employee} />;
                })}
              </FadeIn>
            </EmployeeList>
          </EmployeesCont>
        </div>
      </div>
    </>
  );
}

export default Employees;
const SearchCont = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 0px 5px #d6d6d6;
  width: 90vw;
  max-width: 350px;

  input {
    border: none;
    box-shadow: 0px 0px 1px;
    padding: 10px;
  }
  h3 {
    margin: 0px;
    margin-bottom: 15px;
  }
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
const EmployeeList = styled.div``;
const EmployeesCont = styled.div`
  display: flex;
  align-items: flex-start;
  height: 82vh;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: space-evenly;
`;
