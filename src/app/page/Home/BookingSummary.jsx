// import React from "react";
// import { useLocation } from "react-router-dom";

// const BookingSummary = () => {
//     const location = useLocation();
//     const { passengers, selectedSeats } = location.state || {};

//     return (
//         <div className="booking-summary-container">
//             <h2>Booking Summary</h2>
//             <div>
//                 {passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-card">
//                         <h3>Passenger {index + 1}</h3>
//                         <p>Name: {passenger.name}</p>
//                         <p>Age: {passenger.age}</p>
//                         <p>Gender: {passenger.gender}</p>
//                         <p>Seat: {passenger.seat}</p>
//                     </div>
//                 ))}
//                 <h3>Selected Seats:</h3>
//                 <ul>
//                     {selectedSeats.map((seat, index) => (
//                         <li key={index}>{seat}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentId ? 'Pending' : 'Booked');

//     const handlePayment = () => {
//         const bookingId = bookingData.bookingId;
//         const paymentId = bookingData.paymentId;

//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ paymentId, status: "Booked" }),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json();
//         })
//         .then(() => {
//             setPaymentStatus('Booked');
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <h2>Booking Summary</h2>
//             <div>
//                 {bookingData.passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-card">
//                         <h3>Passenger {index + 1}</h3>
//                         <p>Name: {passenger.name}</p>
//                         <p>Age: {passenger.age}</p>
//                         <p>Gender: {passenger.gender}</p>
//                         <p>Seat: {passenger.seat}</p>
//                         <p>Passenger ID: {passenger.passengerId}</p>
//                     </div>
//                 ))}
//                 <h3>Payment Status: {paymentStatus}</h3>
//                 {paymentStatus === "Pending" && (
//                     <button onClick={handlePayment} className="payment-button">
//                         Confirm Payment
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending'); // Default to Pending

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;
    
//         console.log("Token:", token);
//         console.log("Booking ID:", bookingId);
        
//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json(); // Ensure the response is parsed as JSON
//         })
//         .then((data) => {
//             console.log("Payment status updated:", data);
//             setPaymentStatus(data.message || 'Completed'); // Update the frontend status with the returned message
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <h2>Booking Summary</h2>
//             <div>
//                 {bookingData.passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-card">
//                         <h3>Passenger {index + 1}</h3>
//                         <p>Name: {passenger.name}</p>
//                         <p>Age: {passenger.age}</p>
//                         <p>Gender: {passenger.gender}</p>
//                         <p>Seat: {passenger.seat}</p>
//                         <p>Passenger ID: {passenger.passengerId}</p>
//                     </div>
//                 ))}
//                 <h3>Payment Status: {paymentStatus}</h3>
//                 {paymentStatus === "Pending" && (
//                     <button onClick={handlePaymentConfirmation} className="payment-button">
//                         Confirm Payment
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData, flightDetails } = location.state || {}; // Get flightDetails here
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending'); // Default to Pending

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;

//         console.log("Token:", token);
//         console.log("Booking ID:", bookingId);
        
//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json(); // Ensure the response is parsed as JSON
//         })
//         .then((data) => {
//             console.log("Payment status updated:", data);
//             setPaymentStatus(data.message || 'Completed'); // Update the frontend status with the returned message
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <h2>Booking Summary</h2>

//             {/* Display Flight Details */}
//             {flightDetails && (
//                 <div className="flight-details">
//                     <h3>
//                         {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
//                         &nbsp; &rarr; &nbsp; 
//                         {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
//                     </h3>
//                     <div className="flight-info">
//                         <p>Departure: {new Date(flightDetails.departure).toLocaleString()}</p>
//                         <p>Duration: {flightDetails.duration}</p>
//                         <p>Arrival: {new Date(flightDetails.arrival).toLocaleString()}</p>
//                     </div>
//                 </div>
//             )}

//             <div>
//                 {bookingData.passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-card">
//                         <h3>Passenger {index + 1}</h3>
//                         <p>Name: {passenger.name}</p>
//                         <p>Age: {passenger.age}</p>
//                         <p>Gender: {passenger.gender}</p>
//                         <p>Seat: {passenger.seat}</p>
//                         <p>Passenger ID: {passenger.passengerId}</p>
//                     </div>
//                 ))}
//                 <h3>Payment Status: {paymentStatus}</h3>
//                 {paymentStatus === "Pending" && (
//                     <button onClick={handlePaymentConfirmation} className="payment-button">
//                         Confirm Payment
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending');

//     // Retrieve flight details from local storage
//     const flightDetails = JSON.parse(localStorage.getItem('flightDetails'));

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;

//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setPaymentStatus(data.message || 'Completed');
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <h2>Booking Summary</h2>

//             {/* Display Flight Details */}
//             {flightDetails && (
//                 <div className="flight-details">
//                     <h3>
//                         {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
//                         &nbsp; &rarr; &nbsp; 
//                         {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
//                     </h3>
//                     <div className="flight-info">
//                         <p>Departure: {new Date(flightDetails.departure).toLocaleString()}</p>
//                         <p>Duration: {flightDetails.duration}</p>
//                         <p>Arrival: {new Date(flightDetails.arrival).toLocaleString()}</p>
//                     </div>
//                 </div>
//             )}

//             <div>
//                 {bookingData.passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-card">
//                         <h3>Passenger {index + 1}</h3>
//                         <p>Name: {passenger.name}</p>
//                         <p>Age: {passenger.age}</p>
//                         <p>Gender: {passenger.gender}</p>
//                         <p>Seat: {passenger.seat}</p>
//                         <p>Passenger ID: {passenger.passengerId}</p>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <h4>Payment Status: {paymentStatus}</h4>
//                 <button onClick={handlePaymentConfirmation}>Confirm Payment</button>
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import './BookingSummary.css'; // Import the CSS file for styles

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending');

//     // Retrieve flight details from local storage
//     const flightDetails = JSON.parse(localStorage.getItem('flightDetails'));

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;

//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setPaymentStatus(data.message || 'Completed');
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <div className="ticket">
//                 <h2>Booking Summary</h2>

//                 {/* Display Flight Details */}
//                 {flightDetails && (
//                     <div className="flight-details">
//                         <h3>
//                             {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
//                             &nbsp; &rarr; &nbsp; 
//                             {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
//                         </h3>
//                         <div className="flight-info">
//                             <p>Departure: {new Date(flightDetails.departure).toLocaleString()}</p>
//                             <p>Duration: {flightDetails.duration}</p>
//                             <p>Arrival: {new Date(flightDetails.arrival).toLocaleString()}</p>
//                         </div>
//                     </div>
//                 )}

//                 <div>
//                     {bookingData.passengers.map((passenger, index) => (
//                         <div key={index} className="passenger-card">
//                             <h3>Passenger {index + 1}</h3>
//                             <p>Name: {passenger.name}</p>
//                             <p>Age: {passenger.age}</p>
//                             <p>Gender: {passenger.gender}</p>
//                             <p>Seat: {passenger.seat}</p>
//                             <p>Passenger ID: {passenger.passengerId}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="payment-status">
//                     <h4>Payment Status: {paymentStatus}</h4>
//                     <button className="confirm-button" onClick={handlePaymentConfirmation}>
//                         Confirm Payment
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import './BookingSummary.css'; // Import the CSS file for styles

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending');

//     // Retrieve flight details from local storage
//     const flightDetails = JSON.parse(localStorage.getItem('flightDetails'));

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;

//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setPaymentStatus(data.message || 'Completed');
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <div className="ticket">
//                 <h2>Booking Summary</h2>

//                 {/* Display Flight Details */}
//                 {flightDetails && (
//                     <div className="flight-details">
//                         <h3 className="flight-route">
//                             {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
//                             &nbsp; &rarr; &nbsp; 
//                             {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
//                         </h3>
//                         <div className="flight-info">
//                             <div className="flight-info-item">
//                                 <strong>Departure:</strong> {new Date(flightDetails.departure).toLocaleString()}
//                             </div>
//                             <div className="flight-info-item">
//                                 <strong>Duration:</strong> {flightDetails.duration}
//                             </div>
//                             <div className="flight-info-item">
//                                 <strong>Arrival:</strong> {new Date(flightDetails.arrival).toLocaleString()}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <div className="passenger-info">
//                     <h4>Passenger Details</h4>
//                     {bookingData.passengers.map((passenger, index) => (
//                         <div key={index} className="passenger-card">
//                             <h5>Passenger {index + 1}</h5>
//                             <div className="passenger-details">
//                                 <span>{passenger.name}</span>
//                                 <span>{passenger.age}</span>
//                                 <span>{passenger.gender}</span>
//                                 <span>{passenger.seat}</span>
//                                 <span>{passenger.passengerId}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="payment-status">
//                     <h4>Payment Status: {paymentStatus}</h4>
//                     <button className="confirm-button" onClick={handlePaymentConfirmation}>
//                         Confirm Payment
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import './BookingSummary.css'; // Import the CSS file for styles

// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending');

//     // Retrieve flight details from local storage
//     const flightDetails = JSON.parse(localStorage.getItem('flightDetails'));

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;

//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setPaymentStatus(data.message || 'Completed');
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <div className="booking-summary-container">
//             <div className="ticket">
//                 <h2>Booking Summary</h2>

//                 {/* Display Flight Details */}
//                 {flightDetails && (
//                     <div className="flight-details">
//                         <h3 className="flight-route">
//                             {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
//                             &nbsp; &rarr; &nbsp; 
//                             {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
//                         </h3>
//                         <div className="flight-info">
//                             <div className="flight-info-item">
//                                 <strong>Departure:</strong> {new Date(flightDetails.departure).toLocaleString()}
//                             </div>
//                             <div className="flight-info-item">
//                                 <strong>Duration:</strong> {flightDetails.duration}
//                             </div>
//                             <div className="flight-info-item">
//                                 <strong>Arrival:</strong> {new Date(flightDetails.arrival).toLocaleString()}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <div className="passenger-info">
//                     <h4>Passenger Details</h4>
//                     {/* Header for Passenger Information */}
//                     <div className="passenger-header">
//                         <span>Name</span>
//                         <span>Age</span>
//                         <span>Gender</span>
//                         <span>Seat</span>
//                         <span>Passenger ID</span>
//                     </div>

//                     {bookingData.passengers.map((passenger, index) => (
//                         <div key={index} className="passenger-card">
//                             <h5>Passenger {index + 1}</h5>
//                             <div className="passenger-details">
//                                 <span>{passenger.name}</span>
//                                 <span>{passenger.age}</span>
//                                 <span>{passenger.gender}</span>
//                                 <span>{passenger.seat}</span>
//                                 <span>{passenger.passengerId}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="payment-status">
//                     <h4>Payment Status: {paymentStatus}</h4>
//                     <button className="confirm-button" onClick={handlePaymentConfirmation}>
//                         Confirm Payment
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingSummary;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import './BookingSummary.css'; // Import the CSS file for styles
// import NormalHeader from "../Header/NormalHeader";
// import { useBooking } from '../../Context/BookingContext';


// const BookingSummary = () => {
//     const location = useLocation();
//     const { bookingData } = location.state || {};
//     const { bookingDetails } = useBooking(); // Access the context
//     const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending');

//     // Retrieve flight details from local storage
//     const flightDetails = JSON.parse(localStorage.getItem('flightDetails'));

//     const handlePaymentConfirmation = () => {
//         const token = localStorage.getItem('token'); 
//         const bookingId = bookingData.bookingId;

//         fetch(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {
//             method: 'PUT',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': token, 
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Payment update failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setPaymentStatus(data.message || 'Completed');
//         })
//         .catch((error) => console.error("Payment error:", error));
//     };

//     return (
//         <>
//         <NormalHeader/>
//         <div className="booking-summary-container">
//             <div className="ticket">
//                 <h2>Booking Summary</h2>

//                 {/* Display Flight Details */}
//                 {flightDetails && (
//                     <div className="flight-details">
//                         <h3 className="flight-route">
//                             {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
//                             &nbsp; &rarr; &nbsp; 
//                             {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
//                         </h3>
//                         <div className="flight-info">
//                             <div className="flight-info-item">
//                                 <strong>Departure:</strong> {new Date(flightDetails.departure).toLocaleString()}
//                             </div>
//                             <div className="flight-info-item">
//                                 <strong>Duration:</strong> {flightDetails.duration}
//                             </div>
//                             <div className="flight-info-item">
//                                 <strong>Arrival:</strong> {new Date(flightDetails.arrival).toLocaleString()}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <div className="passenger-info">
//                     <h4>Passenger Details</h4>

//                     {bookingData.passengers.map((passenger, index) => (
//                         <div key={index} className="passenger-card">
//                             <h5>Passenger {index + 1}</h5>
//                             {/* Header for Passenger Information */}
//                             <div className="passenger-header">
//                                 <span>Name</span>
//                                 <span>Age</span>
//                                 <span>Gender</span>
//                                 <span>Seat</span>
//                                 <span>Passenger ID</span>
//                             </div>
//                             {/* Passenger Details */}
//                             <div className="passenger-details">
//                                 <span>{passenger.name}</span>
//                                 <span>{passenger.age}</span>
//                                 <span>{passenger.gender}</span>
//                                 <span>{passenger.seat}</span>
//                                 <span>{passenger.passengerId}</span>
//                             </div>
//                             <div>{passenger.amount}</div>
//                         </div>
//                     ))}
//                 </div>

//                   {/* Display the booking amount */}
//                   <div className="amount">
//                     <h4>Total Amount: ₹{bookingDetails.amount}</h4>
//                 </div>

//                 <div className="payment-status">
//                     <h4>Payment Status: {paymentStatus}</h4>
//                     <button className="confirm-button" onClick={handlePaymentConfirmation}>
//                         Confirm Payment
//                     </button>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default BookingSummary;



import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './BookingSummary.css'; // Import the CSS file for styles
import NormalHeader from "../Header/NormalHeader";
import { useBooking } from '../../Context/BookingContext';
import axios from 'axios'; // Import axios

const BookingSummary = () => {
    const location = useLocation();
    const { bookingData } = location.state || {};
    const { bookingDetails } = useBooking(); // Access the context
    const [paymentStatus, setPaymentStatus] = useState(bookingData?.paymentStatus || 'Pending');

    // Retrieve flight details from local storage
    const flightDetails = JSON.parse(localStorage.getItem('flightDetails'));

    const handlePaymentConfirmation = () => {
        const token = localStorage.getItem('token'); 
        const bookingId = bookingData.bookingId;

        axios.put(`http://localhost:8080/simply-fly/customers/confirm/${bookingId}`, {}, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': token, 
            },
        })
        .then((response) => {
            setPaymentStatus(response.data.message || 'Completed');
        })
        .catch((error) => {
            console.error("Payment error:", error);
            setPaymentStatus('Error occurred');
        });
    };

    return (
        <>
        <NormalHeader/>
        <div className="booking-summary-container">
            <div className="ticket">
                <h2>Booking Summary</h2>

                {/* Display Flight Details */}
                {flightDetails && (
                    <div className="flight-details">
                        <h3 className="flight-route">
                            {flightDetails.sourceAirport.name} ({flightDetails.sourceAirport.iataCode}) 
                            &nbsp; &rarr; &nbsp; 
                            {flightDetails.destinationAirport.name} ({flightDetails.destinationAirport.iataCode})
                        </h3>
                        <div className="flight-info">
                            <div className="flight-info-item">
                                <strong>Departure:</strong> {new Date(flightDetails.departure).toLocaleString()}
                            </div>
                            <div className="flight-info-item">
                                <strong>Duration:</strong> {flightDetails.duration}
                            </div>
                            <div className="flight-info-item">
                                <strong>Arrival:</strong> {new Date(flightDetails.arrival).toLocaleString()}
                            </div>
                        </div>
                    </div>
                )}

                <div className="passenger-info">
                    <h4>Passenger Details</h4>

                    {bookingData.passengers.map((passenger, index) => (
                        <div key={index} className="passenger-card">
                            <h5>Passenger {index + 1}</h5>
                            {/* Header for Passenger Information */}
                            <div className="passenger-header">
                                <span>Name</span>
                                <span>Age</span>
                                <span>Gender</span>
                                <span>Seat</span>
                                <span>Passenger ID</span>
                            </div>
                            {/* Passenger Details */}
                            <div className="passenger-details">
                                <span>{passenger.name}</span>
                                <span>{passenger.age}</span>
                                <span>{passenger.gender}</span>
                                <span>{passenger.seat}</span>
                                <span>{passenger.passengerId}</span>
                            </div>
                            <div>{passenger.amount}</div>
                        </div>
                    ))}
                </div>

                  {/* Display the booking amount */}
                  <div className="amount">
                    <h4>Total Amount: ₹{bookingDetails.amount}</h4>
                </div>

                <div className="payment-status">
                    <h4>Payment Status: {paymentStatus}</h4>
                    <button className="confirm-button" onClick={handlePaymentConfirmation}>
                        Confirm Payment
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default BookingSummary;
