import React from 'react';
import './FlightOwnerDashboard.css';
import { useNavigate } from 'react-router-dom';
import airportsImg from '../../images/Airport2.jpeg';
import flightsMgmtImg from '../../images/FlightsManagement.jpeg';
import schedulesImg from '../../images/FlightSchedule.jpeg';
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import DashCard from '../../../Components/DashCard'; 

const FlightOwnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <FlightOwnerNavbar />
      <div className="flightowner-dashboard-container">
        <aside className="flightowner-sidebar">
          <h2>Flight Owner Panel</h2>
          <ul>
            <li onClick={() => navigate('/get-airports')}>Get Airports Information</li>
            <li onClick={() => navigate('/flights-management')}>Flights Management</li>
            <li onClick={() => navigate('/flight-schedules-management')}>Flight Schedules Management</li>
            {/* <li onClick={() => navigate('/bookings-customer')}>Bookings of Customer</li> */}
          </ul>
        </aside>

        <main className="flightowner-main-content">
          <h1>Welcome to the Flight Owner Dashboard</h1>
          <div className="flightowner-cards-container">
            <DashCard
              image={airportsImg}
              title="Get Airports Information"
              onClick={() => navigate('/get-airports')}
            />
            <DashCard
              image={flightsMgmtImg}
              title="Flights Management"
              onClick={() => navigate('/flights-management')}
            />
            <DashCard
              image={schedulesImg}
              title="Flight Schedules Management"
              onClick={() => navigate('/flight-schedules-management')}
            />
            {/* <DashCard
              image={bookingsImg}
              title="Bookings of Customer"
              onClick={() => navigate('/bookings-customer')}
            /> */}
           
          </div>
        </main>
      </div>
    </div>
  );
};

export default FlightOwnerDashboard;
