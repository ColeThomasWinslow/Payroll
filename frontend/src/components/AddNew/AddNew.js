import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createEmployee } from "../../features/employees/employeeSlice";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
function AddNew() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("sales");
  const [salary, setSalary] = useState("");

  const [Success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      (name === "") |
      (email === "") |
      (phone === "") |
      (category === "") |
      (salary === "")
    ) {
      toast.error("Please Fill Out All Fields");
    } else {
      setSuccess(true);
      setTimeout(function () {
        setSuccess(false);
      }, 3000);
    }
    dispatch(createEmployee({ name, email, phone, category, salary }));
    setName("");
    setEmail("");
    setPhone("");
    setCategory("sales");
    setSalary("");
  };
  return (
    <>
      <Title>
        <h2>+ Add New Employee</h2>
      </Title>
      <AddNewCont>
        <FormBox onSubmit={onSubmit}>
          <FadeIn delay="20">
            <InfoSection>
              <label>Employee Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name Of Employee"
              />
            </InfoSection>
            <InfoSection>
              <label>Employee Phone Number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
            </InfoSection>
            <InfoSection>
              <label>Employee Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </InfoSection>
            <InfoSection>
              <label>Business Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="accounting">Accounting</option>
                <option value="management">Management</option>
              </select>
            </InfoSection>
            <InfoSection>
              <label>Salary</label>
              <input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                type="Number"
              />
            </InfoSection>
            <AddEmployeeBtn>+ Add Employee</AddEmployeeBtn>
          </FadeIn>
        </FormBox>
        {Success && <p>Employee Was Saved</p>}
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
const FormBox = styled.form`
  width: 80vw;
  max-width: 450px;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 0px 5px #d6d6d6;
`;
