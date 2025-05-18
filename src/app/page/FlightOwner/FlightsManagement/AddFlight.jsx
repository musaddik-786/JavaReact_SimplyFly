import React, { useState } from 'react';
import '../../Admin/AirportsRelated/AddAirport.css'; // Same CSS as AddAirport
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddFlight = () => {
  const [flightCode, setFlightCode] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [checkInWeight, setCheckInWeight] = useState('');
  const [cabinWeight, setCabinWeight] = useState('');
  const [airlineId, setAirlineId] = useState('');
  const [lastArrivedAirportId, setLastArrivedAirportId] = useState('');
  const [lastArrivedTime, setLastArrivedTime] = useState('');
  const [flightStatus, setFlightStatus] = useState('Active'); // Default flight status
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    try {
      const response = await axios.post(
        `http://localhost:8080/simply-fly/flights/add-flights/${username}`,
        {
          flightCode,
          totalSeats: parseInt(totalSeats, 10), // Ensure the seats are numbers
          checkInWeight: parseFloat(checkInWeight),
          cabinWeight: parseFloat(cabinWeight),
          airlineId,
          lastArrivedAirportId,
          lastArrivedTime,
          flightStatus,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        }
      );

      console.log('Flight added:', response.data);
      // Clear form after successful submission
      setFlightCode('');
      setTotalSeats('');
      setCheckInWeight('');
      setCabinWeight('');
      setAirlineId('');
      setLastArrivedAirportId('');
      setLastArrivedTime('');
      setFlightStatus('Active'); // Reset to default
      setErrorMessage(''); // Clear any existing error messages

      navigate('/flights-management');
    } catch (error) {
      // Error handling: Capture detailed error message
      const errorMessage = (error.response && error.response.data && error.response.data.message)
        ? error.response.data.message
        : 'An error occurred while adding the flight.';

      setErrorMessage(errorMessage); // Set the error message to state
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div>
      <FlightOwnerNavbar />
      <div className="add-airport-container">
        <div className="form-card">
          <h2>Add New Flight</h2>
          {/* Display error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="flightCode">Flight Code</label>
              <input
                type="text"
                id="flightCode"
                value={flightCode}
                onChange={(e) => setFlightCode(e.target.value)}
                placeholder="Enter Flight Code"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalSeats">Total Seats</label>
              <input
                type="number"
                id="totalSeats"
                value={totalSeats}
                onChange={(e) => setTotalSeats(e.target.value)}
                placeholder="Enter Total Seats"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkInWeight">Check-In Weight (kg)</label>
              <input
                type="number"
                id="checkInWeight"
                value={checkInWeight}
                onChange={(e) => setCheckInWeight(e.target.value)}
                placeholder="Enter Check-In Weight"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cabinWeight">Cabin Weight (kg)</label>
              <input
                type="number"
                id="cabinWeight"
                value={cabinWeight}
                onChange={(e) => setCabinWeight(e.target.value)}
                placeholder="Enter Cabin Weight"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="airlineId">Airline ID</label>
              <input
                type="text"
                id="airlineId"
                value={airlineId}
                onChange={(e) => setAirlineId(e.target.value)}
                placeholder="Enter Airline ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastArrivedAirportId">Last Arrived Airport ID</label>
              <input
                type="text"
                id="lastArrivedAirportId"
                value={lastArrivedAirportId}
                onChange={(e) => setLastArrivedAirportId(e.target.value)}
                placeholder="Enter Last Arrived Airport ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastArrivedTime">Last Arrived Time</label>
              <input
                type="datetime-local"
                id="lastArrivedTime"
                value={lastArrivedTime}
                onChange={(e) => setLastArrivedTime(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="flightStatus">Flight Status</label>
              <select
                id="flightStatus"
                value={flightStatus}
                onChange={(e) => setFlightStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Add Flight
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFlight;
















// import React, { useState } from 'react';
// import '../../Add-Airport/AddAirport.css';// Same CSS as AddAirport
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar.jsx';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddFlight = () => {
//   const [flightCode, setFlightCode] = useState('');
//   const [totalSeats, setTotalSeats] = useState('');
//   const [checkInWeight, setCheckInWeight] = useState('');
//   const [cabinWeight, setCabinWeight] = useState('');
//   const [airlineId, setAirlineId] = useState('');
//   const [lastArrivedAirportId, setLastArrivedAirportId] = useState('');
//   const [lastArrivedTime, setLastArrivedTime] = useState('');
//   const [flightStatus, setFlightStatus] = useState('Active'); // Default flight status
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('username');

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/simply-fly/flights/add-flights/${username}`,
//         {
//           flightCode,
//           totalSeats: parseInt(totalSeats, 10), // Ensure the seats are numbers
//           checkInWeight: parseFloat(checkInWeight),
//           cabinWeight: parseFloat(cabinWeight),
//           airlineId,
//           lastArrivedAirportId,
//           lastArrivedTime,
//           flightStatus,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         }
//       );

//       console.log('Flight added:', response.data);
//       setFlightCode('');
//       setTotalSeats('');
//       setCheckInWeight('');
//       setCabinWeight('');
//       setAirlineId('');
//       setLastArrivedAirportId('');
//       setLastArrivedTime('');
//       setFlightStatus('Active'); // Reset to default

//       navigate('/flights-management');
//     } catch (error) {
//       console.error('Error adding flight:', error);
//     }
//   };

//   return (
//     <div>
//       <FlightOwnerNavbar />
//       <div className="add-airport-container">
//         <div className="form-card">
//           <h2>Add New Flight</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="flightCode">Flight Code</label>
//               <input
//                 type="text"
//                 id="flightCode"
//                 value={flightCode}
//                 onChange={(e) => setFlightCode(e.target.value)}
//                 placeholder="Enter Flight Code"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="totalSeats">Total Seats</label>
//               <input
//                 type="number"
//                 id="totalSeats"
//                 value={totalSeats}
//                 onChange={(e) => setTotalSeats(e.target.value)}
//                 placeholder="Enter Total Seats"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="checkInWeight">Check-In Weight (kg)</label>
//               <input
//                 type="number"
//                 id="checkInWeight"
//                 value={checkInWeight}
//                 onChange={(e) => setCheckInWeight(e.target.value)}
//                 placeholder="Enter Check-In Weight"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="cabinWeight">Cabin Weight (kg)</label>
//               <input
//                 type="number"
//                 id="cabinWeight"
//                 value={cabinWeight}
//                 onChange={(e) => setCabinWeight(e.target.value)}
//                 placeholder="Enter Cabin Weight"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="airlineId">Airline ID</label>
//               <input
//                 type="text"
//                 id="airlineId"
//                 value={airlineId}
//                 onChange={(e) => setAirlineId(e.target.value)}
//                 placeholder="Enter Airline ID"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="lastArrivedAirportId">Last Arrived Airport ID</label>
//               <input
//                 type="text"
//                 id="lastArrivedAirportId"
//                 value={lastArrivedAirportId}
//                 onChange={(e) => setLastArrivedAirportId(e.target.value)}
//                 placeholder="Enter Last Arrived Airport ID"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="lastArrivedTime">Last Arrived Time</label>
//               <input
//                 type="datetime-local"
//                 id="lastArrivedTime"
//                 value={lastArrivedTime}
//                 onChange={(e) => setLastArrivedTime(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="flightStatus">Flight Status</label>
//               <select
//                 id="flightStatus"
//                 value={flightStatus}
//                 onChange={(e) => setFlightStatus(e.target.value)}
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </div>

//             <button type="submit" className="submit-btn">
//               Add Flight
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddFlight;
