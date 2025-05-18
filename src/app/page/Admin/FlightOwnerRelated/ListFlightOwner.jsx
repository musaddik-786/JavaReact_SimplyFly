import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust the import according to your project structure
import '../AirportsRelated/ListAirports.css'; // Import the same CSS file for styling

const ListFlightOwners = () => {
  const [flightOwners, setFlightOwners] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlightOwners = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch flight owners');
        }

        const data = await response.json();
        setFlightOwners(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlightOwners();
  }, []);

  if (loading) {
    return <p>Loading flight owners...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>List of Flight Owners</h1>
        {flightOwners.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Age</th>
                <th>Airline ID</th>
                <th>Airline Name</th>
              </tr>
            </thead>
            <tbody>
              {flightOwners.map((owner, index) => (
                <tr key={index}>
                  <td>{owner.username}</td>
                  <td>{owner.email}</td>
                  <td>{owner.name}</td>
                  <td>{owner.contact}</td>
                  <td>{owner.age}</td>
                  <td>{owner.airline.airlineId}</td>
                  <td>{owner.airline.airlineName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flight owners found.</p>
        )}
      </div>
    </>
  );
};

export default ListFlightOwners;
