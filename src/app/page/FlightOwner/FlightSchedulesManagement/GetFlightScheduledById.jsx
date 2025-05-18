import React, { useState } from 'react';
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import './GetAllScheduledFlights.css'; // Using the same CSS file for consistency
import axios from 'axios'; // Import Axios

const GetFlightsScheduledById = () => {
  const [flightTripId, setFlightTripId] = useState('');
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFlightTripId(e.target.value);
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
      const response = await axios.get(`http://localhost:8080/simply-fly/flightTrips/getflighttripsbyid/${flightTripId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      setFlights([response.data]); // Store the single flight object in an array for consistent rendering
      setFlightTripId(''); // Clear input after fetching
    } catch (err) {
      // Improved error handling
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Flight not found for this flight trip ID');
      } else {
        setError('An unexpected error occurred while fetching flight details.');
      }
      setFlights([]); // Reset flights in case of an error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FlightOwnerNavbar />
      <div className="find-flights-container">
        <h1>Find Scheduled Flights by Flight Trip ID</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="flightTripId">Flight Trip ID:</label>
            <input
              type="text"
              id="flightTripId"
              value={flightTripId}
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
          <h2>Scheduled Flights for Flight Trip ID: {flightTripId}</h2>
          <table className="flight-table">
            <thead>
              <tr>
                <th>Flight Trip ID</th>
                <th>Flight ID</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Ticket Price</th>
                <th>Status</th>
                <th>Filled Seats</th>
                <th>Duration (min)</th>
                <th>Source Airport</th>
                <th>Source IATA</th>
                <th>Source Location</th>
                <th>Destination Airport</th>
                <th>Destination IATA</th>
                <th>Destination Location</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight, index) => (
                <tr key={index}>
                  <td>{flight.flightTripId}</td>
                  <td>{flight.flightId}</td>
                  <td>{new Date(flight.departure).toLocaleString()}</td>
                  <td>{new Date(flight.arrival).toLocaleString()}</td>
                  <td>{flight.ticketPrice}</td>
                  <td>{flight.status}</td>
                  <td>{flight.filledSeats}</td>
                  <td>{flight.duration}</td>
                  <td>{flight.sourceAirport.name}</td>
                  <td>{flight.sourceAirport.iataCode}</td>
                  <td>{flight.sourceAirport.location}</td>
                  <td>{flight.destinationAirport.name}</td>
                  <td>{flight.destinationAirport.iataCode}</td>
                  <td>{flight.destinationAirport.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default GetFlightsScheduledById;















// import React, { useState } from 'react';
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
// import './GetAllScheduledFlights.css'; // Using the same CSS file for consistency

// const GetFlightsScheduledById = () => {
//   const [flightTripId, setFlightTripId] = useState('');
//   const [flights, setFlights] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setFlightTripId(e.target.value);
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
//       const response = await fetch(`http://localhost:8080/simply-fly/flightTrips/getflighttripsbyid/${flightTripId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Flight not found for this flight trip ID');
//       }

//       const data = await response.json();
//       setFlights([data]); // Store the single flight object in an array for consistent rendering
//       setFlightTripId(''); // Clear input after fetching
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
//         <h1>Find Scheduled Flights by Flight Trip ID</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="flightTripId">Flight Trip ID:</label>
//             <input
//               type="text"
//               id="flightTripId"
//               value={flightTripId}
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
//           <h2>Scheduled Flights for Flight Trip ID: {flightTripId}</h2>
//           <table className="flight-table">
//             <thead>
//               <tr>
//                 <th>Flight Trip ID</th>
//                 <th>Flight ID</th>
//                 <th>Departure</th>
//                 <th>Arrival</th>
//                 <th>Ticket Price</th>
//                 <th>Status</th>
//                 <th>Filled Seats</th>
//                 <th>Duration (min)</th>
//                 <th>Source Airport</th>
//                 <th>Source IATA</th>
//                 <th>Source Location</th>
//                 <th>Destination Airport</th>
//                 <th>Destination IATA</th>
//                 <th>Destination Location</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flights.map((flight, index) => (
//                 <tr key={index}>
//                   <td>{flight.flightTripId}</td>
//                   <td>{flight.flightId}</td>
//                   <td>{new Date(flight.departure).toLocaleString()}</td>
//                   <td>{new Date(flight.arrival).toLocaleString()}</td>
//                   <td>{flight.ticketPrice}</td>
//                   <td>{flight.status}</td>
//                   <td>{flight.filledSeats}</td>
//                   <td>{flight.duration}</td>
//                   <td>{flight.sourceAirport.name}</td>
//                   <td>{flight.sourceAirport.iataCode}</td>
//                   <td>{flight.sourceAirport.location}</td>
//                   <td>{flight.destinationAirport.name}</td>
//                   <td>{flight.destinationAirport.iataCode}</td>
//                   <td>{flight.destinationAirport.location}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default GetFlightsScheduledById;
