import React from "react";
import styled from "styled-components";
import Employee from "../../Icons/Employee.svg";
import Date from "../../Icons/Date.svg";
import Money from "../../Icons/Money.svg";
import FadeIn from "react-fade-in/lib/FadeIn";
import { CommaGen } from "../../utils/CommaGen";
function Totals({ employees }) {
  const getSalary = () => {
    let salaries = [];
    employees.map((item) => {
      const salary = parseInt(item.salary);
      return salaries.push(salary);
    });
    return salaries.reduce((a, b) => a + b, 0);
  };

  const TotalSalary = getSalary();
  console.log(TotalSalary);
  return (
    <div>
      <FadeIn delay="100">
        <Card>
          <CatImg>
            <img src={Employee} alt="Employee" />
          </CatImg>
          <CardInfo>
            <h2>{employees.length}</h2>
            <p>Total amount of Employees</p>
          </CardInfo>
        </Card>
        <Card>
          <CatImg>
            <img src={Money} alt="Monthly" />
          </CatImg>
          <CardInfo>
            <h2>${CommaGen(TotalSalary / 12)}</h2>
            <p>Total Monthly Amount in Pay </p>
          </CardInfo>
        </Card>
        <Card>
          <CatImg>
            <img src={Date} alt="Date" />
          </CatImg>
          <CardInfo>
            <h2>${CommaGen(TotalSalary)}</h2>
            <p>Total Yearly Amount in Pay </p>
          </CardInfo>
        </Card>
      </FadeIn>
    </div>
  );
}

export default Totals;
const CatImg = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(#e1e1e1, #d1d1d1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  img {
    width: 25px;
    height: 25px;
  }
`;
const CardInfo = styled.div`
  margin-left: 20px;
  h2 {
    margin: 0px;
  }
  p {
    color: grey;
    font-size: 12px;
    font-weight: bold;
    margin: 0px;
    margin-top: 5px;
  }
`;
const Card = styled.div`
  display: flex;
  padding: 18px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #d6d6d6;
  margin-top: 48px;
  margin-bottom: 48px;
  align-items: center;
  background: #f4f4f4;
  width: 80vw;
  max-width: 450px;
`;
