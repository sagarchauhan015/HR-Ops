import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function EmployeesPage() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <EmployeeForm onAdded={()=>setRefresh(!refresh)} />
      <EmployeeList refreshTrigger={refresh} />
    </>
  );
}
