import { useState } from "react";
import api from "../api";

export default function EmployeeForm({ onAdded }) {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
  });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees", form);
      setForm({ employeeId: "", fullName: "", email: "", department: "" });
      onAdded();
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error adding employee");
    }
  };

  return (
    <form className="card form-card" onSubmit={submit}>
      <div className="form-header">
        <h3>Add New Employee</h3>
        <p className="subheader">Enter employee details below</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Employee ID</label>
          <input
            placeholder="e.g. RJ1001"
            value={form.employeeId}
            onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            placeholder="Sagar Chauhan"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="sagar@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            placeholder="Engineering / HR / Sales"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            required
          />
        </div>
      </div>

      {error && <div className="message error">{error}</div>}

      <button className="primary-btn">Add Employee</button>
    </form>
  );
}
