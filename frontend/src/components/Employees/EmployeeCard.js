import React from "react";
import styled from "styled-components";
import Employee from "../../Icons/Employee.svg";
import { Link } from "react-router-dom";
import { CommaGen } from "../../utils/CommaGen";
function EmployeeCard({ employee }) {
  return (
    <Link to={`/Employees/${employee._id}`}>
      <Card>
        <BusinessCat>
          {employee.category}{" "}
          <Dot
            className={`${employee.category === "sales" && "sales"}
             ${employee.category === "management" && "management"}  ${
              employee.category === "accounting" && "accounting"
            } ${employee.category === "marketing" && "marketing"}`}
          ></Dot>
        </BusinessCat>
        <CardBody>
          <CatImg>
            <img src={Employee} alt="Employee" />
          </CatImg>
          <CardInfo>
            <h2>{employee.name}</h2>

            <ContactBox>
              <p>{employee.email}</p>
              <p className="Number">{employee.phone}</p>
              <Salary>${CommaGen(employee.salary)}</Salary>
            </ContactBox>
          </CardInfo>
        </CardBody>
      </Card>
    </Link>
  );
}

export default EmployeeCard;

const ContactBox = styled.div`
  display: flex;
  width: 100%;

  flex-wrap: wrap;
  p {
    margin-top: 2px;
    margin-bottom: 2px;
    width: 90%;
  }
`;
const CardBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;
const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  outline: 2px solid #f4f4f4;
  box-shadow: 0px 0px 3px black;
`;
const BusinessCat = styled.div`
  display: flex;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0px;
  font-size: 12px;
  background: linear-gradient(45deg, #e1e1e1, #d1d1d1);
  padding: 5px;
  font-weight: bold;
  color: white;
  .sales {
    background: linear-gradient(45deg, #00b7ff 50%, #3377af);
  }
  .management {
    background: linear-gradient(45deg, #aa0808 50%, #ff1e00);
  }
  .marketing {
    background: linear-gradient(45deg, #ff8a2b 50%, orange);
  }
  .accounting {
    background: linear-gradient(#1dc547 50%, green);
  }
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
  &:hover {
    opacity: 70%;
  }
`;
const Salary = styled.p`
  width: 100%;
  margin-top: 20px;
`;
