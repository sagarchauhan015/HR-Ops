import { useEffect, useState } from "react";
import api from "../api";

export default function AttendanceForm({ onMarked }) {
  const [employees, setEmployees] = useState([]);
  const [data, setData] = useState({
    employee: "",
    date: "",
    status: "Present",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    api.get("/employees").then((res) => {
      setEmployees(res.data);
      if (res.data.length)
        setData((d) => ({ ...d, employee: res.data[0]._id }));
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/attendance", data);
      const message =
        res.data?.message ||
        (res.status === 201
          ? "Attendance marked successfully"
          : "Attendance updated");
      setMsg({ text: message, type: "success" });
      onMarked();
      setData((d) => ({ ...d, date: "" }));
    } catch (err) {
      const message =
        err.response?.data?.message || "Attendance already marked";
      setMsg({ text: message, type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Mark Attendance</h3>
      {msg && <div className={`center ${msg.type}`}>{msg.text}</div>}

      <select
        value={data.employee}
        onChange={(e) => setData({ ...data, employee: e.target.value })}
      >
        {employees.map((emp) => (
          <option key={emp._id} value={emp._id}>
            {emp.fullName}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        required
      />
      <select
        value={data.status}
        onChange={(e) => setData({ ...data, status: e.target.value })}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}
