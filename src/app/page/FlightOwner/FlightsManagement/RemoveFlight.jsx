import React, { useEffect, useState } from 'react';
import './GetAllFlights.css'; // Assuming you have a CSS file for styling
import AdminNavbar from '../Navbar/FlightOwnerNavbar'; // Adjust the import according to your file structure
import axios from 'axios'; // Importing axios for API requests

const RemoveFlights = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:8080/simply-fly/flights/all-flights', {
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

    fetchFlights();
  }, []);

  const handleDelete = async (flightCode) => { 
    const username = localStorage.getItem('username'); // Get username from local storage
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.delete(`http://localhost:8080/simply-fly/flights/remove/${flightCode}/${username}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, 
        },
      });

      // Remove the flight from the state using flightCode
      if (response.status === 200) {
        setFlights((prevFlights) => prevFlights.filter((flight) => flight.flightCode !== flightCode)); 
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || `Failed to delete flight: ${flightCode}`);
    }
  };

  if (loading) {
    return <p>Loading flights...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="flight-list-container">
        <h1>Remove Flights</h1>
        {flights.length > 0 ? (
          <table className="flight-table">
            <thead>
              <tr>
                <th>Flight Code</th>
                <th>Total Seats</th>
                <th>Check-in Weight</th>
                <th>Cabin Weight</th>
                <th>Airline ID</th>
                <th>Last Arrived Airport ID</th>
                <th>Last Arrived Time</th>
                <th>Flight Status</th>
                <th>Actions</th>
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
                  <td>{flight.lastArrivedAirportId || 'Not Available'}</td>
                  <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
                  <td>{flight.flightStatus}</td>
                  <td>
                    <button onClick={() => handleDelete(flight.flightCode)} className="delete-button" style={{ backgroundColor: 'red', color: 'white' }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </>
  );
};

export default RemoveFlights;

















// import React, { useEffect, useState } from 'react';
// import './GetAllFlights.css'; // Assuming you have a CSS file for styling
// import AdminNavbar from '../Navbar/FlightOwnerNavbar'; // Adjust the import according to your file structure

// const RemoveFlights = () => {
//   const [flights, setFlights] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const token = localStorage.getItem('token'); 
//         const response = await fetch('http://localhost:8080/simply-fly/flights/all-flights', {
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

//     fetchFlights();
//   }, []);

//   const handleDelete = async (flightCode) => { 
//     const username = localStorage.getItem('username'); // Get username from local storage
//     try {
//       const token = localStorage.getItem('token'); 
//       const response = await fetch(`http://localhost:8080/simply-fly/flights/remove/${flightCode}/${username}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, 
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to delete flight: ${flightCode}`); 
//       }

//       // Remove the flight from the state using flightCode
//       setFlights((prevFlights) => prevFlights.filter((flight) => flight.flightCode !== flightCode)); 
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flights...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="flight-list-container">
//         <h1>Remove Flights</h1>
//         {flights.length > 0 ? (
//           <table className="flight-table">
//             <thead>
//               <tr>
//                 <th>Flight Code</th>
//                 <th>Total Seats</th>
//                 <th>Check-in Weight</th>
//                 <th>Cabin Weight</th>
//                 <th>Airline ID</th>
//                 <th>Last Arrived Airport ID</th>
//                 <th>Last Arrived Time</th>
//                 <th>Flight Status</th>
//                 <th>Actions</th>
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
//                   <td>{flight.lastArrivedAirportId ? flight.lastArrivedAirportId : 'Not Available'}</td>
//                   <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
//                   <td>{flight.flightStatus}</td> {/* Added column */}
//                   <td>
//                     <button onClick={() => handleDelete(flight.flightCode)} className="delete-button" style={{ backgroundColor: 'red', color: 'white' }}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flights found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default RemoveFlights;
