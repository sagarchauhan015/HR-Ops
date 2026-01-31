import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function EmployeesPage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="page-layout">
      <div className="left-panel">
        <EmployeeForm onAdded={() => setRefresh(!refresh)} />
      </div>

      <div className="right-panel">
        <EmployeeList refreshTrigger={refresh} />
      </div>
    </div>
  );
}
