import React, { useEffect, useState } from 'react';
import './ListAirports.css'; 
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const RemoveAirports = () => {
  const [airports, setAirports] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airports', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch airports');
        }

        const data = await response.json();
        setAirports(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAirports();
  }, []);

  const handleDelete = async (iataCode) => { // Change parameter to iataCode
    try {
      const token = localStorage.getItem('token'); 
      const response = await fetch(`http://localhost:8080/simply-fly/admin/remove-airport/${iataCode}`, { // Use iataCode in the URL
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, 
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete airport: ${iataCode}`); // Use iataCode in the error message
      }

      // Remove the airport from the state using IATA code
      setAirports((prevAirports) => prevAirports.filter((airport) => airport.iataCode !== iataCode)); // Filter by iataCode
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Loading airports...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>Remove Airports</h1>
        {airports.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>IATA Code</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {airports.map((airport, index) => (
                <tr key={index}>
                  <td>{airport.name}</td>
                  <td>{airport.iataCode}</td>
                  <td>{airport.location}</td>
                  <td>
                    <button onClick={() => handleDelete(airport.iataCode)} className="delete-button"> {/* Pass iataCode to handleDelete */}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No airports found.</p>
        )}
      </div>
    </>
  );
};

export default RemoveAirports;