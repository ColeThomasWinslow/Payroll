import React from "react";
import PayrollLogo from "../../Icons/PayrollLogo.svg";
import styled from "styled-components";
function Logo() {
  return (
    <LogoCont>
      <img width="180px" src={PayrollLogo} alt="Payroll Logo" />
    </LogoCont>
  );
}

export default Logo;
const LogoCont = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin: 0px;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
