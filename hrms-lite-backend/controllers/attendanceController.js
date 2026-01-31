const mongoose = require("mongoose");  
const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const { employee, date, status } = req.body;
    if (!employee || !date || !status) return res.status(400).json({ message: 'Missing required fields' });

    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);

    const existing = await Attendance.findOne({
      employee,
      date: { $gte: dayStart, $lt: dayEnd }
    });

    if (existing) {
      if (existing.status === status) {
        return res.status(400).json({ message: 'Attendance already marked' });
      }

      existing.status = status;
      await existing.save();
      return res.json({ message: 'Attendance updated', attendance: existing });
    }

    const attendance = await Attendance.create({ employee, date: dayStart, status });
    res.status(201).json({ message: 'Attendance marked successfully', attendance });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAttendanceByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      return res.status(400).json({ message: "Invalid employee ID" });
    }

    const records = await Attendance
      .find({ employee: employeeId })
      .populate("employee");

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.getAttendanceByDate = async (req, res) => {
  try {
    const { employeeId, date } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      return res.status(400).json({ message: "Invalid employee ID" });
    }

    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);

    const records = await Attendance.find({
      employee: employeeId,
      date: { $gte: start, $lt: end }
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.getStats = async (req, res) => {
  try {
    const totalEmployees = await require("../models/Employee").countDocuments();
    const totalAttendance = await Attendance.countDocuments();
    const totalPresentDays = await Attendance.countDocuments({
      status: { $regex: /^present$/i }
    });

    res.json({ totalEmployees, totalAttendance, totalPresentDays });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching stats" });
  }
};


