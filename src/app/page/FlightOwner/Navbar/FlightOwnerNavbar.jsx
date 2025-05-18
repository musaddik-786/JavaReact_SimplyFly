// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './FlightOwnerNavbar.css';

// const FlightOwnerNavbar = () => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     localStorage.removeItem('username')
//     navigate('/user/login');
//   };

//   return (
//     <nav className="flightowner-navbar">
//       <div className="navbar-brand">
//         <h2>Flight Owner Dashboard</h2>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/flight-owner">Dashboard</Link></li>
//         <li><Link to="/get-airports">Get Airports Info</Link></li>
//         <li><Link to="/flights-management">Flights Management</Link></li>
//         <li><Link to="/flight-schedules-management">Flight Schedules</Link></li>
//         <li><Link to="/bookings-customer">Customer Bookings</Link></li>
//         <li><Link to="/flightowner-management">FlightOwner Management</Link></li>
//       </ul>
//       <button className="logout-button" onClick={handleLogout}>
//         Logout
//       </button>
//     </nav>
//   );
// };

// export default FlightOwnerNavbar;







// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './FlightOwnerNavbar.css';
// import { Dropdown, Icon } from 'semantic-ui-react';

// const FlightOwnerNavbar = () => {
//   const navigate = useNavigate();
//   const username = localStorage.getItem('username'); // Get username from localStorage
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     localStorage.removeItem('username');
//     navigate('/user/login');
//   };

//   const handleProfileUpdate = () => {
//     navigate(`/update-flightownerprofile/${username}`);
//   };

//   return (
//     <nav className="flightowner-navbar">
//       <div className="navbar-brand">
//         <h2>Flight Owner Dashboard</h2>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/flight-owner">Dashboard</Link></li>
//         <li><Link to="/get-airports">Get Airports Info</Link></li>
//         <li><Link to="/flights-management">Flights Management</Link></li>
//         <li><Link to="/flight-schedules-management">Flight Schedules</Link></li>
//         <li><Link to="/bookings-customer">Customer Bookings</Link></li>
//         <li><Link to="/flightowner-management">FlightOwner Management</Link></li>
//       </ul>
//       <div className="user-profile">
//         <Dropdown
//           trigger={
//             <span className="user-dropdown">
//               <Icon name="user circle" size="large" />
//               {username}
//             </span>
//           }
//           onOpen={() => setDropdownOpen(true)}
//           onClose={() => setDropdownOpen(false)}
//           open={dropdownOpen}
//           pointing="top right"
//           icon={null}
//         >
//           <Dropdown.Menu>
//             <Dropdown.Item text="Update Profile" icon="edit" onClick={handleProfileUpdate} />
//             <Dropdown.Item text="Logout" icon="sign-out" onClick={handleLogout} />
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </nav>
//   );
// };

// export default FlightOwnerNavbar;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FlightOwnerNavbar.css';
import { Dropdown, Icon } from 'semantic-ui-react';

const FlightOwnerNavbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Get username from localStorage
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    navigate('/user/login');
  };

  const handleProfileUpdate = () => {
    navigate(`/update-flightownerprofile/${username}`);
  };

  return (
    <nav className="flightowner-navbar">
      <div className="navbar-brand">
        <h2>Flight Owner Dashboard</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/flight-owner">Dashboard</Link></li>
        <li><Link to="/get-airports">Get Airports Information</Link></li>
        <li><Link to="/flights-management">Flights Management</Link></li>
        <li><Link to="/flight-schedules-management">Flight Schedules</Link></li>
        {/* <li><Link to="/bookings-customer">Customer Bookings</Link></li> */}
      </ul>
      <div className="user-profile">
        <Dropdown
          trigger={
            <span className="user-dropdown">
              <Icon name="user circle" size="large" />
              {username}
              <Icon name="angle down" className="dropdown-arrow" />
            </span>
          }
          onOpen={() => setDropdownOpen(true)}
          onClose={() => setDropdownOpen(false)}
          open={dropdownOpen}
          pointing="top right"
          icon={null}
        >
          <Dropdown.Menu>
            <Dropdown.Item text="Update Profile" icon="edit" onClick={handleProfileUpdate} />
            <Dropdown.Item 
              text="Logout" 
              icon="sign-out" 
              onClick={handleLogout} 
              className="logout-item"
              style={{ color: 'red' }} // Make the Logout button red
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default FlightOwnerNavbar;

