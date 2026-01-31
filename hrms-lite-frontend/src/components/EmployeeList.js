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
    <div className="card">
      <h3>Employee List</h3>
      {employees.map((emp) => (
        <div key={emp._id} className="list-item">
          <div>
            <strong>{emp.fullName}</strong>
            <p>
              {emp.email} • {emp.department}
            </p>
          </div>
          <button className="danger" onClick={() => remove(emp._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
