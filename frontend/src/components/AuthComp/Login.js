import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <AddNewCont>
        <FormBox onSubmit={onSubmit}>
          <Title>
            <h2>Sign in</h2>
            <p>please sign into your account</p>
          </Title>

          <FadeIn delay="20">
            <InfoSection>
              <label>Enter email</label>
              <input
                type="text"
                className="AuthInput"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your Email"
                onChange={onChange}
              />
            </InfoSection>
            <InfoSection>
              <label>Password</label>
              <input
                type="password"
                className="AuthInput"
                id="password"
                name="password"
                value={password}
                placeholder="Enter a Password"
                onChange={onChange}
              />
            </InfoSection>
            <SignInBtn>Sign In</SignInBtn>
          </FadeIn>
        </FormBox>
        <DemoBox>
          <p>Sign In With Demo Account</p>
          <button>Demo Info</button>
        </DemoBox>
      </AddNewCont>
    </>
  );
}

export default Login;
const DemoBox = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  margin-top: 20px;
  p {
    margin: 10px;
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    color: grey;
  }
  button {
    margin-left: 10px;
    cursor: pointer;
    border: none;
    padding: 5px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    color: white;
    background: #b92626;
    border-radius: 5px;
    width: 90px;
  }
`;
const Title = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: -1;
  padding: 10px;
  h2 {
    font-style: italic;
    color: #b92626;
    text-transform: uppercase;
    margin: 0px;
    padding: 8px;
  }
  p {
    width: 100%;
    border-bottom: 2px solid #b92626;
    padding: 8px;
    padding-bottom: 20px;
    color: grey;
    font-size: 12px;
    font-weight: bold;
    margin: 0px;
    margin-bottom: 15px;
  }
`;
const SignInBtn = styled.button`
  padding: 10px;
  border: none;
  width: 100%;

  background: #b92626;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  margin-top: 45px;
  cursor: pointer;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  input,
  select {
    border: none;
    box-shadow: 0px 0px 1px;
    padding: 10px;
  }
  label {
    color: grey;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
const AddNewCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75vh;
`;
const FormBox = styled.form`
  width: 80vw;
  max-width: 450px;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 0px 5px #d6d6d6;
`;
