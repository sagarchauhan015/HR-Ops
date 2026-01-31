import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">HR Ops</h1>
        <span className="tagline">Internal HR Management</span>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Employees</Link>
        <Link to="/attendance">Attendance</Link>
      </div>
    </nav>
  );
}
