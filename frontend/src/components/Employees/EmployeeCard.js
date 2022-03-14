import React from "react";
import styled from "styled-components";
import Employee from "../../Icons/Employee.svg";
import { Link } from "react-router-dom";
function EmployeeCard({ employee }) {
  return (
    <Card>
      <BusinessCat>{employee.cat}</BusinessCat>
      <CardBody>
        <CatImg>
          <img src={Employee} alt="Employee" />
        </CatImg>
        <CardInfo>
          <Link to={`/Employees/${employee.id}`}>
            <h2>{employee.name}</h2>
          </Link>
          <ContactBox>
            <p>{employee.email}</p>
            <p className="Number">{employee.phone}</p>
          </ContactBox>
          <Salary>${employee.salary}</Salary>
        </CardInfo>
      </CardBody>
    </Card>
  );
}

export default EmployeeCard;

const ContactBox = styled.div`
  display: flex;
  width: 100%;

  flex-wrap: wrap;
  .Number {
    margin-left: 10px;
  }
`;
const CardBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;
const BusinessCat = styled.p`
  text-align: right;
  width: 100%;
  margin: 0px;
  font-size: 12px;
  background: linear-gradient(#e1e1e1, #d1d1d1);
  padding: 5px;
  font-weight: bold;
  color: white;
`;
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
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 60%;
  h2 {
    margin: 0px;
  }
  p {
    color: grey;
    font-size: 12px;
    font-weight: bold;
    margin: 0px;
  }
  a {
    text-decoration: none;
    color: grey;
  }
`;
const Card = styled.div`
  display: flex;

  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #d6d6d6;
  margin-bottom: 18px;
  align-items: center;
  background: #f4f4f4;
  width: 80vw;
  max-width: 450px;
`;
const Salary = styled.p`
  padding: 2px;
  width: 100%;
`;
