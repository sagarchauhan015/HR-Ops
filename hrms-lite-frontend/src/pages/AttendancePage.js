import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function AttendancePage() {
  return (
    <>
      <AttendanceForm onMarked={()=>{}} />
      <AttendanceList />
    </>
  );
}
