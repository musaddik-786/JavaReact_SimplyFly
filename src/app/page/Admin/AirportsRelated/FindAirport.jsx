
import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Admin Navbar component
import axios from 'axios'; // Import axios
import './ListAirports.css'; // Reuse styles from ListAirports
import './FindAirport.css'; // Specific styling for FindAirport

const FindAirport = () => {
  const [iataCode, setIataCode] = useState(''); // State to hold the input IATA code
  const [airportDetails, setAirportDetails] = useState(null); // State to store airport details after API response
  const [error, setError] = useState(''); // State to store error messages
  const [loading, setLoading] = useState(false); // State for loading state during API call

  const handleInputChange = (e) => {
    setIataCode(e.target.value); // Update IATA code based on user input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setLoading(true); // Set loading state to true during API call

    const token = localStorage.getItem('token'); // Get token from local storage
    if (!token) {
      setError('You must be logged in to access this feature.');
      setLoading(false);
      return;
    }

    try {
      // Send GET request using axios
      const response = await axios.get(
        `http://localhost:8080/simply-fly/admin/find-airport/${iataCode}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include token in headers
          },
        }
      );

      setAirportDetails(response.data); // Set airport details from API response
      setIataCode(''); // Clear the input field
    } catch (err) {
      setError(err.response?.data?.message || 'Airport not found'); // Handle errors
      setAirportDetails(null); // Clear airport details on error
    } finally {
      setLoading(false); // Reset loading state after the request
    }
  };

  return (
    <>
      <AdminNavbar /> {/* Reusable AdminNavbar component */}
      <div className="find-airport-container">
        <h1>Find Airport by IATA Code</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="iataCode">IATA Code:</label>
            <input
              type="text"
              id="iataCode"
              value={iataCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Find Airport'} {/* Show loading state in button */}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>} {/* Display error messages */}
      </div>

      {airportDetails && ( /* Display airport details if available */
        <div className="airport-list-container">
          <h2>Airport Details:</h2>
          <table className="airport-table">
            <thead>
              <tr>
                <th>IATA Code</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{airportDetails.iataCode}</td>
                <td>{airportDetails.name}</td>
                <td>{airportDetails.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default FindAirport;
