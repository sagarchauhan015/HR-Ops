import { useEffect, useState } from "react";
import api from "../api";
import Loader from "./Loader";
import EmptyState from "./EmptyState";

export default function AttendanceList() {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterDate, setFilterDate] = useState("");
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employees");
        setEmployees(res.data);
        if (res.data.length) setEmployeeId(res.data[0]._id);
      } catch (err) {
        console.error("Error fetching employees:", err);
        setMsg({ text: "Failed to load employees", type: "error" });
      }
    };
    fetchEmployees();
  }, []);

  const presentDays = records.filter(r => r.status === "Present").length;
  const fetchAttendance = async () => {
    if (!employeeId) return;
    setLoading(true);
    try {
      const url = filterDate
        ? `/attendance/${employeeId}/${filterDate}`
        : `/attendance/${employeeId}`;
      const res = await api.get(url);
      setRecords(res.data);
      if (!res.data.length) setMsg({ text: "No records found", type: "info" });
      else setMsg(null);
    } catch (err) {
      console.error(
        "Fetch attendance error:",
        err.response?.data || err.message,
      );
      setMsg({ text: "Failed to fetch attendance", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Attendance Records</h3>

      {msg && <div className={`center ${msg.type}`}>{msg.text}</div>}

      <label>Employee:</label>
      <select
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        {employees.map((emp) => (
          <option key={emp._id} value={emp._id}>
            {emp.fullName} ({emp.department})
          </option>
        ))}
      </select>

      <label>Filter by Date:</label>
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />

      <button onClick={fetchAttendance}>Fetch Attendance</button>

      <p>
        <strong>Total Present Days:</strong> {presentDays}
      </p>


      {loading && <Loader />}
      {!loading && !records.length && (
        <EmptyState text="No attendance records found." />
      )}

      {records.map((r) => (
        <div key={r._id} className="list-item">
          <div>{new Date(r.date).toDateString()}</div>
          <strong>{r.status}</strong>
        </div>
      ))}
    </div>
  );
}
