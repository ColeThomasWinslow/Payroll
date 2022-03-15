const express = require("express");
const router = express.Router();
const {
  getEmployees,
  deleteEmployee,
  setEmployee,
  updateEmployee,
} = require("../controllers/employeeController");
const { protect } = require("../middleware/authMiddleware");
router.route("/").get(protect, getEmployees).post(protect, setEmployee);

router
  .route("/:id")
  .put(protect, updateEmployee)
  .delete(protect, deleteEmployee);

module.exports = router;
