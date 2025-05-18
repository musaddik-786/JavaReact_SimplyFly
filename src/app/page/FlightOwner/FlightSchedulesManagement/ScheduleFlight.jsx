import React, { useState } from 'react';
import '../../Admin/AirportsRelated/AddAirport.css'; // Same CSS as AddAirport
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ScheduleFlight = () => {
  const [flightId, setFlightId] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [status, setStatus] = useState('Running'); // Default flight status
  const [filledSeats, setFilledSeats] = useState(0); // Default filled seats
  const [error, setError] = useState(''); // Error state
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    try {
      const response = await axios.post(
        `http://localhost:8080/simply-fly/flightTrips/scheduleflighttrip/${username}`,
        {
          flightId,
          source,
          destination,
          departure,
          arrival,
          ticketPrice: parseFloat(ticketPrice), // Ensure ticket price is a number
          status,
          filledSeats: parseInt(filledSeats, 10), // Ensure filled seats is a number
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        }
      );

      console.log('Flight trip scheduled:', response.data);
      // Reset form fields after successful submission
      resetForm();

      // Navigate to a relevant page, e.g., flight management
      navigate('/flights-management');
    } catch (error) {
      console.error('Error scheduling flight trip:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while scheduling the flight trip.');
    }
  };

  const resetForm = () => {
    setFlightId('');
    setSource('');
    setDestination('');
    setDeparture('');
    setArrival('');
    setTicketPrice('');
    setStatus('Running'); // Reset to default
    setFilledSeats(0); // Reset filled seats
    setError(''); // Clear error message
  };

  return (
    <div>
      <FlightOwnerNavbar />
      <div className="add-airport-container">
        <div className="form-card">
          <h2>Schedule New Flight Trip</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="flightId">Flight ID</label>
              <input
                type="text"
                id="flightId"
                value={flightId}
                onChange={(e) => setFlightId(e.target.value)}
                placeholder="Enter Flight ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="source">Source</label>
              <input
                type="text"
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="Enter Source IATA Code"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter Destination IATA Code"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="departure">Departure</label>
              <input
                type="datetime-local"
                id="departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="arrival">Arrival</label>
              <input
                type="datetime-local"
                id="arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ticketPrice">Ticket Price</label>
              <input
                type="number"
                id="ticketPrice"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(e.target.value)}
                placeholder="Enter Ticket Price"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Flight Status</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Running">Running</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="filledSeats">Filled Seats</label>
              <input
                type="number"
                id="filledSeats"
                value={filledSeats}
                onChange={(e) => setFilledSeats(e.target.value)}
                placeholder="Enter Number of Filled Seats"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Schedule Flight Trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFlight;













// import React, { useState } from 'react';
// import '../../Add-Airport/AddAirport.css'; // Same CSS as AddAirport
// import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar.jsx';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ScheduleFlight = () => {
//   const [flightId, setFlightId] = useState('');
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [departure, setDeparture] = useState('');
//   const [arrival, setArrival] = useState('');
//   const [ticketPrice, setTicketPrice] = useState('');
//   const [status, setStatus] = useState('Running'); // Default flight status
//   const [filledSeats, setFilledSeats] = useState(0); // Default filled seats
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('username');

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/simply-fly/flightTrips/scheduleflighttrip/${username}`,
//         {
//           flightId,
//           source,
//           destination,
//           departure,
//           arrival,
//           ticketPrice: parseFloat(ticketPrice), // Ensure ticket price is a number
//           status,
//           filledSeats: parseInt(filledSeats, 10), // Ensure filled seats is a number
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         }
//       );

//       console.log('Flight trip scheduled:', response.data);
//       // Reset form fields after successful submission
//       setFlightId('');
//       setSource('');
//       setDestination('');
//       setDeparture('');
//       setArrival('');
//       setTicketPrice('');
//       setStatus('Running'); // Reset to default
//       setFilledSeats(0); // Reset filled seats

//       // Navigate to a relevant page, e.g., flight management
//       navigate('/flights-management');
//     } catch (error) {
//       console.error('Error scheduling flight trip:', error);
//     }
//   };

//   return (
//     <div>
//       <FlightOwnerNavbar />
//       <div className="add-airport-container">
//         <div className="form-card">
//           <h2>Schedule New Flight Trip</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="flightId">Flight ID</label>
//               <input
//                 type="text"
//                 id="flightId"
//                 value={flightId}
//                 onChange={(e) => setFlightId(e.target.value)}
//                 placeholder="Enter Flight ID"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="source">Source</label>
//               <input
//                 type="text"
//                 id="source"
//                 value={source}
//                 onChange={(e) => setSource(e.target.value)}
//                 placeholder="Enter Source IATA Code"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="destination">Destination</label>
//               <input
//                 type="text"
//                 id="destination"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//                 placeholder="Enter Destination IATA Code"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="departure">Departure</label>
//               <input
//                 type="datetime-local"
//                 id="departure"
//                 value={departure}
//                 onChange={(e) => setDeparture(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="arrival">Arrival</label>
//               <input
//                 type="datetime-local"
//                 id="arrival"
//                 value={arrival}
//                 onChange={(e) => setArrival(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="ticketPrice">Ticket Price</label>
//               <input
//                 type="number"
//                 id="ticketPrice"
//                 value={ticketPrice}
//                 onChange={(e) => setTicketPrice(e.target.value)}
//                 placeholder="Enter Ticket Price"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="status">Flight Status</label>
//               <select
//                 id="status"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//               >
//                 <option value="Running">Running</option>
//                 <option value="Cancelled">Cancelled</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="filledSeats">Filled Seats</label>
//               <input
//                 type="number"
//                 id="filledSeats"
//                 value={filledSeats}
//                 onChange={(e) => setFilledSeats(e.target.value)}
//                 placeholder="Enter Number of Filled Seats"
//                 required
//               />
//             </div>

//             <button type="submit" className="submit-btn">
//               Schedule Flight Trip
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScheduleFlight;
