import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
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
  const [FakeUser, setFakeUser] = useState("");
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
      toast.error("Fields Cant be Blank");
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
  const FakeUserCreation = () => {
    function random(mn, mx) {
      return Math.random() * (mx - mn) + mn;
    }
    function randomIntFromInterval(min, max) {
      // min and max included
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function GetRandomCat() {
      const catArr = ["sales", "marketing", "accounting", "management"];
      return catArr[Math.floor(random(1, 5)) - 1];
    }
    const rndInt = randomIntFromInterval(35000, 100000);
    const rndCat = GetRandomCat();

    setName(`${FakeUser.name.first + " " + FakeUser.name.last}`);
    setEmail(FakeUser.email);
    setPhone(FakeUser.phone);
    setCategory(rndCat);
    setSalary(rndInt);
  };
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=1").then(function (response) {
      console.log(response);
      const user = response.data.results[0];
      setFakeUser(user);
    });
  }, []);

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
        <AddTestBtn onClick={FakeUserCreation}>Add Test Employee</AddTestBtn>
        {Success && <p>Employee Was Saved</p>}
      </AddNewCont>
    </>
  );
}

export default AddNew;
const AddTestBtn = styled.button`
  border: none;
  cursor: pointer;
  margin-top: 30px;
  font-weight: bold;
  &:hover {
    color: #b92626;
  }
`;
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
  &:hover {
    opacity: 80%;
  }
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

  align-items: center;
  flex-direction: column;
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
