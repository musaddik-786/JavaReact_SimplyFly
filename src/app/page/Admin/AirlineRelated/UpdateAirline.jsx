// import React, { useState } from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import '../ListAirports/ListAirports.css';
// import './UpdateAirline.css';

// const UpdateAirline = () => {
//   const [airlineId, setAirlineId] = useState('');
//   const [airlineName, setAirlineName] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();

//     if (!airlineId || !airlineName) {
//       setError('Airline ID and Name cannot be blank.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token'); // Assuming token-based auth
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/update-airline/${airlineId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, // Include token if needed
//         },
//         body: JSON.stringify({ airlineId, airlineName }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update airline.');
//       }

//       // Reset form after successful update
//       setAirlineId('');
//       setAirlineName('');
//       setError(''); // Clear any previous error
//       setSuccessMessage('Airline updated successfully');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//     <AdminNavbar/>
//     <div className="update-airline-container">
//       <h2>Update Airline</h2>
//       {error && <p className="error-message">{error}</p>}
//       {successMessage && <p className="success-message">{successMessage}</p>}

//       <form onSubmit={handleUpdateSubmit} className="update-airline-form">
//         <div className="form-group">
//           <label htmlFor="airlineId">Airline ID:</label>
//           <input
//             type="text"
//             id="airlineId"
//             value={airlineId}
//             onChange={(e) => setAirlineId(e.target.value)}
//             placeholder="Airline ID"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="airlineName">Airline Name:</label>
//           <input
//             type="text"
//             id="airlineName"
//             value={airlineName}
//             onChange={(e) => setAirlineName(e.target.value)}
//             placeholder="Airline Name"
//             required
//           />
//         </div>
//         <button type="submit">Update Airline</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default UpdateAirline;


import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar'; // Adjust according to your project structure
import axios from 'axios'; // Import axios
import '../AirportsRelated/ListAirports.css'; // Reuse the styling from ListAirports
import './UpdateAirline.css'; // Specific styling for UpdateAirline

const UpdateAirline = () => {
  const [airlineId, setAirlineId] = useState(''); // State for airline ID input
  const [airlineName, setAirlineName] = useState(''); // State for airline name input
  const [error, setError] = useState(''); // State for error message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();

    if (!airlineId || !airlineName) {
      setError('Airline ID and Name cannot be blank.');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Get token from local storage

      // Send PUT request using axios
      const response = await axios.put(
        `http://localhost:8080/simply-fly/admin/update-airline/${airlineId}`,
        { airlineId, airlineName }, // Payload (airlineId and airlineName)
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Attach token to headers
          },
        }
      );

      // Reset form and update UI on success
      setAirlineId(''); // Clear airline ID input
      setAirlineName(''); // Clear airline name input
      setError(''); // Clear any error messages
      setSuccessMessage('Airline updated successfully'); // Set success message
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update airline'); // Handle errors
    }
  };

  return (
    <>
      <AdminNavbar /> {/* Reusable AdminNavbar component */}
      <div className="update-airline-container">
        <h2>Update Airline</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error messages */}
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success messages */}

        <form onSubmit={handleUpdateSubmit} className="update-airline-form">
          <div className="form-group">
            <label htmlFor="airlineId">Airline ID:</label>
            <input
              type="text"
              id="airlineId"
              value={airlineId}
              onChange={(e) => setAirlineId(e.target.value)}
              placeholder="Airline ID"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="airlineName">Airline Name:</label>
            <input
              type="text"
              id="airlineName"
              value={airlineName}
              onChange={(e) => setAirlineName(e.target.value)}
              placeholder="Airline Name"
              required
            />
          </div>
          <button type="submit">Update Airline</button>
        </form>
      </div>
    </>
  );
};

export default UpdateAirline;
