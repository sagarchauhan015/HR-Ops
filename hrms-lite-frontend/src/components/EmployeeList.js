import { useEffect, useState } from "react";
import api from "../api";
import Loader from "./Loader";
import EmptyState from "./EmptyState";

export default function EmployeeList({ refreshTrigger }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    setLoading(true);
    const res = await api.get("/employees");
    setEmployees(res.data);
    setLoading(false);
  };

  const remove = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, [refreshTrigger]);

  if (loading) return <Loader />;
  if (!employees.length) return <EmptyState text="No employees added yet." />;

  return (
    <div className="card list-card">
      <div className="card-header">
        <h3>Employees</h3>
        <span className="muted-text">{employees.length} total</span>
      </div>

      <div className="divider"></div>

      <div className="employee-list">
        {employees.map((emp) => (
          <div key={emp._id} className="employee-row">
            <div className="employee-info">
              <span className="employee-name">{emp.fullName}</span>
              <span className="employee-meta">
                {emp.email} • {emp.department}
              </span>
            </div>

            <button className="danger soft-danger" onClick={() => remove(emp._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
