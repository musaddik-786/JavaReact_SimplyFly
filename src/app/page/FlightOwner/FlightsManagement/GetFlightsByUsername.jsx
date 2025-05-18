import React, { useEffect, useState } from 'react';
import './GetAllFlights.css'; // Using the same CSS file
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import axios from 'axios'; // Importing axios for API requests

const GetFlightsByUsername = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlightsByUsername = async () => {
      const username = localStorage.getItem('username'); // Getting username from local storage
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/simply-fly/flights/by-flightowner/${username}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });

        setFlights(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch flights');
      } finally {
        setLoading(false);
      }
    };

    fetchFlightsByUsername();
  }, []);

  if (loading) {
    return <p>Loading flights...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <FlightOwnerNavbar />
      <div className="flight-list-container">
        <h1>List of Flights by {localStorage.getItem('username')}</h1>
        {flights.length > 0 ? (
          <table className="flight-table">
            <thead>
              <tr>
                <th>Flight Code</th>
                <th>Total Seats</th>
                <th>Check-In Weight (kg)</th>
                <th>Cabin Weight (kg)</th>
                <th>Airline ID</th>
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
                  <td>{flight.airlineId}</td>
                  <td>{flight.lastArrivedAirportId || 'N/A'}</td>
                  <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
                  <td>{flight.flightStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flights found for this owner.</p>
        )}
      </div>
    </>
  );
};

export default GetFlightsByUsername;
























// import React, { useEffect, useState } from 'react';
// import './GetAllFlights.css'; // Using the same CSS file
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';

// const GetFlightsByUsername = () => {
//   const [flights, setFlights] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlightsByUsername = async () => {
//       const username = localStorage.getItem('username'); // Getting username from local storage
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch(`http://localhost:8080/simply-fly/flights/by-flightowner/${username}`, {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flights');
//         }

//         const data = await response.json();
//         setFlights(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightsByUsername();
//   }, []);

//   if (loading) {
//     return <p>Loading flights...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <FlightOwnerNavbar />
//       <div className="flight-list-container">
//         <h1>List of Flights by {localStorage.getItem('username')}</h1>
//         {flights.length > 0 ? (
//           <table className="flight-table">
//             <thead>
//               <tr>
//                 <th>Flight Code</th>
//                 <th>Total Seats</th>
//                 <th>Check-In Weight (kg)</th>
//                 <th>Cabin Weight (kg)</th>
//                 <th>Airline ID</th>
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
//                   <td>{flight.airlineId}</td>
//                   <td>{flight.lastArrivedAirportId || 'N/A'}</td>
//                   <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
//                   <td>{flight.flightStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flights found for this owner.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default GetFlightsByUsername;
