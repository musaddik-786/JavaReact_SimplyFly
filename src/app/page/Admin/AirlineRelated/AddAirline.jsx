import React, { useState } from 'react';
import '../AirportsRelated/AddAirport.css'; 
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAirline = () => {
  const [airlineId, setAirlineId] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:8080/simply-fly/admin/add-airline', {
        airlineId,
        airlineName,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      });

      console.log('Airline added:', response.data);

      // Clear the input fields after successful submission
      setAirlineId('');
      setAirlineName('');

      // Navigate back to admin or a suitable page
      navigate('/admin');
    } catch (error) {
      console.error('Error adding airline:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="add-airport-container">
        <div className="form-card">
          <h2>Add New Airline</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="airlineId">Airline ID</label>
              <input
                type="text"
                id="airlineId"
                value={airlineId}
                onChange={(e) => setAirlineId(e.target.value)}
                placeholder="Enter Airline ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="airlineName">Airline Name</label>
              <input
                type="text"
                id="airlineName"
                value={airlineName}
                onChange={(e) => setAirlineName(e.target.value)}
                placeholder="Enter Airline Name"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Add Airline</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAirline;
