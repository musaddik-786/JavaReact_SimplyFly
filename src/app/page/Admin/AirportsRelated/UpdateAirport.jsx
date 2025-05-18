import React, { useEffect, useState } from 'react';
import './ListAirports.css'; // Create new CSS file for unique styling
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const UpdateAirport = () => {
  const [airports, setAirports] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedAirport, setSelectedAirport] = useState(null); // State to hold the selected airport for updating
  const [updateForm, setUpdateForm] = useState({ iataCode: '', name: '', location: '' }); // State for update form

  // Fetch all airports when the component mounts
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you are using token for auth
        const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airports', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include token if required
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


  // Handle the Update button click
  const handleUpdateClick = (airport) => {
    setSelectedAirport(airport);
    setUpdateForm({
      iataCode: airport.iataCode,
      name: airport.name,
      location: airport.location,
    });
  };

  // Handle the update form submission
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Include token if required
      const response = await fetch(`http://localhost:8080/simply-fly/admin/update-airport/${updateForm.iataCode}`, {
        method: 'PUT', // Use PUT method for updating
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Include token if required
        },
        body: JSON.stringify(updateForm), // Send updated airport data
      });

      if (!response.ok) {
        throw new Error(`Failed to update airport: ${updateForm.iataCode}`);
      }

      // Refetch the airport list after successful update
      setAirports((prevAirports) => 
        prevAirports.map((airport) => 
          airport.iataCode === updateForm.iataCode ? { ...airport, ...updateForm } : airport
        )
      );

      // Reset form and selected airport
      setSelectedAirport(null);
      setUpdateForm({ iataCode: '', name: '', location: '' });
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

        {/* Update Form */}
        {selectedAirport && (
          <form onSubmit={handleUpdateSubmit} className="update-airport-form">
            <h2>Update Airport</h2>
            <input 
              type="text" 
              value={updateForm.iataCode} 
              onChange={(e) => setUpdateForm({ ...updateForm, iataCode: e.target.value })} 
              placeholder="IATA Code" 
              required 
            />
            <input 
              type="text" 
              value={updateForm.name} 
              onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })} 
              placeholder="Airport Name" 
              required 
            />
            <input 
              type="text" 
              value={updateForm.location} 
              onChange={(e) => setUpdateForm({ ...updateForm, location: e.target.value })} 
              placeholder="Location" 
              required 
            />
            <button type="submit" className="update-button">Submit Update</button>
            <button type="button" onClick={() => setSelectedAirport(null)}>Cancel</button>
          </form>
        )}

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
                    <button onClick={() => handleUpdateClick(airport)} className="update-button">
                      Update
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

export default UpdateAirport;
