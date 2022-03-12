import React from "react";
import styled from "styled-components";
import Employee from "../../Icons/Employee.svg";
import Date from "../../Icons/Date.svg";
import Money from "../../Icons/Money.svg";
function Totals() {
  return (
    <div>
      <Card>
        <CatImg>
          <img src={Employee} alt="Employee" />
        </CatImg>
        <CardInfo>
          <h2>250</h2>
          <p>Total amount of Employees</p>
        </CardInfo>
      </Card>
      <Card>
        <CatImg>
          <img src={Money} alt="Monthly" />
        </CatImg>
        <CardInfo>
          <h2>$190,450</h2>
          <p>Total Monthly Amount in Pay </p>
        </CardInfo>
      </Card>
      <Card>
        <CatImg>
          <img src={Date} alt="Date" />
        </CatImg>
        <CardInfo>
          <h2>$380,900</h2>
          <p>Total Yearly Amount in Pay </p>
        </CardInfo>
      </Card>
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
