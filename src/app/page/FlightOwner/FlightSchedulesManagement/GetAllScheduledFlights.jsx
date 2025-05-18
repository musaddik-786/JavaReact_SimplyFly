import React, { useEffect, useState } from 'react';
import './GetAllScheduledFlights.css'; // Importing the CSS file
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar'; // Assuming this is the correct navbar for flight owners
import axios from 'axios'; // Import Axios

const GetAllScheduledFlights = () => {
  const [scheduledFlights, setScheduledFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScheduledFlights = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/simply-fly/flightTrips/getallflighttrips', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });

        setScheduledFlights(response.data);
      } catch (err) {
        // Improved error handling
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else {
          setError('An unexpected error occurred while fetching scheduled flights.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchScheduledFlights();
  }, []);

  if (loading) {
    return <p>Loading scheduled flights...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <FlightOwnerNavbar />
      <div className="scheduled-flight-list-container">
        <h1>List of Scheduled Flights</h1>
        {scheduledFlights.length > 0 ? (
          <table className="scheduled-flight-table">
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
              {scheduledFlights.map((flight, index) => (
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
        ) : (
          <p>No scheduled flights found.</p>
        )}
      </div>
    </>
  );
};

export default GetAllScheduledFlights;









// import React, { useEffect, useState } from 'react';
// import './GetAllScheduledFlights.css'; // Importing the CSS file
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar'; // Assuming this is the correct navbar for flight owners

// const GetAllScheduledFlights = () => {
//   const [scheduledFlights, setScheduledFlights] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScheduledFlights = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8080/simply-fly/flightTrips/getallflighttrips', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch scheduled flights');
//         }

//         const data = await response.json();
//         setScheduledFlights(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScheduledFlights();
//   }, []);

//   if (loading) {
//     return <p>Loading scheduled flights...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <FlightOwnerNavbar />
//       <div className="scheduled-flight-list-container">
//         <h1>List of Scheduled Flights</h1>
//         {scheduledFlights.length > 0 ? (
//           <table className="scheduled-flight-table">
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
//               {scheduledFlights.map((flight, index) => (
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
//         ) : (
//           <p>No scheduled flights found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default GetAllScheduledFlights;
