import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../Icons/Dashboard.svg";
import AddNew from "../../Icons/AddNew.svg";
import Employee from "../../Icons/Employee.svg";
import NewUser from "../../Icons/AddUser.svg";
import styled from "styled-components";
import { useSelector } from "react-redux";
function NavElements() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <NavElementsCont>
          <Link to="/">
            <img src={Dashboard} alt="Dashboard" />
            <span>Dashboard</span>
          </Link>
          <Link to="/Add">
            <img src={AddNew} alt="Add New" />
            <span>Add New Employee</span>
          </Link>
          <Link to="/Employees">
            <img src={Employee} alt="Employees" />
            <span>Employees</span>
          </Link>
        </NavElementsCont>
      ) : (
        <NavElementsCont>
          <Link to="/Register">
            <img src={NewUser} alt="NewUser" />
            <span>Create A Account</span>
          </Link>
          <Link to="/Login">
            <img src={Employee} alt="Employees" />
            <span>Login</span>
          </Link>
        </NavElementsCont>
      )}
    </>
  );
}

export default NavElements;
const NavElementsCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90vw;
  max-width: 700px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    span {
      margin-left: 10px;
      font-weight: bold;
      font-size: 14px;
    }
    img {
      height: 18px;
    }
  }
  @media only screen and (max-width: 950px) {
    a {
      margin-top: 20px;
      margin-bottom: 10px;
      img {
        height: 20px;
      }
    }
    span {
      display: none;
    }
  }
`;
