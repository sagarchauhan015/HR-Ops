import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">HR Ops</h1>
        <span className="tagline">Internal HR Management</span>
      </div>

      <div className="nav-links">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Employees</NavLink>
        <NavLink to="/attendance" className={({ isActive }) => isActive ? 'active' : ''}>Attendance</NavLink>
      </div>
    </nav>
  );
}
