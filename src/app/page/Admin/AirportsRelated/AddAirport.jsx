import React, { useState } from 'react';
import './AddAirport.css'; 
import AdminNavbar from '../AdminNavbar/AdminNavbar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAirport = () => {
  const [iataCode, setIataCode] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
 

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token');

  try {
      const response = await axios.post('http://localhost:8080/simply-fly/admin/add-airport', {
          iataCode,
          name,
          location,
      }, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token, 
          }
      });

      console.log('Airport added:', response.data);
      
      setIataCode('');
      setName('');
      setLocation('');
      
      navigate('/admin'); 
  } catch (error) {
      console.error('Error adding airport:', error);
      
  }
};


  return (
    <div>
        <AdminNavbar/>
    <div className="add-airport-container">
      <div className="form-card">
        <h2>Add New Airport</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="iataCode">IATA Code</label>
            <input
              type="text"
              id="iataCode"
              value={iataCode}
              onChange={(e) => setIataCode(e.target.value)}
              placeholder="Enter IATA Code"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Airport Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Airport Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Add Airport</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddAirport;
