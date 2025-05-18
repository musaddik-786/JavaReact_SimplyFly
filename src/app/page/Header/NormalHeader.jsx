import { Link } from "react-router-dom";
import './NormalHeader.css'; // Ensure this is styled properly
import { Menu, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


const NormalHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    console.log("Register button clicked");
    setDropdownVisible(prevVisible => !prevVisible);
    console.log("Dropdown visibility:", dropdownVisible);
  };

  const handleSignInClick = (role) => {
    setDropdownVisible(false);
    if (role === 'Admin') {
      navigate('/SignInAdmin');
    } else if (role === 'Customer') {
      navigate('/SignInCustomer');
    } else if (role === 'FlightOwner') {
      navigate('/SignInFlightOwner');
    }

   
  };
  const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    
    navigate('/user/login');
  };
  return (
    <header className="header">
      <div className="logo">
        <h1>Airline Reservation</h1>
      </div>
     
      <div className="ui menu">
        <Button as={Link} to="/" basic>
          Home
        </Button>
        {/* <Button as={Link} to="/about" basic>
          About Us
        </Button>
        <Button as={Link} to="/contact" basic>
          Contact Us
        </Button>
        <Button as={Link} to="/flights" basic>
          View Flights
        </Button> */}
       
        
        <div className="dropdown">
          <Button basic onClick={toggleDropdown}>
            Register
          </Button>

          {dropdownVisible && (
            <ul className="dropdown-menu" style={{ display: 'block', position: 'absolute', background: 'white' }}>
              <li onClick={() => handleSignInClick('Customer')}>Customer</li>
              <li onClick={() => handleSignInClick('Admin')}>Admin</li>
              <li onClick={() => handleSignInClick('FlightOwner')}>Flight Owner</li>
            </ul>
          )}
        </div>

        <Button as={Link} to="/user/login" basic>
          Login
        </Button>

        <Button onClick={handleLogout} as={Link} to="/user/login" basic  >
          Logout
        </Button>

        {/* <Button onClick={() => navigate('/admin')} basic>
        Admin
        </Button> */}
        
      </div>
    </header>
  );
};

export default NormalHeader;
