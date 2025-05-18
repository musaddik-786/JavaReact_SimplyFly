import React, { useState } from 'react';
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import './GetAllFlights.css'; // Using the same CSS file for consistency
import axios from 'axios'; // Importing axios for API requests

const GetFlightsByAirlineId = () => {
  const [airlineId, setAirlineId] = useState('');
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setAirlineId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to access this feature.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/simply-fly/flights/by-airline/${airlineId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      setFlights(response.data);
      setAirlineId(''); // Clear input after fetching
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Flights not found for this airline ID');
      setFlights([]); // Reset flights in case of an error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FlightOwnerNavbar />
      <div className="find-flights-container">
        <h1>Find Flights by Airline ID</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="airlineId">Airline ID:</label>
            <input
              type="text"
              id="airlineId"
              value={airlineId}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Find Flights'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>

      {flights.length > 0 && (
        <div className="flight-list-container">
          <h2>Flights for Airline ID: {airlineId}</h2>
          <table className="flight-table">
            <thead>
              <tr>
                <th>Flight Code</th>
                <th>Total Seats</th>
                <th>Check-In Weight (kg)</th>
                <th>Cabin Weight (kg)</th>
                <th>Last Arrived Airport ID</th>
                <th>Last Arrived Time</th>
                <th>Flight Status</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight, index) => (
                <tr key={index}>
                  <td>{flight.flightCode}</td>
                  <td>{flight.totalSeats}</td>
                  <td>{flight.checkInWeight}</td>
                  <td>{flight.cabinWeight}</td>
                  <td>{flight.lastArrivedAirportId || 'N/A'}</td>
                  <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
                  <td>{flight.flightStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default GetFlightsByAirlineId;
















// import React, { useState } from 'react';
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
// import './GetAllFlights.css'; // Using the same CSS file for consistency

// const GetFlightsByAirlineId = () => {
//   const [airlineId, setAirlineId] = useState('');
//   const [flights, setFlights] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setAirlineId(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('You must be logged in to access this feature.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8080/simply-fly/flights/by-airline/${airlineId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Flights not found for this airline ID');
//       }

//       const data = await response.json();
//       setFlights(data);
//       // setAirlineId(''); // Clear input after fetching
//     } catch (err) {
//       setError(err.message);
//       setFlights([]); // Reset flights in case of an error
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <FlightOwnerNavbar />
//       <div className="find-flights-container">
//         <h1>Find Flights by Airline ID</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="airlineId">Airline ID:</label>
//             <input
//               type="text"
//               id="airlineId"
//               value={airlineId}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Searching...' : 'Find Flights'}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>}
//       </div>

//       {flights.length > 0 && (
//         <div className="flight-list-container">
//           <h2>Flights for Airline ID: {airlineId}</h2>
//           <table className="flight-table">
//             <thead>
//               <tr>
//                 <th>Flight Code</th>
//                 <th>Total Seats</th>
//                 <th>Check-In Weight (kg)</th>
//                 <th>Cabin Weight (kg)</th>
//                 <th>Last Arrived Airport ID</th>
//                 <th>Last Arrived Time</th>
//                 <th>Flight Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flights.map((flight, index) => (
//                 <tr key={index}>
//                   <td>{flight.flightCode}</td>
//                   <td>{flight.totalSeats}</td>
//                   <td>{flight.checkInWeight}</td>
//                   <td>{flight.cabinWeight}</td>
//                   <td>{flight.lastArrivedAirportId || 'N/A'}</td>
//                   <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
//                   <td>{flight.flightStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default GetFlightsByAirlineId;
