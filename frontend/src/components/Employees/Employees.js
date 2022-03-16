import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import EmployeeCard from "./EmployeeCard";
import styled from "styled-components";
import SkeletonLoading from "../SkeletonLoading";
import { useNavigate } from "react-router-dom";
import { reset, getEmployees } from "../../features/employees/employeeSlice";
import { useSelector, useDispatch } from "react-redux";
function Employees() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [CatActive, setCatActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { employees, isError, message, isLoading } = useSelector(
    (state) => state.employee
  );
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = employees.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(employees);
    }
  };

  const CatItems = (catValue) => {
    setCatActive(true);
    if (catValue === "all") {
      setFilteredResults(employees);
    } else {
      const filteredData = employees.filter((item) => {
        return Object.values(item.category).join("") === catValue;
      });
      setFilteredResults(filteredData);
    }
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/Login");
    }
    dispatch(getEmployees());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      <Title>
        <h2>Company Employees</h2>
      </Title>
      <div className="Page">
        <div className="Container">
          <EmployeesCont>
            <SearchCont>
              <h3>Search For Employees</h3>
              <input
                placeholder="Employee Name"
                onChange={(e) => searchItems(e.target.value)}
              />

              <SortBox>
                <select onChange={(e) => CatItems(e.target.value)}>
                  <option value="all">All Employees</option>
                  <option value="management">Management</option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="accounting">Accounting</option>
                </select>
              </SortBox>
            </SearchCont>
            <EmployeeList>
              {isLoading ? (
                <SkeletonLoading />
              ) : (
                <FadeIn delay="80">
                  {searchInput.length > 0 || CatActive
                    ? filteredResults.map((employee) => {
                        return (
                          <EmployeeCard
                            key={employee._id}
                            employee={employee}
                          />
                        );
                      })
                    : employees.map((employee) => {
                        return (
                          <EmployeeCard
                            key={employee._id}
                            employee={employee}
                          />
                        );
                      })}
                </FadeIn>
              )}
              {searchInput.length > 0 && filteredResults.length === 0 && (
                <FadeIn delay="80">
                  <BadSearch>No Employees with that name</BadSearch>
                </FadeIn>
              )}
            </EmployeeList>
          </EmployeesCont>
        </div>
      </div>
    </>
  );
}

export default Employees;

const SortBox = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  align-items: flex-start;
  select {
    border: none;
    box-shadow: 0px 0px 1px;
    padding: 5px;
    width: 100%;
  }
`;
const BadSearch = styled.p`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #d6d6d6;
  margin-bottom: 18px;
  align-items: center;
  background: #f4f4f4;
  width: 80vw;
  max-width: 450px;
  justify-content: space-evenly;
`;
const SearchCont = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 2px 0px 5px #d6d6d6;
  width: 90vw;
  max-width: 350px;
  margin: 20px;
  margin-bottom: 0px;
  input {
    border: none;
    box-shadow: 0px 0px 1px;
    padding: 10px;
  }
  h3 {
    margin: 0px;
    margin-bottom: 15px;
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
const EmployeeList = styled.div`
  height: 600px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 2px solid #f4f4f4;
  border-radius: 2px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const EmployeesCont = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: space-evenly;
  a {
    color: grey;
    text-decoration: none;
  }
`;
