import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../features/auth/authSlice";
function AuthCont() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <AuthBox>
      {user && (
        <UserBox>
          <p>{user && user.name}</p>
          <button onClick={onLogout}>Sign Out</button>
        </UserBox>
      )}
    </AuthBox>
  );
}

export default AuthCont;
const AuthBox = styled.div`
  background: #f4f4f4;
  padding: 3px 8px;
  box-shadow: 0px 0px 5px grey;
`;
const UserBox = styled.div`
  display: flex;
  width: 90vw;
  max-width: 250px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: grey;
  button {
    font-size: 12px;
    padding: 4px;
    width: 80px;
    border-radius: 5px;
    background: #c4c4c4;
    color: white;
    border: none;
    font-weight: bold;
  }
`;
