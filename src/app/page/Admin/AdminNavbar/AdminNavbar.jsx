import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css'; 

const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    
    navigate('/user/login');
  };
  return (
    <nav className="admin-navbar">
      <div className="navbar-brand">
        <h2>Admin Dashboard</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/airport-related">Airport Related</Link></li>
        <li><Link to="/add-flight-owner">Flight Owners</Link></li>
        <li><Link to="/view-flights">View Flights</Link></li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;
