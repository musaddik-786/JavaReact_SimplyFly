import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar'; 
import '../../Admin/AirportsRelated/FindAirportByLocation.css'; 

const GetAirportByLocation = () => {
  const [location, setLocation] = useState('');
  const [airportDetails, setAirportDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
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
      const response = await axios.get(
        `http://localhost:8080/simply-fly/admin/find-airport/location/${location}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        }
      );

      setAirportDetails(response.data); // Handle success case
      setLocation(''); // Clear input
    } catch (err) {
      // Error handling using err.response.data.message
      const errorMessage = (err.response && err.response.data && err.response.data.message) 
        ? err.response.data.message 
        : 'No airports found for this location';
        
      setError(errorMessage); // Set error message
      setAirportDetails(null); // Clear previous airport details
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <>
      <FlightOwnerNavbar />
      <div className="find-airport-location-container">
        <h1>Find Airport by Location</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Find Airport'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>

      {airportDetails && (
        <div className="airport-list-container">
          <h2>Airport Details:</h2>
          <table className="airport-table">
            <thead>
              <tr>
                <th>IATA Code</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{airportDetails.iataCode}</td>
                <td>{airportDetails.name}</td>
                <td>{airportDetails.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default GetAirportByLocation;











// import React, { useState } from 'react';
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar'; 
// import '../../FindAirportByLocation/FindAirportByLocation.css'; 
// //import './FindAirportByLocation.css'; // Ensure this CSS file includes the styles above

// const GetAirportByLocation = () => {
//   const [location, setLocation] = useState('');
//   const [airportDetails, setAirportDetails] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setLocation(e.target.value);
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
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/find-airport/location/${location}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'No airports found for this location');
//       }

//       const data = await response.json();
//       setAirportDetails(data);
//       setLocation('');
//     } catch (err) {
//       setError(err.message);
//       setAirportDetails(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <FlightOwnerNavbar />
//       <div className="find-airport-location-container">
//         <h1>Find Airport by Location</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="location">Location:</label>
//             <input
//               type="text"
//               id="location"
//               value={location}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Searching...' : 'Find Airport'}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>}
//       </div>

//       {airportDetails && (
//         <div className="airport-list-container">
//           <h2>Airport Details:</h2>
//           <table className="airport-table">
//             <thead>
//               <tr>
//                 <th>IATA Code</th>
//                 <th>Name</th>
//                 <th>Location</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{airportDetails.iataCode}</td>
//                 <td>{airportDetails.name}</td>
//                 <td>{airportDetails.location}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default GetAirportByLocation;

