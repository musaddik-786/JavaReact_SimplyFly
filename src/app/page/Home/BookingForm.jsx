// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './BookingForm.css';




//     return (
//         <div>
//             <h2>Booking Form</h2>
//             <div>
//                 <h3>Customer: {customerUsername}</h3>
//                 {passengers.map((passenger, index) => (
//                     <div key={index}>
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             value={passenger.name}
//                             onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//                         />
//                         <label>Age:</label>
//                         <input
//                             type="number"
//                             value={passenger.age}
//                             onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//                         />
//                         <label>Gender:</label>
//                         <select
//                             value={passenger.gender}
//                             onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//                         >
//                             <option value="">Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                         <label>Seat:</label>
//                         <input type="text" value={passenger.seat} readOnly />
//                     </div>
//                 ))}
//                 <button onClick={handleAddPassenger}>Add Passenger</button>
//             </div>
//             <button onClick={handleSubmit}>Submit Booking</button>
//         </div>
//     );
// };

// export default BookingForm;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './BookingForm.css';

// const BookingForm = () => {
//     const [passengers, setPassengers] = useState([{ name: "", age: "", gender: "", seat: "" }]);
//     const [customerUsername, setCustomerUsername] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Assuming customerUsername is stored in localStorage after login
//         const storedUsername = localStorage.getItem('username');
//         if (storedUsername) {
//             setCustomerUsername(storedUsername);
//         }

//         // Get selected seats from SeatSelection
//         const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//         if (selectedSeats && selectedSeats.length > 0) {
//             setPassengers(passengers.map((passenger, index) => ({
//                 ...passenger,
//                 seat: selectedSeats[index] || ""
//             })));
//         }
//     }, []);

//     const handlePassengerChange = (index, field, value) => {
//         const updatedPassengers = [...passengers];
//         updatedPassengers[index][field] = value;
//         setPassengers(updatedPassengers);
//     };

//     const handleAddPassenger = () => {
//         setPassengers([...passengers, { name: "", age: "", gender: "", seat: "" }]);
//     };

//     const handleSubmit = () => {
//         const flightTripId = localStorage.getItem('flightTripId');
//         const token = localStorage.getItem('token');
//         if (!flightTripId || !token) {
//             alert('Flight trip or user not found.');
//             return;
//         }

//         const bookingData = {
//             customerUsername,
//             flightTripId: parseInt(flightTripId),
//             passengers: passengers.map((passenger) => ({
//                 name: passenger.name,
//                 age: parseInt(passenger.age),
//                 gender: passenger.gender,
//                 seat: passenger.seat,
//             })),
//         };

//         fetch("http://localhost:8080/simply-fly/customers/booking/book-flight", {
//             method: "POST",
//             headers: {
//                 'Authorization': token,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bookingData),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Booking failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Booking successful:", data);
//             navigate("/booking-success", { state: { bookingId: data.bookingId } });
//         })
//         .catch((error) => console.error("Booking error:", error));
//     };

// return (
//     <div className="booking-form-container">
//         <form className="booking-form">
//             <h2>Booking Form</h2>
//             <div>
//                 <h3>Customer: {customerUsername}</h3>
//                 {passengers.map((passenger, index) => (
//                     <div key={index}>
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             value={passenger.name}
//                             onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//                         />
//                         <label>Age:</label>
//                         <input
//                             type="number"
//                             value={passenger.age}
//                             onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//                         />
//                         <label>Gender:</label>
//                         <select
//                             value={passenger.gender}
//                             onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//                         >
//                             <option value="">Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                         <label>Seat:</label>
//                         <input type="text" value={passenger.seat} readOnly />
//                     </div>
//                 ))}
//                 <button type="button" onClick={handleAddPassenger} className="add-passenger-btn">Add Passenger</button>
//             </div>
//             <button type="button" onClick={handleSubmit} className="submit-booking-btn">Submit Booking</button>
//         </form>
//     </div>
// );
// };
// export default BookingForm;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './BookingForm.css';

// const BookingForm = () => {
//     const [passengers, setPassengers] = useState([{ name: "", age: "", gender: "", seat: "" }]);
//     const [customerUsername, setCustomerUsername] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Assuming customerUsername is stored in localStorage after login
//         const storedUsername = localStorage.getItem('username');
//         if (storedUsername) {
//             setCustomerUsername(storedUsername);
//         }

//         // Get selected seats from local storage
//         const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//         if (selectedSeats && selectedSeats.length > 0) {
//             setPassengers(passengers.map((passenger, index) => ({
//                 ...passenger,
//                 seat: selectedSeats[index] || ""
//             })));
//         }
//     }, []);

//     const handlePassengerChange = (index, field, value) => {
//         const updatedPassengers = [...passengers];
//         updatedPassengers[index][field] = value;
//         setPassengers(updatedPassengers);
//     };

//     const handleAddPassenger = () => {
//         setPassengers([...passengers, { name: "", age: "", gender: "", seat: "" }]);
//     };

//     const handleSubmit = () => {
//         const flightTripId = localStorage.getItem('flightTripId');
//         const token = localStorage.getItem('token');
//         if (!flightTripId || !token) {
//             alert('Flight trip or user not found.');
//             return;
//         }

//         const bookingData = {
//             customerUsername,
//             flightTripId: parseInt(flightTripId),
//             passengers: passengers.map((passenger) => ({
//                 name: passenger.name,
//                 age: parseInt(passenger.age),
//                 gender: passenger.gender,
//                 seat: passenger.seat,
//             })),
//         };

//         fetch("http://localhost:8080/simply-fly/customers/booking/book-flight", {
//             method: "POST",
//             headers: {
//                 'Authorization': token,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bookingData),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Booking failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Booking successful:", data);
//             // Redirect to BookingSummary with passenger and seat info
//             navigate("/booking-summary", { state: { passengers, selectedSeats: JSON.parse(localStorage.getItem('selectedSeats')) } });
//         })
//         .catch((error) => console.error("Booking error:", error));
//     };

//     return (
//         <div className="booking-form-container">
//             <form className="booking-form">
//                 <h2>Booking Form</h2>
//                 <div>
//                     <h3>Customer: {customerUsername}</h3>
//                     {passengers.map((passenger, index) => (
//                         <div key={index}>
//                             <label>Name:</label>
//                             <input
//                                 type="text"
//                                 value={passenger.name}
//                                 onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//                             />
//                             <label>Age:</label>
//                             <input
//                                 type="number"
//                                 value={passenger.age}
//                                 onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//                             />
//                             <label>Gender:</label>
//                             <select
//                                 value={passenger.gender}
//                                 onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//                             >
//                                 <option value="">Select</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                             </select>
//                             <label>Seat:</label>
//                             <input type="text" value={passenger.seat} readOnly />
//                         </div>
//                     ))}
//                     <button type="button" onClick={handleAddPassenger} className="add-passenger-btn">Add Passenger</button>
//                 </div>
//                 <button type="button" onClick={handleSubmit} className="submit-booking-btn">Submit Booking</button>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './BookingForm.css';

// const BookingForm = () => {
//     const [passengers, setPassengers] = useState([]);
//     const [customerUsername, setCustomerUsername] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Assuming customerUsername is stored in localStorage after login
//         const storedUsername = localStorage.getItem('username');
//         if (storedUsername) {
//             setCustomerUsername(storedUsername);
//         }

//         // Get selected seats from SeatSelection
//         const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//         if (selectedSeats && selectedSeats.length > 0) {
//             // Initialize passengers based on the selected seats
//             const initialPassengers = selectedSeats.map(seat => ({
//                 name: "",
//                 age: "",
//                 gender: "",
//                 seat: seat,
//             }));
//             setPassengers(initialPassengers);
//         }
//     }, []);

//     const handlePassengerChange = (index, field, value) => {
//         const updatedPassengers = [...passengers];
//         updatedPassengers[index][field] = value;
//         setPassengers(updatedPassengers);
//     };

//     const handleSubmit = () => {
//         const flightTripId = localStorage.getItem('flightTripId');
//         const token = localStorage.getItem('token');
//         if (!flightTripId || !token) {
//             alert('Flight trip or user not found.');
//             return;
//         }

//         const bookingData = {
//             customerUsername,
//             flightTripId: parseInt(flightTripId),
//             passengers: passengers.map((passenger) => ({
//                 name: passenger.name,
//                 age: parseInt(passenger.age),
//                 gender: passenger.gender,
//                 seat: passenger.seat,
//             })),
//         };

//         fetch("http://localhost:8080/simply-fly/customers/booking/book-flight", {
//             method: "POST",
//             headers: {
//                 'Authorization': token,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bookingData),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Booking failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Booking successful:", data);
//             navigate("/booking-summary", { state: { bookingId: data.bookingId } });
//         })
//         .catch((error) => console.error("Booking error:", error));
//     };

//     return (
//         <div className="booking-form-container">
//             <h2>Booking Form</h2>
//             <h3>Customer: {customerUsername}</h3>
//             <form className="booking-form">
//                 {passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-info">
//                         <h4>Passenger {index + 1} (Seat: {passenger.seat})</h4>
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             value={passenger.name}
//                             onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//                             required
//                         />
//                         <label>Age:</label>
//                         <input
//                             type="number"
//                             value={passenger.age}
//                             onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//                             required
//                         />
//                         <label>Gender:</label>
//                         <select
//                             value={passenger.gender}
//                             onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//                             required
//                         >
//                             <option value="">Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                     </div>
//                 ))}
//                 <button type="button" onClick={handleSubmit} className="submit-booking-btn">Submit Booking</button>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './BookingForm.css';
// import { useBooking } from '../../Context/BookingContext';
// import NormalHeader from "../Header/NormalHeader";

// const BookingForm = () => {
//     const { setBookingDetails } = useBooking(); // Access the context
//     const [passengers, setPassengers] = useState([]);
//     const [customerUsername, setCustomerUsername] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUsername = localStorage.getItem('username');
//         if (storedUsername) {
//             setCustomerUsername(storedUsername);
//         }

//         const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//         if (selectedSeats && selectedSeats.length > 0) {
//             const initialPassengers = selectedSeats.map(seat => ({
//                 name: "",
//                 age: "",
//                 gender: "",
//                 seat: seat,
//             }));
//             setPassengers(initialPassengers);
//         }
//     }, []);

//     const handlePassengerChange = (index, field, value) => {
//         const updatedPassengers = [...passengers];
//         updatedPassengers[index][field] = value;
//         setPassengers(updatedPassengers);
//     };

//     const handleSubmit = () => {
//         const flightTripId = localStorage.getItem('flightTripId');
//         const token = localStorage.getItem('token');
//         if (!flightTripId || !token) {
//             alert('Flight trip or user not found.');
//             return;
//         }

//         const bookingData = {
//             customerUsername,
//             flightTripId: parseInt(flightTripId),
//             passengers: passengers.map((passenger) => ({
//                 name: passenger.name,
//                 age: parseInt(passenger.age),
//                 gender: passenger.gender,
//                 seat: passenger.seat,
//             })),
//         };

//         fetch("http://localhost:8080/simply-fly/customers/booking/book-flight", {
//             method: "POST",
//             headers: {
//                 'Authorization': token,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bookingData),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Booking failed');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Booking successful:", data);
//              // Store amount and bookingId in context
//              setBookingDetails({ amount: data.amount, bookingId: data.bookingId });
//             navigate("/booking-summary", { state: { bookingData: data } });
//         })
//         .catch((error) => console.error("Booking error:", error));
//     };

// return (
//     <>
//      <div className="background-image">
//         <NormalHeader />
//         <div className="booking-form-container">
//             {/* Background image container */}
//             <h2>Booking Form</h2>
//             <h3>Customer: {customerUsername}</h3>
//             <form className="booking-form">
//                 {passengers.map((passenger, index) => (
//                     <div key={index} className="passenger-info">
//                         <h4>Passenger {index + 1} (Seat: {passenger.seat})</h4>
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             value={passenger.name}
//                             onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//                             required
//                         />
//                         <label>Age:</label>
//                         <input
//                             type="number"
//                             value={passenger.age}
//                             onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//                             required
//                         />
//                         <label>Gender:</label>
//                         <select
//                             value={passenger.gender}
//                             onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//                             required
//                         >
//                             <option value="">Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                     </div>
//                 ))}
//                 <button type="button" onClick={handleSubmit} className="submit-booking-btn">Submit Booking</button>
//             </form>
//         </div>
//         </div>
//     </>
// );
// };
// export default BookingForm;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
import './BookingForm.css';
import { useBooking } from '../../Context/BookingContext';
import NormalHeader from "../Header/NormalHeader";

const BookingForm = () => {
    const { setBookingDetails } = useBooking(); // Access the context
    const [passengers, setPassengers] = useState([]);
    const [customerUsername, setCustomerUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setCustomerUsername(storedUsername);
        }

        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
        if (selectedSeats && selectedSeats.length > 0) {
            const initialPassengers = selectedSeats.map(seat => ({
                name: "",
                age: "",
                gender: "",
                seat: seat,
            }));
            setPassengers(initialPassengers);
        }
    }, []);

    const handlePassengerChange = (index, field, value) => {
        const updatedPassengers = [...passengers];
        updatedPassengers[index][field] = value;
        setPassengers(updatedPassengers);
    };

    const handleSubmit = () => {
        const flightTripId = localStorage.getItem('flightTripId');
        const token = localStorage.getItem('token');
        if (!flightTripId || !token) {
            alert('Flight trip or user not found.');
            return;
        }

        const bookingData = {
            customerUsername,
            flightTripId: parseInt(flightTripId),
            passengers: passengers.map((passenger) => ({
                name: passenger.name,
                age: parseInt(passenger.age),
                gender: passenger.gender,
                seat: passenger.seat,
            })),
        };

        axios.post("http://localhost:8080/simply-fly/customers/booking/book-flight", bookingData, {
            headers: {
                'Authorization': token,
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Booking successful:", response.data);
            // Store amount and bookingId in context
            setBookingDetails({ amount: response.data.amount, bookingId: response.data.bookingId });
            navigate("/booking-summary", { state: { bookingData: response.data } });
        })
        .catch((error) => {
            console.error("Booking error:", error);
            alert('Booking failed. Please try again.'); // Optionally show an alert
        });
    };

    return (
        <>
            <div className="background-image">
                <NormalHeader />
                <div className="booking-form-container">
                    <h2>Booking Form</h2>
                    <h3>Customer: {customerUsername}</h3>
                    <form className="booking-form">
                        {passengers.map((passenger, index) => (
                            <div key={index} className="passenger-info">
                                <h4>Passenger {index + 1} (Seat: {passenger.seat})</h4>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={passenger.name}
                                    onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                                    required
                                />
                                <label>Age:</label>
                                <input
                                    type="number"
                                    value={passenger.age}
                                    onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                                    required
                                />
                                <label>Gender:</label>
                                <select
                                    value={passenger.gender}
                                    onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        ))}
                        <button type="button" onClick={handleSubmit} className="submit-booking-btn">Submit Booking</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingForm;
