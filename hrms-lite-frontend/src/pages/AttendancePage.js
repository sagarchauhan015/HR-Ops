import { useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function AttendancePage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="page-layout">
      {/* Left panel: Mark Attendance form */}
      <div className="left-panel">
        <AttendanceForm onMarked={() => setRefresh(!refresh)} />
      </div>

      {/* Right panel: Attendance Records list */}
      <div className="right-panel">
        <AttendanceList refreshTrigger={refresh} />
      </div>
    </div>
  );
}
