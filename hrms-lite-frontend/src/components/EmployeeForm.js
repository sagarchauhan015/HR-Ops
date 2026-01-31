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
    <form className="card" onSubmit={submit}>
      <h3>Add Employee</h3>
      <input
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
        required
      />
      <input
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        placeholder="Department"
        value={form.department}
        onChange={(e) => setForm({ ...form, department: e.target.value })}
        required
      />
      {error && <p className="error">{error}</p>}
      <button>Add</button>
    </form>
  );
}
