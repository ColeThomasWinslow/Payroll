import React from "react";
import styled from "styled-components";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
import { deleteEmployee } from "../../features/employees/employeeSlice";
import { useDispatch } from "react-redux";

function EditEmployeeForm({ employee }) {
  // const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onDelete = () => {
    dispatch(deleteEmployee(employee._id));
    navigate("/Employees");
  };
  return (
    <div className="Container">
      <div style={{ minHeight: "100vh" }}>
        <Card>
          <Delete className="close btn" onClick={onDelete}>
            Delete Employee Data
          </Delete>
          <FormBox onSubmit={onSubmit}>
            <FadeIn delay="20">
              <InfoSection>
                <label>Employee Name</label>
                <input
                  defaultValue={employee.name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name Of Employee"
                />
              </InfoSection>
              <InfoSection>
                <label>Employee Phone Number</label>
                <input
                  defaultValue={employee.phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </InfoSection>
              <InfoSection>
                <label>Employee Email</label>
                <input
                  defaultValue={employee.email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </InfoSection>
              <InfoSection>
                <label>Business Category</label>
                <select
                  defaultValue={employee.category}
                  // onChange={(e) => setCategory(e.target.value)}
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
                  defaultValue={employee.salary}
                  // onChange={(e) => setSalary(e.target.value)}
                  type="Number"
                />
              </InfoSection>
              <AddEmployeeBtn>Save Employee</AddEmployeeBtn>
            </FadeIn>
          </FormBox>
        </Card>
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
