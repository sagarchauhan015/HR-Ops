const Employee = require("../models/Employee");

exports.addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find({ isActive: true });
  res.json(employees);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, { isActive: false });
  res.json({ message: "Employee deleted" });
};
