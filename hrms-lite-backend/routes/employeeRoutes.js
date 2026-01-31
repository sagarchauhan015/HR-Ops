const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeeController");

router.post("/", controller.addEmployee);
router.get("/", controller.getEmployees);
router.delete("/:id", controller.deleteEmployee);

module.exports = router;
