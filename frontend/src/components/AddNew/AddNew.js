import React, { useState } from "react";

import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
function AddNew() {
  return (
    <>
      <Title>
        <h2>+ Add New Employee</h2>
      </Title>
      <AddNewCont>
        <FormBox>
          <FadeIn delay="20">
            <InfoSection>
              <label>Employee Name</label>
              <input placeholder="Enter Name Of Employee" />
            </InfoSection>
            <InfoSection>
              <label>Employee Phone Number</label>
              <input placeholder="Phone Number" />
            </InfoSection>
            <InfoSection>
              <label>Employee Email</label>
              <input placeholder="Email" />
            </InfoSection>
            <InfoSection>
              <label>Business Category</label>
              <select>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Accounting</option>
                <option>Management</option>
              </select>
            </InfoSection>
            <InfoSection>
              <label>Salary</label>
              <input type="Number" />
            </InfoSection>
            <AddEmployeeBtn>+ Add Employee</AddEmployeeBtn>
          </FadeIn>
        </FormBox>
      </AddNewCont>
    </>
  );
}

export default AddNew;
const Title = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: flex-end;
  z-index: -1;
  h2 {
    font-style: italic;
    width: 90vw;
    max-width: 200px;
    text-align: center;
    text-transform: uppercase;
    margin: 0px;
    padding: 8px;
    color: #b92626;
    font-size: 14px;
  }
`;
const AddEmployeeBtn = styled.button`
  padding: 10px;
  border: none;
  width: 100%;
  background: #b92626;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  margin-top: 15px;
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
