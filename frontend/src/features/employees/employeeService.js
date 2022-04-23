import axios from "axios";

const API_URL = "/api/employees/";

// Create Employee
const createEmployee = async (employeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, employeeData, config);
  return response.data;
};
// Get Employee
const getEmployees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};
// One
const getOneEmployee = async (employeeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + employeeId, config);
  return response.data;
};
// Update
const updateOneEmployee = async (employeeId, employeeData, token) => {
  console.log(employeeData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + employeeId, employeeData, config);
  return response.data;
};
// delete
const deleteEmployees = async (employeeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + employeeId, config);
  return response.data;
};
const employeeService = {
  createEmployee,
  getEmployees,
  getOneEmployee,
  deleteEmployees,
  updateOneEmployee,
};
export default employeeService;
