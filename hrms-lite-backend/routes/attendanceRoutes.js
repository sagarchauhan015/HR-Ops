const express = require("express");
const router = express.Router();
const controller = require("../controllers/attendanceController");

router.post("/", controller.markAttendance);
router.get("/stats", controller.getStats);
router.get("/:employeeId", controller.getAttendanceByEmployee);
router.get("/:employeeId/:date", controller.getAttendanceByDate);




module.exports = router;
