// FlightResults.js
// import React from 'react';
// import './FlightResults.css'; // Add your CSS file for styling

// const FlightResults = ({ flights }) => {
//   return (
//     <div className="flight-results-container">
//       <h2>Available Flights</h2>
//       <div className="flight-cards">
//         {flights.map((flight) => (
//           <div className="flight-card" key={flight.flightTripId}>
//             <h3>Flight Number: {flight.flightNumber}</h3>
//             <p>From: {flight.source}</p>
//             <p>To: {flight.destination}</p>
//             <p>Date: {flight.date}</p>
//             <p>Available Seats: {flight.availableSeats}</p>
//             <button className="book-button">Book Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlightResults;

// import React, { useEffect, useState } from 'react';
// import './FlightResults.css'; // Add your CSS file for styling

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     return (
//         <div className="flight-results-container">
//             <h2>Available Flights</h2>
//             <div className="flight-cards">
//                 {flights.length > 0 ? (
//                     flights.map((flight) => (
//                         <div className="flight-card" key={flight.flightTripId}>
//                             <h3>Flight ID: {flight.flightId}</h3>
//                             <p>From: {flight.sourceAirport.name} ({flight.sourceAirport.iataCode})</p>
//                             <p>To: {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})</p>
//                             <p>Departure: {new Date(flight.departure).toLocaleString()}</p>
//                             <p>Arrival: {new Date(flight.arrival).toLocaleString()}</p>
//                             <p>Duration: {flight.duration}</p>
//                             <p>Price: ₹{flight.ticketPrice}</p>
//                             <p>Status: {flight.status}</p>
//                             <p>Filled Seats: {flight.filledSeats}</p>
//                             <button className="book-button">Book Now</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No flights available. Please search for flights.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FlightResults;


// import React, { useEffect, useState } from 'react';
// import './FlightResults.css'; // Ensure this CSS file is properly linked

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     return (
//         <div className="flight-results-container">
//             <h2>Available Flights</h2>
//             <div className="flight-cards">
//                 {flights.length > 0 ? (
//                     flights.map((flight) => (
//                         <div className="flight-card" key={flight.flightTripId}>
//                             <div className="flight-info">
//                                 <h3>Flight ID: {flight.flightId}</h3>
//                                 <p className="flight-route">
//                                     {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
//                                     &nbsp; &rarr; &nbsp; 
//                                     {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
//                                 </p>
//                                 <p className="flight-timings">
//                                     <span>Departure: {new Date(flight.departure).toLocaleString()}</span><br />
//                                     <span>Arrival: {new Date(flight.arrival).toLocaleString()}</span>
//                                 </p>
//                             </div>
//                             <div className="flight-details">
//                                 <p>Duration: {flight.duration}</p>
//                                 <p className="flight-price">Price: ₹{flight.ticketPrice}</p>
//                                 <p>Status: {flight.status}</p>
//                                 <p>Filled Seats: {flight.filledSeats}</p>
//                             </div>
//                             <button className="book-button">Book Now</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No flights available. Please search for flights.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FlightResults;


// import React, { useEffect, useState } from 'react';
// import './FlightResults.css'; // Ensure this CSS file is properly linked

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     return (
//         <div className="flight-results-container">
//             <h2>Available Flights</h2>
//             <div className="flight-cards">
//                 {flights.length > 0 ? (
//                     flights.map((flight) => (
//                         <div className="flight-card" key={flight.flightTripId}>
//                             <h3 className="flight-route">
//                                 {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
//                                 &nbsp; &rarr; &nbsp; 
//                                 {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
//                             </h3>
//                             <div className="flight-details">
//                                 <div className="flight-detail">
//                                     <p>Departure:</p>
//                                     <p>{new Date(flight.departure).toLocaleString()}</p>
//                                 </div>
//                                 <div className="flight-detail">
//                                     <p>Arrival:</p>
//                                     <p>{new Date(flight.arrival).toLocaleString()}</p>
//                                 </div>
//                             </div>
//                             <div className="duration-price">
//                                 <p className="duration">Duration: {flight.duration}</p>
//                                 <p className="price">Price: ₹{flight.ticketPrice}</p>
//                             </div>
//                             <div className="status-seats">
//                                 <p>Status: {flight.status}</p>
//                                 <p>Filled Seats: {flight.filledSeats}</p>
//                             </div>
//                             <button className="book-button">Book Now</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No flights available. Please search for flights.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FlightResults;


// import React, { useEffect, useState } from 'react';
// import './FlightResults.css'; // Ensure this CSS file is properly linked

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     return (
//         <div className="flight-results-container">
//             <h2>Available Flights</h2>
//             <div className="flight-cards">
//                 {flights.length > 0 ? (
//                     flights.map((flight) => (
//                         <div className="flight-card" key={flight.flightTripId}>
//                             <h3 className="flight-route">
//                                 {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
//                                 &nbsp; &rarr; &nbsp; 
//                                 {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
//                             </h3>
//                             <div className="flight-details">
//                                 <div className="flight-detail">
//                                     <p>Departure:</p>
//                                     <p>{new Date(flight.departure).toLocaleString()}</p>
//                                 </div>
//                                 <div className="flight-detail">
//                                     <p>Arrival:</p>
//                                     <p>{new Date(flight.arrival).toLocaleString()}</p>
//                                 </div>
//                             </div>
//                             <p className="duration">Duration: {flight.duration}</p>
//                             <div className="duration-price">
//                                 <p className="price">Price: ₹{flight.ticketPrice}</p>
//                                 <button className="book-button">Book Now</button>
//                             </div>
//                             <div className="status-seats">
//                                 <p>Status: {flight.status}</p>
//                                 <p>Filled Seats: {flight.filledSeats}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No flights available. Please search for flights.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FlightResults;

// import React, { useEffect, useState } from 'react';
// import './FlightResults.css'; // Ensure this CSS file is properly linked
// import NormalHeader from '../Header/NormalHeader';

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     return (
//         <>
//         <NormalHeader/>
//         <div className="flight-results-container">
//             <h2>Available Flights</h2>
//             <div className="flight-cards">
//                 {flights.length > 0 ? (
//                     flights.map((flight) => (
//                         <div className="flight-card" key={flight.flightTripId}>
//                             <h3 className="flight-route">
//                                 {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
//                                 &nbsp; &rarr; &nbsp; 
//                                 {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
//                             </h3>
//                             <div className="flight-details">
//                                 <div className="flight-detail">
//                                     <p>Departure:</p>
//                                     <p>{new Date(flight.departure).toLocaleString()}</p>
//                                 </div>
//                                 <div className="duration">
//                                     <p>Duration:</p>
//                                     <p>{flight.duration}</p>
//                                 </div>
//                                 <div className="flight-detail">
//                                     <p>Arrival:</p>
//                                     <p>{new Date(flight.arrival).toLocaleString()}</p>
//                                 </div>
//                             </div>
//                             <div className="duration-price">
//                                 <p className="price">Price: ₹{flight.ticketPrice}</p>
//                                 <button className="book-button">Book Now</button>
//                             </div>
//                             <div className="status-seats">
//                                 <p>Status: {flight.status}</p>
//                                 <p>Filled Seats: {flight.filledSeats}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No flights available. Please search for flights.</p>
//                 )}
//             </div>
//         </div>
//         </>
//     );
// };

// export default FlightResults;

// import React, { useEffect, useState } from 'react';
// import './FlightResults.css'; // Ensure this CSS file is properly linked
// import NormalHeader from '../Header/NormalHeader';

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     return (
//         <>
//         <NormalHeader/>
//         <div className="flight-results-container">
//             <h2>Available Flights</h2>
//             <div className="flight-cards">
//                 {flights.length > 0 ? (
//                     flights.map((flight) => (
//                         <div className="flight-card" key={flight.flightTripId}>
//                             <div className="card-header">
//                                 <h3 className="flight-route">
//                                     {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
//                                     &nbsp; &rarr; &nbsp; 
//                                     {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
//                                 </h3>
//                             </div>
//                             <div className="flight-details">
//                                 <div className="flight-detail">
//                                     <p>Departure:</p>
//                                     <p>{new Date(flight.departure).toLocaleString()}</p>
//                                 </div>
//                                 <div className="duration">
//                                     <p>Duration:</p>
//                                     <p>{flight.duration}</p>
//                                 </div>
//                                 <div className="flight-detail">
//                                     <p>Arrival:</p>
//                                     <p>{new Date(flight.arrival).toLocaleString()}</p>
//                                 </div>
//                             </div>
//                             <div className="price-book">
//                                 <div className="price">
//                                     <p>Price: ₹{flight.ticketPrice}</p>
//                                 </div>
//                                 <button className="book-button">Book Now</button>
//                             </div>
//                             <div className="status-seats">
//                                 <p>Status: {flight.status}</p>
//                                 <p>Filled Seats: {flight.filledSeats}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No flights available. Please search for flights.</p>
//                 )}
//             </div>
//         </div>
//         </>
//     );
// };

// export default FlightResults;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import './FlightResults.css'; // Ensure this CSS file is properly linked
// import NormalHeader from '../Header/NormalHeader';

// const FlightResults = () => {
//     const [flights, setFlights] = useState([]);
//     const navigate = useNavigate(); // Initialize navigate for redirection

//     useEffect(() => {
//         const storedFlights = localStorage.getItem('flightResults');
//         if (storedFlights) {
//             setFlights(JSON.parse(storedFlights));
//         }
//     }, []);

//     // const handleBookNow = () => {
//     //     const token = localStorage.getItem('token'); // Check for token in local storage
//     //     if (!token) {
//     //         // Redirect to login page if token doesn't exist
//     //         navigate("/user/login"); // Use navigate instead of window.location.href
//     //         return;
//     //     }
//     //     navigate("/seatselection", { state: { flightTripId } });
//     //     // Add logic to handle booking if user is logged in
//     //     alert("Proceeding to book the flight.");
//     // };
//     const handleBookNow = (flightTripId) => {
//         const token = localStorage.getItem('token'); 
//         if (!token) {
//             navigate("/user/login"); 
//             return;
//         }
//         // Pass flightTripId as state to SeatSelection component
//         navigate("/seatselection", { state: { flightTripId } });
//         alert("Proceeding to book the flight.");
//     };

//     return (
//         <>
//             <NormalHeader />
//             <div className="flight-results-container">
//                 <h2>Available Flights</h2>
//                 <div className="flight-cards">
//                     {flights.length > 0 ? (
//                         flights.map((flight) => (
//                             <div className="flight-card" key={flight.flightTripId}>
//                                 <div className="card-header">
//                                     <h3 className="flight-route">
//                                         {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
//                                         &nbsp; &rarr; &nbsp; 
//                                         {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
//                                     </h3>
//                                 </div>
//                                 <div className="flight-details">
//                                     <div className="flight-detail">
//                                         <p>Departure:</p>
//                                         <p>{new Date(flight.departure).toLocaleString()}</p>
//                                     </div>
//                                     <div className="duration">
//                                         <p>Duration:</p>
//                                         <p>{flight.duration}</p>
//                                     </div>
//                                     <div className="flight-detail">
//                                         <p>Arrival:</p>
//                                         <p>{new Date(flight.arrival).toLocaleString()}</p>
//                                     </div>
//                                 </div>
//                                 <div className="price-book">
//                                     <div className="price">
//                                         <p>Price: ₹{flight.ticketPrice}</p>
//                                     </div>
//                                     {/* <button className="book-button" onClick={handleBookNow}>Book Now</button> */}
//                                     <button className="book-button" onClick={() => handleBookNow(flight.flightTripId)}>Book Now</button>
//                                 </div>
//                                 <div className="status-seats">
//                                     <p>Status: {flight.status}</p>
//                                     <p>Filled Seats: {flight.filledSeats}</p>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No flights available. Please search for flights.</p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FlightResults;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './FlightResults.css'; // Ensure this CSS file is properly linked
import NormalHeader from '../Header/NormalHeader';
import dubaiImage from '../images/dubai.jpg'; // Adjust the path as needed


const FlightResults = () => {
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate(); // Initialize navigate for redirection

    useEffect(() => {
        const storedFlights = localStorage.getItem('flightResults');
        if (storedFlights) {
            setFlights(JSON.parse(storedFlights));
        }
    }, []);

    const handleBookNow = (flightTripId) => {
        const token = localStorage.getItem('token'); 
        if (!token) {
            localStorage.setItem('redirectAfterLogin', '/flight-results'); // Store the referrer route
            navigate("/user/login"); 
            return;
        }
    
        // Find the selected flight details
        const selectedFlight = flights.find(flight => flight.flightTripId === flightTripId);
        
        // Store flightTripId and flight details in local storage
        localStorage.setItem('flightTripId', flightTripId);
        localStorage.setItem('flightDetails', JSON.stringify(selectedFlight)); // Store the flight details
    
        navigate("/seatselection");
        alert("Proceeding to book the flight.");
    };
    

    return (
        <>
        <div className="flight-results-background">
            <NormalHeader />
            <div className="info-line">
                <p>📢 Current Offers: Get 20% off on round trips! ✈️ Flight 123 is running late.</p>
            </div>
            <div className="offer-slider">
    <div className="offer-cards">
        <div className="offer-card">
            <img src="../images/dubai.jpg" alt="Offer 1" /> {/* Update with the actual path */}
            <p>20% off on your next flight!</p>
        </div>
        <div className="offer-card">
            <img src="path/to/image2.jpg" alt="Offer 2" /> {/* Update with the actual path */}
            <p>Book now and get free meals!</p>
        </div>
        <div className="offer-card">
            <img src="path/to/image3.jpg" alt="Offer 3" /> {/* Update with the actual path */}
            <p>Last-minute deals available!</p>
        </div>
        <div className="offer-card">
            <img src="path/to/image4.jpg" alt="Offer 4" /> {/* Update with the actual path */}
            <p>Upgrade to business class at 30% off!</p>
        </div>
        <div className="offer-card">
            <img src="path/to/image5.jpg" alt="Offer 5" /> {/* Update with the actual path */}
            <p>Earn double loyalty points on round trips!</p>
        </div>
    </div>
</div>

            <div className="flight-results-container">
                <h2>Available Flights</h2>
                <div className="flight-cards">
                    {flights.length > 0 ? (
                        flights.map((flight) => (
                            <div className="flight-card" key={flight.flightTripId}>
                                <div className="card-header">
                                    <h3 className="flight-route">
                                        {flight.sourceAirport.name} ({flight.sourceAirport.iataCode}) 
                                        &nbsp; &rarr; &nbsp; 
                                        {flight.destinationAirport.name} ({flight.destinationAirport.iataCode})
                                    </h3>
                                </div>
                                <div className="flight-details">
                                    <div className="flight-detail">
                                        <p>Departure:</p>
                                        <p>{new Date(flight.departure).toLocaleString()}</p>
                                    </div>
                                    <div className="duration">
                                        <p>Duration:</p>
                                        <p>{flight.duration}</p>
                                    </div>
                                    <div className="flight-detail">
                                        <p>Arrival:</p>
                                        <p>{new Date(flight.arrival).toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="price-book">
                                    <div className="price">
                                        <p>Price: ₹{flight.ticketPrice}</p>
                                    </div>
                                    <button className="book-button" onClick={() => handleBookNow(flight.flightTripId)}>Book Now</button>
                                </div>
                                <div className="status-seats">
                                    <p>Status: {flight.status}</p>
                                    <p>Filled Seats: {flight.filledSeats}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No flights available. Please search for flights.</p>
                    )}
                </div>
            </div>
            </div>
        </>
    );
};

export default FlightResults;