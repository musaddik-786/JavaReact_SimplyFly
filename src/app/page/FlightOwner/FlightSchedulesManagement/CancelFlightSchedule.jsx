import React, { useEffect, useState } from 'react';
import './GetAllScheduledFlights.css'; // Assuming you have a CSS file for styling
import AdminNavbar from '../Navbar/FlightOwnerNavbar'; // Adjust the import according to your file structure
import axios from 'axios'; // Import Axios

const CancelFlightSchedule = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:8080/simply-fly/flightTrips/getallflighttrips', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, 
          },
        });

        setFlights(response.data);
      } catch (err) {
        // Improved error handling
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message); // Use specific error message if available
        } else {
          setError('An unexpected error occurred.'); // Generic error message for non-Axios errors
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleDelete = async (flightTripId) => { 
    const username = localStorage.getItem('username'); // Get username from local storage
    try {
      const token = localStorage.getItem('token'); 
      await axios.delete(`http://localhost:8080/simply-fly/flightTrips/deleteflighttrip/${flightTripId}/${username}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, 
        },
      });

      // Remove the flight trip from the state using flightTripId
      setFlights((prevFlights) => prevFlights.filter((flight) => flight.flightTripId !== flightTripId)); 
    } catch (err) {
      // Improved error handling
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else {
        setError('An unexpected error occurred while deleting the flight trip.');
      }
    }
  };

  if (loading) {
    return <p>Loading flight trips...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="flight-list-container">
        <h1>Cancel Flight Schedule</h1>
        {flights.length > 0 ? (
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
                <th>Duration</th>
                <th>Source Airport Name</th>
                <th>Source Airport IATA Code</th>
                <th>Source Airport Location</th>
                <th>Destination Airport Name</th>
                <th>Destination Airport IATA Code</th>
                <th>Destination Airport Location</th>
                <th>Actions</th>
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
                  <td>
                    <button 
                      onClick={() => handleDelete(flight.flightTripId)} 
                      className="delete-button" 
                      style={{ backgroundColor: 'red', color: 'white' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flight trips found.</p>
        )}
      </div>
    </>
  );
};

export default CancelFlightSchedule;
















// import React, { useEffect, useState } from 'react';
// import './GetAllScheduledFlights.css'; // Assuming you have a CSS file for styling
// import AdminNavbar from '../Navbar/FlightOwnerNavbar'; // Adjust the import according to your file structure

// const CancelFlightSchedule = () => {
//   const [flights, setFlights] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const token = localStorage.getItem('token'); 
//         const response = await fetch('http://localhost:8080/simply-fly/flightTrips/getallflighttrips', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token, 
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight trips');
//         }

//         const data = await response.json();
//         setFlights(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   const handleDelete = async (flightTripId) => { 
//     const username = localStorage.getItem('username'); // Get username from local storage
//     try {
//       const token = localStorage.getItem('token'); 
//       const response = await fetch(`http://localhost:8080/simply-fly/flightTrips/deleteflighttrip/${flightTripId}/${username}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, 
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to delete flight trip: ${flightTripId}`); 
//       }

//       // Remove the flight trip from the state using flightTripId
//       setFlights((prevFlights) => prevFlights.filter((flight) => flight.flightTripId !== flightTripId)); 
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight trips...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="flight-list-container">
//         <h1>Cancel Flight Schedule</h1>
//         {flights.length > 0 ? (
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
//                 <th>Duration</th>
//                 <th>Source Airport Name</th>
//                 <th>Source Airport IATA Code</th>
//                 <th>Source Airport Location</th>
//                 <th>Destination Airport Name</th>
//                 <th>Destination Airport IATA Code</th>
//                 <th>Destination Airport Location</th>
//                 <th>Actions</th>
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
//                   <td>
//                     <button onClick={() => handleDelete(flight.flightTripId)} className="delete-button" style={{ backgroundColor: 'red', color: 'white' }}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flight trips found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CancelFlightSchedule;
