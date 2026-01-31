import { useEffect, useState } from "react";
import api from "../api";

export default function DashboardPage() {
  const [stats, setStats] = useState({ totalEmployees: 0, totalAttendance: 0, totalPresentDays: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/attendance/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Total Employees: {stats.totalEmployees}</p>
      <p>Total Attendance Records: {stats.totalAttendance}</p>
      <p>Total Present Days: {stats.totalPresentDays}</p>
    </div>
  );
}
