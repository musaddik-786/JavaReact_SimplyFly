// import React, { useEffect, useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust the import according to your project structure
// import '../ListAirports/ListAirports.css'; // Import the same CSS file for styling

// const RemoveAirlines = () => {
//     const [airlines, setAirlines] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchAirlines = async () => {
//         try {
//           const token = localStorage.getItem('token'); 
//           const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airlines', {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': token, 
//             },
//           });
  
//           if (!response.ok) {
//             throw new Error('Failed to fetch airlines');
//           }
  
//           const data = await response.json();
//           setAirlines(data);
//         } catch (err) {
//           setError(err.message);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchAirlines();
//     }, []);
  
//     const handleDelete = async (airlineId) => {
//       try {
//         const token = localStorage.getItem('token'); 
//         const response = await fetch(`http://localhost:8080/simply-fly/admin/delete-airline/${airlineId}`, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token, 
//           },
//         });
  
//         if (!response.ok) {
//           throw new Error(`Failed to delete airline: ${airlineId}`);
//         }
  
//         // Remove the airline from the state using airlineId
//         setAirlines((prevAirlines) => prevAirlines.filter((airline) => airline.airlineId !== airlineId));
//       } catch (err) {
//         setError(err.message);
//       }
//     };
  
//     if (loading) {
//       return <p>Loading airlines...</p>;
//     }
  
//     if (error) {
//       return <p className="error-message">{error}</p>;
//     }
  
//     return (
//       <>
//         <AdminNavbar />
//         <div className="airport-list-container">
//           <h1>Remove Airlines</h1>
//           {airlines.length > 0 ? (
//             <table className="airport-table">
//               <thead>
//                 <tr>
//                   <th>Airline ID</th>
//                   <th>Airline Name</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {airlines.map((airline, index) => (
//                   <tr key={index}>
//                     <td>{airline.airlineId}</td>
//                     <td>{airline.airlineName}</td>
//                     <td>
//                       <button onClick={() => handleDelete(airline.airlineId)} className="delete-button">
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No airlines found.</p>
//           )}
//         </div>
//       </>
//     );
//   };
  
//   export default RemoveAirlines;


import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust the import according to your project structure
import axios from 'axios'; // Import axios
import '../AirportsRelated/ListAirports.css'; // Import the same CSS file for styling

const RemoveAirlines = () => {
  const [airlines, setAirlines] = useState([]); // State for storing airlines data
  const [error, setError] = useState(''); // State for storing error messages
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage

        const response = await axios.get('http://localhost:8080/simply-fly/admin/list-all-airlines', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Attach token to headers
          },
        });

        setAirlines(response.data); // Set airlines data from the response
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch airlines'); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAirlines();
  }, []);

  const handleDelete = async (airlineId) => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage

      await axios.delete(`http://localhost:8080/simply-fly/admin/delete-airline/${airlineId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Attach token to headers
        },
      });

      // Remove the deleted airline from the state
      setAirlines((prevAirlines) => prevAirlines.filter((airline) => airline.airlineId !== airlineId));
    } catch (err) {
      setError(err.response?.data?.message || `Failed to delete airline: ${airlineId}`); // Handle error
    }
  };

  if (loading) {
    return <p>Loading airlines...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>Remove Airlines</h1>
        {airlines.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Airline ID</th>
                <th>Airline Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {airlines.map((airline, index) => (
                <tr key={index}>
                  <td>{airline.airlineId}</td>
                  <td>{airline.airlineName}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(airline.airlineId)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No airlines found.</p>
        )}
      </div>
    </>
  );
};

export default RemoveAirlines;
