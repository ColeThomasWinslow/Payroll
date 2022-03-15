const asyncHandler = require("express-async-handler");

const Employee = require("../models/employeeModel");
const User = require("../models/userModel");

// Get employees
// GET /api/employees
// Auth Required
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({ user: req.user.id });
  res.status(200).json(employees);
});

// Set employees
// POST /api/employees
// Auth Required
const setEmployee = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please Add a Name field");
  }
  const employee = await Employee.create({
    name: req.body.name,
    user: req.user.id,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    category: req.body.category,
  });
  res.status(200).json(employee);
});

// Updated employees
// PUT /api/employees/:id
// Auth Required
const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error("employee Not Found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User Not found");
  }
  if (employee.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedEmployee);
});

// Delete Employees
// DELETE /api/Employees/:id
// Auth Required
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(400);
    throw new Error("employee Not Found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User Not found");
  }
  if (employee.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  await employee.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEmployees,
  setEmployee,
  updateEmployee,
  deleteEmployee,
};
