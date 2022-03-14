import React from "react";
import styled from "styled-components";
function EditEmployee() {
  return (
    <>
      <Title>
        <h2>Edit Employee</h2>
      </Title>
    </>
  );
}

export default EditEmployee;
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
