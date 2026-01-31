import { useEffect, useState } from "react";
import api from "../api";
import Loader from "../components/Loader";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalAttendance: 0,
    totalPresentDays: 0,
  });
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

  if (loading) return <Loader />;

  return (
    <div className="dashboard-container">
      <h2 className="page-title">HR Overview</h2>

      <div className="stats-grid">
        <div className="stat-card employees">
          <div className="stat-title">Total Employees</div>
          <div className="stat-value">{stats.totalEmployees}</div>
          <div className="stat-desc">Active staff in organization</div>
        </div>

        <div className="stat-card attendance">
          <div className="stat-title">Attendance Records</div>
          <div className="stat-value">{stats.totalAttendance}</div>
          <div className="stat-desc">All recorded entries</div>
        </div>

        <div className="stat-card present">
          <div className="stat-title">Total Present Days</div>
          <div className="stat-value">{stats.totalPresentDays}</div>
          <div className="stat-desc">Overall employee presence</div>
        </div>
      </div>

      <div className="dashboard-note card">
        <h3>System Insight</h3>
        <p>
          This panel provides a quick snapshot of employee strength and attendance activity.
          Use the Attendance section to view detailed records.
        </p>
      </div>
    </div>
  );
}
