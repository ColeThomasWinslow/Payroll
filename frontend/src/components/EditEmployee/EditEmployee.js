import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { reset, oneEmployee } from "../../features/employees/employeeSlice";
import { useSelector, useDispatch } from "react-redux";
import EditEmployeeForm from "./EditEmployeeForm";
import Spinner from "../Spinner";
function EditEmployee() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { employees, isError, message, isLoading } = useSelector(
    (state) => state.employee
  );
  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }
    dispatch(oneEmployee(id));
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, id]);

  return (
    <>
      <Title>
        <h2>Edit Employee</h2>
      </Title>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          employees.map((items) => {
            return <EditEmployeeForm key={items._id} employee={items} />;
          })
        )}
      </Container>
    </>
  );
}

export default EditEmployee;
const Container = styled.div`
  display: flex;
  justify-content: center;
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
