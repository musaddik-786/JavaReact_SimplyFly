// import React, { useEffect, useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust the import according to your project structure
// import '../ListAirports/ListAirports.css'; // Import the same CSS file for styling

// const RemoveFlightOwner = () => {
//   const [flightOwners, setFlightOwners] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlightOwners = async () => {
//       try {
//         const token = localStorage.getItem('token'); 
//         const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token, 
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight owners');
//         }

//         const data = await response.json();
//         setFlightOwners(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightOwners();
//   }, []);

//   const handleDelete = async (username) => {
//     try {
//       const token = localStorage.getItem('token'); 
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/remove-flightowner-by-username/${username}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, 
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to delete flight owner: ${username}`);
//       }

//       // Remove the flight owner from the state using username
//       setFlightOwners((prevOwners) => prevOwners.filter((owner) => owner.username !== username));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight owners...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="airport-list-container">
//         <h1>Remove Flight Owners</h1>
//         {flightOwners.length > 0 ? (
//           <table className="airport-table">
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Name</th>
//                 <th>Contact</th>
//                 <th>Age</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flightOwners.map((owner, index) => (
//                 <tr key={index}>
//                   <td>{owner.username}</td>
//                   <td>{owner.email}</td>
//                   <td>{owner.name}</td>
//                   <td>{owner.contact}</td>
//                   <td>{owner.age}</td>
//                   <td>
//                     <button onClick={() => handleDelete(owner.username)} className="delete-button">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flight owners found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default RemoveFlightOwner;


import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Import AdminNavbar
import axios from 'axios'; // Import axios
import '../AirportsRelated/ListAirports.css'; // Reuse CSS for styling

const RemoveFlightOwner = () => {
  const [flightOwners, setFlightOwners] = useState([]); // State to hold the flight owners list
  const [error, setError] = useState(''); // State to hold any error messages
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchFlightOwners = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const response = await axios.get('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include token in the request headers
          },
        });

        setFlightOwners(response.data); // Set flight owners data
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch flight owners'); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after the request
      }
    };

    fetchFlightOwners(); // Call the function to fetch flight owners on component mount
  }, []);

  const handleDelete = async (username) => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const response = await axios.delete(`http://localhost:8080/simply-fly/admin/remove-flightowner-by-username/${username}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Include token in the request headers
        },
      });

      setFlightOwners((prevOwners) => prevOwners.filter((owner) => owner.username !== username)); // Remove deleted flight owner from state
    } catch (err) {
      setError(err.response?.data?.message || `Failed to delete flight owner: ${username}`); // Handle errors
    }
  };

  if (loading) {
    return <p>Loading flight owners...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p className="error-message">{error}</p>; // Display error message if any
  }

  return (
    <>
      <AdminNavbar /> {/* Reusable AdminNavbar component */}
      <div className="airport-list-container">
        <h1>Remove Flight Owners</h1>
        {flightOwners.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Age</th>
                <th>Actions</th>
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
                  <td>
                    <button onClick={() => handleDelete(owner.username)} className="delete-button">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flight owners found.</p> // Display message if no flight owners are found
        )}
      </div>
    </>
  );
};

export default RemoveFlightOwner;
