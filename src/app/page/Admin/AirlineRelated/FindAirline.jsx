// FindAirline.jsx
// import React, { useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust import as per your folder structure
// import '../ListAirports/ListAirports.css'; 
// import '../FindAirport/FindAirport.css'; 

// const FindAirline = () => {
//   const [airlineId, setAirlineId] = useState(''); // State for storing airline ID
//   const [airlineDetails, setAirlineDetails] = useState(null); // State for storing fetched airline details
//   const [error, setError] = useState(''); // State for error messages
//   const [loading, setLoading] = useState(false); // State for loading status

//   const handleInputChange = (e) => {
//     setAirlineId(e.target.value); // Update airlineId state
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); 
//     setLoading(true); 

//     const token = localStorage.getItem('token'); // Get token from local storage
//     if (!token) {
//       setError('You must be logged in to access this feature.');
//       setLoading(false);
//       return;
//     }
    
//     try {
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/get-airline/${airlineId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); 
//         throw new Error(errorData.message || 'Airline not found');
//       }

//       const data = await response.json(); 
//       setAirlineDetails(data); 
//       setAirlineId(''); 
//     } catch (err) {
//       setError(err.message); 
//       setAirlineDetails(null); 
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="find-airport-container">
//         <h1>Find Airline by Airline ID</h1>
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
//             {loading ? 'Searching...' : 'Find Airline'}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>} 
//       </div>

//       {airlineDetails && ( 
//         <div className="airport-list-container">
//           <h2>Airline Details:</h2>
//           <table className="airport-table">
//             <thead>
//               <tr>
//                 <th>Airline ID</th>
//                 <th>Airline Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{airlineDetails.airlineId}</td>
//                 <td>{airlineDetails.airlineName}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default FindAirline;



import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust import as per your folder structure
import axios from 'axios'; // Import axios
import '../AirportsRelated/ListAirports.css'; 
import '../AirportsRelated/FindAirport.css'; 

const FindAirline = () => {
  const [airlineId, setAirlineId] = useState(''); // State for storing airline ID
  const [airlineDetails, setAirlineDetails] = useState(null); // State for storing fetched airline details
  const [error, setError] = useState(''); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status

  const handleInputChange = (e) => {
    setAirlineId(e.target.value); // Update airlineId state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setLoading(true); 

    const token = localStorage.getItem('token'); // Get token from local storage
    if (!token) {
      setError('You must be logged in to access this feature.');
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.get(`http://localhost:8080/simply-fly/admin/get-airline/${airlineId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      setAirlineDetails(response.data); // Set the airline details from response data
      setAirlineId(''); // Clear the input field after fetching details
    } catch (err) {
      setError(err.response?.data?.message || 'Airline not found'); // Handle error response
      setAirlineDetails(null); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="find-airport-container">
        <h1>Find Airline by Airline ID</h1>
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
            {loading ? 'Searching...' : 'Find Airline'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>} 
      </div>

      {airlineDetails && ( 
        <div className="airport-list-container">
          <h2>Airline Details:</h2>
          <table className="airport-table">
            <thead>
              <tr>
                <th>Airline ID</th>
                <th>Airline Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{airlineDetails.airlineId}</td>
                <td>{airlineDetails.airlineName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default FindAirline;
