// import React, { useEffect, useState } from "react";
// import "./SeatSelection.css"; // Add this for CSS styling
// import { useNavigate } from "react-router-dom"; // For redirection after booking

// const SeatSelection = ({ flightTripId }) => {
//   const [vacantSeats, setVacantSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const navigate = useNavigate(); // Hook to navigate to another page

//   useEffect(() => {
//     // Fetch vacant seats using the API
//     fetch(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`)
//       .then((response) => response.json())
//       .then((data) => setVacantSeats(data))
//       .catch((error) => console.error("Error fetching vacant seats:", error));
//   }, [flightTripId]);

//   const handleSeatClick = (seatNo) => {
//     // Toggle seat selection
//     if (selectedSeats.includes(seatNo)) {
//       setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNo));
//     } else {
//       setSelectedSeats([...selectedSeats, seatNo]);
//     }
//   };

//   const handleBooking = () => {
//     // Redirect to another page or handle booking logic
//     navigate("/booking-confirmation", { state: { selectedSeats } });
//   };

//   return (
//     <div className="seat-selection-container">
//       <h2>Select Your Seats</h2>
//       <div className="seat-grid">
//         {vacantSeats.map((seat, index) => (
//           <div
//             key={index}
//             className={`seat-box ${selectedSeats.includes(seat.seatNo) ? "selected" : ""}`}
//             onClick={() => handleSeatClick(seat.seatNo)}
//             title={seat.seatNo} // Tooltip to display seat number
//           >
//             {seat.seatNo}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleBooking} className="book-now-btn">
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default SeatSelection;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './SeatSelection.css'; // Import CSS for styling

// const SeatSelection = ({ flightTripId }) => {
//   const [vacantSeats, setVacantSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch vacant seats from API
//     fetch(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`)
//       .then((response) => response.json())
//       .then((data) => setVacantSeats(data))
//       .catch((error) => console.error("Error fetching vacant seats:", error));
//   }, [flightTripId]);




// const SeatSelection = () => {
//     const location = useLocation();
//     const { flightTripId } = location.state; // Get flightTripId from state
//     const [vacantSeats, setVacantSeats] = useState([]);
//     const [selectedSeats, setSelectedSeats] = useState([]);
  
//     useEffect(() => {
//       if (flightTripId) {
//         fetch(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`)
//           .then((response) => response.json())
//           .then((data) => setVacantSeats(data))
//           .catch((error) => console.error("Error fetching vacant seats:", error));
//       }
//     }, [flightTripId]);


//   const handleSeatClick = (seatNo) => {
//     // Toggle seat selection
//     if (selectedSeats.includes(seatNo)) {
//       setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNo));
//     } else {
//       setSelectedSeats([...selectedSeats, seatNo]);
//     }
//   };

//   const handleBooking = () => {
//     // Redirect to booking confirmation or handle booking logic
//     navigate("/booking-confirmation", { state: { selectedSeats } });
//   };

//   return (
//     <div className="seat-selection-container">
//       <h2>Select Your Seats</h2>
//       <div className="seat-grid">
//         {vacantSeats.map((seat) => (
//           <div
//             key={seat.seatNo}
//             className={`seat-box ${selectedSeats.includes(seat.seatNo) ? "selected" : ""}`}
//             onClick={() => handleSeatClick(seat.seatNo)}
//             title={`Seat No: ${seat.seatNo}`} // Tooltip on hover
//           >
//             {seat.seatNo}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleBooking} className="book-now-btn">
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default SeatSelection;


    // useEffect(() => {
    //     const flightTripId = localStorage.getItem('flightTripId');
    //     if (flightTripId) {
    //         fetch(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`)
    //             .then((response) => response.json())
    //             .then((data) => setVacantSeats(data))
    //             .catch((error) => console.error("Error fetching vacant seats:", error));
    //     }
    // }, []);



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './SeatSelection.css'; // Import CSS for styling

// const SeatSelection = () => {
//     const [vacantSeats, setVacantSeats] = useState([]);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const navigate = useNavigate();
   
   
//     useEffect(() => {
//         const flightTripId = localStorage.getItem('flightTripId');
//         const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
//         if (flightTripId && token) {
//             fetch(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': token, // Add the token here
//                     'Content-Type': 'application/json',
//                 },
//             })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch seats');
//                 }
//                 return response.json();
//             })
//             .then((data) => setVacantSeats(data))
//             .catch((error) => console.error("Error fetching vacant seats:", error));
//         }
//     }, []);


//     const handleSeatClick = (seatNo) => {
//         if (selectedSeats.includes(seatNo)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNo));
//         } else {
//             setSelectedSeats([...selectedSeats, seatNo]);
//         }
//     };

//     const handleBooking = () => {
//         navigate("/booking-confirmation", { state: { selectedSeats } });
//     };

//     return (
//         <div className="seat-selection-container">
//             <h2>Select Your Seats</h2>
//             <div className="seat-grid">
//                 {vacantSeats.map((seat) => (
//                     <div
//                         key={seat.seatNo}
//                         className={`seat-box ${selectedSeats.includes(seat.seatNo) ? "selected" : ""}`}
//                         onClick={() => handleSeatClick(seat.seatNo)}
//                         title={`Seat No: ${seat.seatNo}`} 
//                     >
//                         {seat.seatNo}
//                     </div>
//                 ))}
//             </div>
//             <button onClick={handleBooking} className="book-now-btn">
//                 Book Now
//             </button>
//         </div>
//     );
// };

// export default SeatSelection;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './SeatSelection.css'; // Import CSS for styling
// import NormalHeader from "../Header/NormalHeader";
// import Modal from "../../Components/Modal/Modal"


// const SeatSelection = () => {
//     const [vacantSeats, setVacantSeats] = useState([]);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false); 
//     const navigate = useNavigate();
   
//     useEffect(() => {
//         const flightTripId = localStorage.getItem('flightTripId');
//         const token = localStorage.getItem('token');
//         if (flightTripId && token) {
//             fetch(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': token, // Add the token here
//                     'Content-Type': 'application/json',
//                 },
//             })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch seats');
//                 }
//                 return response.json();
//             })
//             .then((data) => setVacantSeats(data))
//             .catch((error) => console.error("Error fetching vacant seats:", error));
//         }
//     }, []);

//     const handleSeatClick = (seatNo) => {
//         if (selectedSeats.includes(seatNo)) {
//             setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNo));
//         } else {
//             setSelectedSeats([...selectedSeats, seatNo]);
//         }
//     };

//     const handleBooking = () => {
//         // Open the modal when the booking button is clicked
//         setIsModalOpen(true);
//     };

//     const confirmBooking = () => {
//         // Store selected seats in localStorage
//         localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        
//         // Navigate to booking confirmation page
//         navigate("/booking-confirmation", { state: { selectedSeats } });
//     };

//     return (
//         <>
//         <NormalHeader/>
//         <div className="seat-selection-container">
//             <h2>Select Your Seats</h2>
//             <div className="seat-grid">
//                 {vacantSeats.map((seat) => (
//                     <div
//                         key={seat.seatNo}
//                         className={`seat-box ${selectedSeats.includes(seat.seatNo) ? "selected" : ""}`}
//                         onClick={() => handleSeatClick(seat.seatNo)}
//                         title={`Seat No: ${seat.seatNo}`} 
//                     >
//                         {seat.seatNo}
//                     </div>
//                 ))}
//             </div>
//             <button onClick={handleBooking} className="book-now-btn">
//                 Book Now
//             </button>
//         </div>



//             {/* Modal for booking confirmation */}
//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 title="Confirm Booking"
//             >
//                 <p>Are you sure you want to book the following seats?</p>
//                 <ul>
//                     {selectedSeats.map(seat => (
//                         <li key={seat}>Seat No: {seat}</li>
//                     ))}
//                 </ul>
//                 <button onClick={confirmBooking} className="book-now-btn">
//                     Confirm Booking
//                 </button>
//             </Modal>
//         </>
//     );
// };

// export default SeatSelection;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
import './SeatSelection.css'; // Import CSS for styling
import NormalHeader from "../Header/NormalHeader";
import Modal from "../../Components/Modal/Modal";

const SeatSelection = () => {
    const [vacantSeats, setVacantSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const navigate = useNavigate();
   
    useEffect(() => {
        const flightTripId = localStorage.getItem('flightTripId');
        const token = localStorage.getItem('token');
        if (flightTripId && token) {
            axios.get(`http://localhost:8080/simply-fly/customers/vacantseats/${flightTripId}`, {
                headers: {
                    'Authorization': token, // Add the token here
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setVacantSeats(response.data);
            })
            .catch((error) => {
                console.error("Error fetching vacant seats:", error);
            });
        }
    }, []);

    const handleSeatClick = (seatNo) => {
        if (selectedSeats.includes(seatNo)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNo));
        } else {
            setSelectedSeats([...selectedSeats, seatNo]);
        }
    };

    const handleBooking = () => {
        // Open the modal when the booking button is clicked
        setIsModalOpen(true);
    };

    const confirmBooking = () => {
        // Store selected seats in localStorage
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        
        // Navigate to booking confirmation page
        navigate("/booking-confirmation", { state: { selectedSeats } });
    };

    return (
        <>
            <NormalHeader />
            <div className="seat-selection-container">
                <h2>Select Your Seats</h2>
                <div className="seat-grid">
                    {vacantSeats.map((seat) => (
                        <div
                            key={seat.seatNo}
                            className={`seat-box ${selectedSeats.includes(seat.seatNo) ? "selected" : ""}`}
                            onClick={() => handleSeatClick(seat.seatNo)}
                            title={`Seat No: ${seat.seatNo}`} 
                        >
                            {seat.seatNo}
                        </div>
                    ))}
                </div>
                <button onClick={handleBooking} className="book-now-btn">
                    Book Now
                </button>
            </div>

            {/* Modal for booking confirmation */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Confirm Booking"
            >
                <p>Are you sure you want to book the following seats?</p>
                <ul>
                    {selectedSeats.map(seat => (
                        <li key={seat}>Seat No: {seat}</li>
                    ))}
                </ul>
                <button onClick={confirmBooking} className="book-now-btn">
                    Confirm Booking
                </button>
            </Modal>
        </>
    );
};

export default SeatSelection;
