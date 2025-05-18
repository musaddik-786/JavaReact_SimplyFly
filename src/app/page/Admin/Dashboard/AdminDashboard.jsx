import React from 'react';
import './AdminDashboard.css'; 
import { useNavigate } from 'react-router-dom';
import addFlightImg from '../../images/add.jpg';  
import updateFlightImg from '../../images/add.jpg';
import flightOwnerImg from '../../images/add.jpg';
import viewFlightsImg from '../../images/add.jpg';
import scheduleFlightImg from '../../images/add.jpg';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import DashCard from '../../../Components/DashCard'; // Import the new DashCard component


const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminNavbar /> 
      <div className="admin-dashboard-container">
        <aside className="admin-sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li onClick={() => navigate('/airport-related')}>Airports</li>
            <li onClick={() => navigate('/airline-related')}>Airlines</li>
            <li onClick={() => navigate('/flight-owner-related')}>Flight Owners</li>
            <li onClick={() => navigate('/get-bookings')}>All Bookings</li>
            <li onClick={() => navigate('/get-customers')}>All Customers</li>
          </ul>
        </aside>

        <main className="admin-main-content">
          <h1>Welcome to the Admin Dashboard</h1>
          <div className="admin-cards-container">
            <DashCard
              image={addFlightImg}
              title="Airports"
              onClick={() => navigate('/airport-related')}
            />
            <DashCard
              image={updateFlightImg}
              title="Airlines"
              onClick={() => navigate('/airline-related')}
            />
            <DashCard
              image={flightOwnerImg}
              title="Flight Owners"
              onClick={() => navigate('/flight-owner-related')}
            />
            <DashCard
              image={viewFlightsImg}
              title="All Bookings"
              onClick={() => navigate('/get-bookings')}
            />
            <DashCard
              image={scheduleFlightImg}
              title="All Customers"
              onClick={() => navigate('/get-customers')}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;