import React, { useState } from 'react';
import axios from 'axios';
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import '../../Admin/AirportsRelated/FindAirport.css';

const GetAirportByCode = () => {
  const [iataCode, setIataCode] = useState('');
  const [airportDetails, setAirportDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setIataCode(e.target.value);
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
      const response = await axios.get(`http://localhost:8080/simply-fly/admin/find-airport/${iataCode}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      setAirportDetails(response.data);  // Store the airport details in the state
      setIataCode('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Capture the error message from response
      } else {
        setError('Airport not found'); // Fallback error message
      }
      setAirportDetails(null);  // Clear previous airport data in case of error
    } finally {
      setLoading(false);  // Always stop loading regardless of success or failure
    }
  };

  return (
    <>
      <FlightOwnerNavbar />
      <div className="find-airport-container">
        <h1>Find Airport by IATA Code</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="iataCode">IATA Code:</label>
            <input
              type="text"
              id="iataCode"
              value={iataCode}
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

export default GetAirportByCode;













// import React, { useState } from 'react';
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
// import '../../FindAirport/FindAirport.css';

// const GetAirportByCode = () => {
//   const [iataCode, setIataCode] = useState('');
//   const [airportDetails, setAirportDetails] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setIataCode(e.target.value);
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
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/find-airport/${iataCode}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Airport not found');
//       }

//       const data = await response.json();
//       setAirportDetails(data);
//       setIataCode('');
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
//       <div className="find-airport-container">
//         <h1>Find Airport by IATA Code</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="iataCode">IATA Code:</label>
//             <input
//               type="text"
//               id="iataCode"
//               value={iataCode}
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

// export default GetAirportByCode;



