import React from "react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import styled from "styled-components";
import AuthCont from "./AuthCont/AuthCont";
function Navbar() {
  return (
    <>
      <NavBarCont>
        <Logo />
        <NavElements />
      </NavBarCont>
      <AuthCont />
    </>
  );
}

export default Navbar;
const NavBarCont = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-evenly;
  background: linear-gradient(#b92626, #611c1c);
`;
