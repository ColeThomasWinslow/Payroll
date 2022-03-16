const express = require("express");
const router = express.Router();
const {
  getEmployees,
  deleteEmployee,
  setEmployee,
  getOneEmployee,
  updateEmployee,
} = require("../controllers/employeeController");
const { protect } = require("../middleware/authMiddleware");
router.route("/").get(protect, getEmployees).post(protect, setEmployee);

router
  .route("/:id")
  .get(protect, getOneEmployee)
  .put(protect, updateEmployee)
  .delete(protect, deleteEmployee);

module.exports = router;
