// import React, { useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import '../ListAirports/ListAirports.css'; 
// import '../FindAirport/FindAirport.css'; 

// const FindFlightOwner = () => {
//   const [airlineId, setAirlineId] = useState(''); // State for airline ID
//   const [flightOwnerDetails, setFlightOwnerDetails] = useState(null); // State for flight owner details
//   const [error, setError] = useState(''); // State for error message
//   const [loading, setLoading] = useState(false); // State for loading status

//   const handleInputChange = (e) => {
//     setAirlineId(e.target.value); // Update airline ID state
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setError(''); // Reset error message
//     setLoading(true); // Set loading to true

//     const token = localStorage.getItem('token'); // Get the token from local storage
//     if (!token) {
//       setError('You must be logged in to access this feature.'); // Handle token absence
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/flight-owner-by-airline/${airlineId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); 
//         throw new Error(errorData.message || 'Flight owner not found'); // Handle non-OK response
//       }

//       const data = await response.json(); // Parse the response data
//       setFlightOwnerDetails(data); // Set the flight owner details in state
//       setAirlineId(''); // Clear the input field
//     } catch (err) {
//       setError(err.message); // Set error message in state
//       setFlightOwnerDetails(null); // Clear flight owner details on error
//     } finally {
//       setLoading(false); // Reset loading status
//     }
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="find-airport-container">
//         <h1>Find Flight Owner by Airline ID</h1>
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
//             {loading ? 'Searching...' : 'Find Flight Owner'}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>} 

//         {flightOwnerDetails && ( 
//           <div className="flight-owner-list-container">
//             <h2>Flight Owner Details:</h2>
//             <table className="flight-owner-table">
//               <thead>
//                 <tr>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>Name</th>
//                   <th>Contact</th>
//                   <th>Age</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{flightOwnerDetails.username}</td>
//                   <td>{flightOwnerDetails.email}</td>
//                   <td>{flightOwnerDetails.name}</td>
//                   <td>{flightOwnerDetails.contact}</td>
//                   <td>{flightOwnerDetails.age}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default FindFlightOwner;


// import React, { useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import '../ListAirports/ListAirports.css'; 
// import '../FindAirport/FindAirport.css'; 

// const FindFlightOwner = () => {
//   const [airlineId, setAirlineId] = useState(''); // State for airline ID
//   const [flightOwnerDetails, setFlightOwnerDetails] = useState(null); // State for flight owner details
//   const [error, setError] = useState(''); // State for error message
//   const [loading, setLoading] = useState(false); // State for loading status

//   const handleInputChange = (e) => {
//     setAirlineId(e.target.value); // Update airline ID state
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setError(''); // Reset error message
//     setLoading(true); // Set loading to true

//     const token = localStorage.getItem('token'); // Get the token from local storage
//     if (!token) {
//       setError('You must be logged in to access this feature.'); // Handle token absence
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/flight-owner-by-airline/${airlineId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); 
//         throw new Error(errorData.message || 'Flight owner not found'); // Handle non-OK response
//       }

//       const data = await response.json(); // Parse the response data
//       setFlightOwnerDetails(data); // Set the flight owner details in state
//       setAirlineId(''); // Clear the input field
//     } catch (err) {
//       setError(err.message); // Set error message in state
//       setFlightOwnerDetails(null); // Clear flight owner details on error
//     } finally {
//       setLoading(false); // Reset loading status
//     }
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="find-airport-container"> {/* Keep the same CSS class */}
//         <h1>Find Flight Owner by Airline ID</h1>
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
//             {loading ? 'Searching...' : 'Find Flight Owner'}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>} 

//         {/* Move the flight owner details rendering inside the same container */}
//         {flightOwnerDetails && ( 
//           <div className="flight-owner-list-container">
//             <h2>Flight Owner Details:</h2>
//             <table className="flight-owner-table">
//               <thead>
//                 <tr>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>Name</th>
//                   <th>Contact</th>
//                   <th>Age</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{flightOwnerDetails.username}</td>
//                   <td>{flightOwnerDetails.email}</td>
//                   <td>{flightOwnerDetails.name}</td>
//                   <td>{flightOwnerDetails.contact}</td>
//                   <td>{flightOwnerDetails.age}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default FindFlightOwner;


// import React, { useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import '../ListAirports/ListAirports.css'; 
// // import './FindAirport.css'; 

// const FindFlightOwner = () => {
//   const [airlineId, setAirlineId] = useState(''); // State for airline ID
//   const [flightOwnerDetails, setFlightOwnerDetails] = useState(null); // State for flight owner details
//   const [error, setError] = useState(''); // State for error message
//   const [loading, setLoading] = useState(false); // State for loading status

//   const handleInputChange = (e) => {
//     setAirlineId(e.target.value); // Update airline ID state
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setError(''); // Reset error message
//     setLoading(true); // Set loading to true

//     const token = localStorage.getItem('token'); // Get the token from local storage
//     if (!token) {
//       setError('You must be logged in to access this feature.'); // Handle token absence
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/flight-owner-by-airline/${airlineId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); 
//         throw new Error(errorData.message || 'Flight owner not found'); // Handle non-OK response
//       }

//       const data = await response.json(); // Parse the response data
//       setFlightOwnerDetails(data); // Set the flight owner details in state
//       setAirlineId(''); // Clear the input field
//     } catch (err) {
//       setError(err.message); // Set error message in state
//       setFlightOwnerDetails(null); // Clear flight owner details on error
//     } finally {
//       setLoading(false); // Reset loading status
//     }
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="find-airport-container">
//         <h1>Find Flight Owner by Airline ID</h1>
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
//             {loading ? 'Searching...' : 'Find Flight Owner'}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>} 
//       </div>

//       {/* Render flight owner details outside of the main container */}
//       {flightOwnerDetails && ( 
//         <div className="airport-list-container">
//           <h2>Flight Owner Details:</h2>
//           <table className="airport-table">
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Name</th>
//                 <th>Contact</th>
//                 <th>Age</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{flightOwnerDetails.username}</td>
//                 <td>{flightOwnerDetails.email}</td>
//                 <td>{flightOwnerDetails.name}</td>
//                 <td>{flightOwnerDetails.contact}</td>
//                 <td>{flightOwnerDetails.age}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default FindFlightOwner;



import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Admin Navbar component
import axios from 'axios'; // Import axios
import '../AirportsRelated/ListAirports.css'; // Reuse styles from ListAirports
// import './FindFlightOwner.css'; // Specific styles for FindFlightOwner if needed

const FindFlightOwner = () => {
  const [airlineId, setAirlineId] = useState(''); // State to hold the input airline ID
  const [flightOwnerDetails, setFlightOwnerDetails] = useState(null); // State to store flight owner details
  const [error, setError] = useState(''); // State to store error messages
  const [loading, setLoading] = useState(false); // State for loading status

  const handleInputChange = (e) => {
    setAirlineId(e.target.value); // Update airline ID based on user input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setLoading(true); // Set loading state to true during API call

    const token = localStorage.getItem('token'); // Get token from local storage
    if (!token) {
      setError('You must be logged in to access this feature.');
      setLoading(false);
      return;
    }

    try {
      // Send GET request using axios
      const response = await axios.get(
        `http://localhost:8080/simply-fly/admin/flight-owner-by-airline/${airlineId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include token in headers
          },
        }
      );

      setFlightOwnerDetails(response.data); // Set flight owner details from API response
      setAirlineId(''); // Clear the input field
    } catch (err) {
      setError(err.response?.data?.message || 'Flight owner not found'); // Handle errors
      setFlightOwnerDetails(null); // Clear flight owner details on error
    } finally {
      setLoading(false); // Reset loading state after the request
    }
  };

  return (
    <>
      <AdminNavbar /> {/* Reusable AdminNavbar component */}
      <div className="find-airport-container">
        <h1>Find Flight Owner by Airline ID</h1>
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
            {loading ? 'Searching...' : 'Find Flight Owner'} {/* Show loading state in button */}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>} {/* Display error messages */}
      </div>

      {flightOwnerDetails && ( /* Display flight owner details if available */
        <div className="airport-list-container">
          <h2>Flight Owner Details:</h2>
          <table className="airport-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{flightOwnerDetails.username}</td>
                <td>{flightOwnerDetails.email}</td>
                <td>{flightOwnerDetails.name}</td>
                <td>{flightOwnerDetails.contact}</td>
                <td>{flightOwnerDetails.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default FindFlightOwner;
