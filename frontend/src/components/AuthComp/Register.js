import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
function Register() {
  return (
    <>
      <AddNewCont>
        <FormBox>
          <Title>
            <h2>Register Account</h2>
            <p>please create a account</p>
          </Title>
          <FadeIn delay="20">
            <InfoSection>
              <label>Company Name</label>
              <input placeholder="Company Name" />
            </InfoSection>
            <InfoSection>
              <label>Email</label>
              <input placeholder="Enter Email" />
            </InfoSection>
            <InfoSection>
              <label>Password</label>
              <input placeholder="Create A Password" />
            </InfoSection>
            <InfoSection>
              <label>Confirm Password</label>
              <input placeholder="Confirm Password" />
            </InfoSection>
            <SignInBtn>Sign In</SignInBtn>
          </FadeIn>
        </FormBox>
      </AddNewCont>
    </>
  );
}

export default Register;
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
  margin-top: 35px;
  cursor: pointer;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

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
  align-items: flex-start;
  height: 85vh;
  padding-top: 40px;
`;
const FormBox = styled.div`
  width: 80vw;

  max-width: 450px;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 0px 5px #d6d6d6;
`;
