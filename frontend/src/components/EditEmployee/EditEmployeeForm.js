import styled from "styled-components";
import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
import {
  deleteEmployee,
  updateEmployee,
} from "../../features/employees/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Spinner from "../Spinner";
import { reset, oneEmployee } from "../../features/employees/employeeSlice";
function EditEmployeeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Success, setSuccess] = useState(false);
  const [name, setName] = useState();
  const [EMid, setEMid] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [category, setCategory] = useState();
  const [salary, setSalary] = useState();

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
      const Employee = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        category: category,
        salary: salary,
      };
      dispatch(updateEmployee(Employee));
      setSuccess(true);
      setTimeout(function () {
        setSuccess(false);
      }, 3000);
    }
  };

  const onDelete = () => {
    dispatch(deleteEmployee(id));
    navigate("/Employees");
  };
  const { id } = useParams();

  const { employees, isError, message, isLoading } = useSelector(
    (state) => state.employee
  );

  useEffect(() => {
    setEMid(id);

    // if (isError) {
    //   console.log(message);
    // }
    dispatch(reset());
    dispatch(oneEmployee(id));
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, id]);

  return (
    <div className="Container">
      <div style={{ minHeight: "100vh" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          employees.slice(0, 1).map((employee) => {
            return (
              <div>
                <Card>
                  <Delete className="close btn" onClick={onDelete}>
                    Delete Employee Data
                  </Delete>
                  <FormBox onSubmit={onSubmit}>
                    <FadeIn delay="20">
                      <InfoSection>
                        <label>Employee Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          defaultValue={`${name ? name : employee.name}`}
                          placeholder="Enter Name Of Employee"
                        />
                      </InfoSection>
                      <InfoSection>
                        <label>Employee Phone Number</label>
                        <input
                          defaultValue={`${phone ? phone : employee.phone}`}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number"
                        />
                      </InfoSection>
                      <InfoSection>
                        <label>Employee Email</label>
                        <input
                          defaultValue={`${email ? email : employee.email}`}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </InfoSection>
                      <InfoSection>
                        <label>Business Category</label>
                        <select
                          defaultValue={`${
                            category ? category : employee.category
                          }`}
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
                          defaultValue={`${salary ? salary : employee.salary}`}
                          onChange={(e) => setSalary(e.target.value)}
                          type="Number"
                        />
                      </InfoSection>
                      <AddEmployeeBtn type="submit">
                        Save Employee
                      </AddEmployeeBtn>
                    </FadeIn>
                  </FormBox>
                  {Success && <p>Employee Was Saved</p>}
                </Card>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default EditEmployeeForm;
const Delete = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #b92626;
  z-index: 12;
  font-size: 12px;
  margin: 10px;
  height: 50px;
  font-weight: bold;
  &:hover {
    opacity: 80%;
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

const FormBox = styled.form`
  width: 80vw;
  max-width: 450px;
  background: #f4f4f4;
  padding: 15px;
  box-shadow: 2px 0px 10px #d6d6d6;
`;

const Card = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #d6d6d6;
  margin-bottom: 18px;
  align-employee: center;
  background: #f4f4f4;
  width: 80vw;
  max-width: 450px;
`;
