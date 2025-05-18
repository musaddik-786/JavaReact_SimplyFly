

// import NormalHeader from '../Header/NormalHeader';
// import travel_2 from "../images/2.png";


// import React, { useEffect, useState } from 'react';
// import './Homepage.css';
// import axios from 'axios';


// import { Button, Image } from 'semantic-ui-react'; 
// import travel_1 from "../images/1.jpeg";
// import travel_3 from "../images/1.jpeg";
// import travel_4 from "../images/1.jpeg";



//   const HomePage = () => {
//     const [airports, setAirports] = useState([]);
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [date, setDate] = useState('');
//     const [flights, setFlights] = useState([]);
  
//     useEffect(() => {
//       console.log('HomePage component mounted, fetching airports...');
//       const fetchAirports = async () => {
//         try {
//           const token = localStorage.getItem('token'); 
//           const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airports', {
//             headers: {
//               'Content-Type': 'application/json',
//               // 'Authorization': token,
//             },
//           });
  
//           if (!response.ok) {
//             throw new Error('Failed to fetch airports');
//           }
  
//           const data = await response.json();
//           console.log('Fetched Airports:', data); // Log fetched data
//           setAirports(data);
//         } catch (error) {
//           console.error('Error fetching airports:', error);
//         }
//       };
  
//       fetchAirports();
//     }, []);
  
//     const searchFlights = async () => {
//       if (source && destination && date) {
//         console.log('Searching flights from:', source, 'to:', destination, 'on:', date);
  
//         try {
//           const response = await fetch(`/simply-fly/flightTrips/getflighttrips/${source}/${destination}/${date}`);
//           const data = await response.json();
//           setFlights(data);
//         } catch (error) {
//           console.error('Error fetching flight trips:', error);
//         }
//       } else {
//         alert('Please fill all fields');
//       }
//     };

//   return (
//     <>
//       <NormalHeader />
      
//       <div className="homepage">
//         <section className="hero">
//           <div className="hero-content">
//             <h1>Book Flights Online: Elevate Your Journeys with Seamless Reservations and Exploration.</h1>
//             <p>Book with ease, journey with joy.</p>
//             <Button primary className="cta-button">Get Started</Button>
//           </div>
//         </section>


// <div className="welcome-section">
//       <div className="overlay"></div>
//       <div className="flight-search-container">
//         <h1>Welcome to Simply Fly</h1>
//         <p>Search for flights easily and quickly</p>
//         <div className="flight-search-form">
//           <div className="form-group">
//             <label htmlFor="source">Source</label>
//             <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
//               <option value="">Select Source</option>
//               {airports.map((airport) => (
//                 <option key={airport.airportCode} value={airport.airportCode}>
//                   {airport.location} ({airport.airportCode})
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="destination">Destination</label>
//             <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
//               <option value="">Select Destination</option>
//               {airports.map((airport) => (
//                 <option key={airport.airportCode} value={airport.airportCode}>
//                   {airport.location} ({airport.airportCode})
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="flightDate">Flight Date</label>
//             <input
//               type="date"
//               id="flightDate"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <button onClick={searchFlights}>Search Flights</button>
//         </div>

//         {/* Display search results */}
//         {flights.length > 0 && (
//           <div className="flight-results">
//             <h2>Available Flights</h2>
//             <ul>
//               {flights.map((flight) => (
//                 <li key={flight.flightTripId}>
//                   Flight {flight.flightNumber} from {flight.source} to {flight.destination} on{' '}
//                   {flight.date}. Seats Available: {flight.availableSeats}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>



// <section className="availability-section">
//           <h2>Real-time Availability and Instant Confirmation</h2>
//           <p>Experience ultimate convenience with our real-time availability...</p>
//           <div className="travel-cards-container">
//             <div className="travel-card">
//               <Image src={travel_1} alt="Availability 2" size="medium" />
//             </div>
//             <div className="travel-card">
//               <Image src={travel_3} alt="Availability 3" size="medium" />
//             </div>
//             <div className="travel-card">
//               <Image src={travel_4} alt="Availability 4" size="medium" />
//             </div>
//           </div>
//         </section>

//       </div>

//     </>
//   );
// };

// export default HomePage;


// import NormalHeader from '../Header/NormalHeader';
// import travel_2 from "../images/2.png";
// import React, { useEffect, useState } from 'react';
// import './Homepage.css';
// import { Button, Image } from 'semantic-ui-react'; 
// import travel_1 from "../images/1.jpeg";
// import travel_3 from "../images/1.jpeg";
// import travel_4 from "../images/1.jpeg";

// const HomePage = () => {
//     const [airports, setAirports] = useState([]);
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [date, setDate] = useState('');
//     const [flights, setFlights] = useState([]);
  
//     useEffect(() => {
//       const fetchAirports = async () => {
//         try {
//           const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airports', {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
  
//           if (!response.ok) {
//             throw new Error('Failed to fetch airports');
//           }
  
//           const data = await response.json();
//           setAirports(data);
//         } catch (error) {
//           console.error('Error fetching airports:', error);
//         }
//       };
  
//       fetchAirports();
//     }, []);
  
//     const searchFlights = async () => {
//       if (source && destination && date) {
//         try {
//           const response = await fetch(`/simply-fly/flightTrips/getflighttrips/${source}/${destination}/${date}`);
//           const data = await response.json();
//           setFlights(data);
//         } catch (error) {
//           console.error('Error fetching flight trips:', error);
//         }
//       } else {
//         alert('Please fill all fields');
//       }
//     };

//     return (
//       <>
//         <NormalHeader />
        
//         <div className="homepage">
//           <section className="hero">
//             <div className="hero-content">
//               <h1>Book Flights Online: Elevate Your Journeys with Seamless Reservations and Exploration.</h1>
//               <p>Book with ease, journey with joy.</p>
//               <Button primary className="cta-button">Get Started</Button>
//             </div>
//           </section>

//           <div className="welcome-section">
//             <div className="overlay"></div>
//             <div className="flight-search-container">
//               <h1>Welcome to Simply Fly</h1>
//               <p>Search for flights easily and quickly</p>
//               <div className="flight-search-form">
//                 <div className="form-group">
//                   <label htmlFor="source">Source</label>
//                   <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
//                     <option value="">Select Source</option>
//                     {airports.map((airport) => (
//                       <option key={airport.iataCode} value={airport.iataCode}>
//                         {airport.location} ({airport.iataCode})
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="destination">Destination</label>
//                   <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
//                     <option value="">Select Destination</option>
//                     {airports.map((airport) => (
//                       <option key={airport.iataCode} value={airport.iataCode}>
//                         {airport.location} ({airport.iataCode})
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="flightDate">Flight Date</label>
//                   <input
//                     type="date"
//                     id="flightDate"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                   />
//                 </div>

//                 <button onClick={searchFlights}>Search Flights</button>
//               </div>

//               {/* Display search results */}
//               {flights.length > 0 && (
//                 <div className="flight-results">
//                   <h2>Available Flights</h2>
//                   <ul>
//                     {flights.map((flight) => (
//                       <li key={flight.flightTripId}>
//                         Flight {flight.flightId} from {flight.sourceAirport.name} to {flight.destinationAirport.name} on {new Date(flight.departure).toLocaleDateString()}. Price: ₹{flight.ticketPrice}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <section className="availability-section">
//             <h2>Real-time Availability and Instant Confirmation</h2>
//             <p>Experience ultimate convenience with our real-time availability...</p>
//             <div className="travel-cards-container">
//               <div className="travel-card">
//                 <Image src={travel_1} alt="Availability 1" size="medium" />
//               </div>
//               <div className="travel-card">
//                 <Image src={travel_3} alt="Availability 2" size="medium" />
//               </div>
//               <div className="travel-card">
//                 <Image src={travel_4} alt="Availability 3" size="medium" />
//               </div>
//             </div>
//           </section>
//         </div>
//       </>
//     );
// };

// export default HomePage;


// import NormalHeader from '../Header/NormalHeader';
// import React, { useEffect, useState } from 'react';
// import './Homepage.css';
// import axios from 'axios';
// import { Button, Image } from 'semantic-ui-react'; 
// import travel_1 from "../images/1.jpeg";
// import travel_3 from "../images/1.jpeg";
// import travel_4 from "../images/1.jpeg";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// const HomePage = () => {
//     const [airports, setAirports] = useState([]);
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [date, setDate] = useState('');
  
//     const navigate = useNavigate(); // Create a navigate function

//     useEffect(() => {
//         const fetchAirports = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airports', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
  
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch airports');
//                 }
  
//                 const data = await response.json();
//                 setAirports(data);
//             } catch (error) {
//                 console.error('Error fetching airports:', error);
//             }
//         };
  
//         fetchAirports();
//     }, []);
  
//     const searchFlights = async () => {
//         if (source && destination && date) {
//             try {
//                 const response = await fetch(`http://localhost:8080/simply-fly/flightTrips/getflighttrips/${source}/${destination}/${date}`);
//                 const data = await response.json();

//                 // Store flight data in local storage or state management
//                 localStorage.setItem('flightResults', JSON.stringify(data)); // Store the fetched data
//                 navigate('/flight-results'); // Navigate to the FlightResults page
//             } catch (error) {
//                 console.error('Error fetching flight trips:', error);
//             }
//         } else {
//             alert('Please fill all fields');
//         }
//     };

//     return (
//         <>
//             <NormalHeader />
//             <div className="homepage">
//                 <section className="hero">
//                     <div className="hero-content">
//                         <h1>Book Flights Online: Elevate Your Journeys with Seamless Reservations and Exploration.</h1>
//                         <p>Book with ease, journey with joy.</p>
//                         <Button primary className="cta-button">Get Started</Button>
//                     </div>
//                 </section>

//                 <div className="welcome-section">
//                     <div className="overlay"></div>
//                     <div className="flight-search-container">
//                         <h1>Welcome to Simply Fly</h1>
//                         <p>Search for flights easily and quickly</p>
//                         <div className="flight-search-form">
//                             <div className="form-group">
//                                 <label htmlFor="source">Source</label>
//                                 <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
//                                     <option value="">Select Source</option>
//                                     {airports.map((airport) => (
//                                         <option key={airport.airportCode} value={airport.airportCode}>
//                                             {airport.location} ({airport.airportCode})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="destination">Destination</label>
//                                 <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
//                                     <option value="">Select Destination</option>
//                                     {airports.map((airport) => (
//                                         <option key={airport.airportCode} value={airport.airportCode}>
//                                             {airport.location} ({airport.airportCode})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="flightDate">Flight Date</label>
//                                 <input
//                                     type="date"
//                                     id="flightDate"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                 />
//                             </div>

//                             <button onClick={searchFlights}>Search Flights</button>
//                         </div>
//                     </div>
//                 </div>

//                 <section className="availability-section">
//                     <h2>Real-time Availability and Instant Confirmation</h2>
//                     <p>Experience ultimate convenience with our real-time availability...</p>
//                     <div className="travel-cards-container">
//                         <div className="travel-card">
//                             <Image src={travel_1} alt="Availability 2" size="medium" />
//                         </div>
//                         <div className="travel-card">
//                             <Image src={travel_3} alt="Availability 3" size="medium" />
//                         </div>
//                         <div className="travel-card">
//                             <Image src={travel_4} alt="Availability 4" size="medium" />
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// };

// export default HomePage;

// import NormalHeader from '../Header/NormalHeader';
// import React, { useEffect, useState } from 'react';
// import './Homepage.css';
// import axios from 'axios';
// import { Button, Image } from 'semantic-ui-react'; 
// import travel_1 from "../images/1.jpeg";
// import travel_3 from "../images/1.jpeg";
// import travel_4 from "../images/1.jpeg";
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const [airports, setAirports] = useState([]);
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [date, setDate] = useState('');
  
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchAirports = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-airports', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
  
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch airports');
//                 }
  
//                 const data = await response.json();
//                 setAirports(data);
//             } catch (error) {
//                 console.error('Error fetching airports:', error);
//             }
//         };
  
//         fetchAirports();
//     }, []);
  
//     const searchFlights = async () => {
//         if (source && destination && date) {
//             try {
//                 const response = await fetch(`http://localhost:8080/simply-fly/flightTrips/getflighttrips/${source}/${destination}/${date}`);
//                 const data = await response.json();
//                 localStorage.setItem('flightResults', JSON.stringify(data));
//                 navigate('/flight-results');
//             } catch (error) {
//                 console.error('Error fetching flight trips:', error);
//             }
//         } else {
//             alert('Please fill all fields');
//         }
//     };

//     return (
//         <>
//             <NormalHeader />
//             <div className="homepage">
//                 <section className="hero">
//                     <div className="hero-content">
//                         <h1>Book Flights Online: Elevate Your Journeys with Seamless Reservations and Exploration.</h1>
//                         <p>Book with ease, journey with joy.</p>
//                         <Button primary className="cta-button">Get Started</Button>
//                     </div>
//                 </section>

//                 <div className="info-line">
//                 <p>📢 Current Offers: Get 20% off on round trips! ✈️ Flight 123 is running late.</p>
//             </div>
//  <div className="offer-slider">
//     <div className="offer-cards">
//         <div className="offer-card">
//             <img src="../images/dubai.jpg" alt="Offer 1" /> {/* Update with the actual path */}
//             <p>20% off on your next flight!</p>
//         </div>
//         <div className="offer-card">
//             <img src="path/to/image2.jpg" alt="Offer 2" /> {/* Update with the actual path */}
//             <p>Book now and get free meals!</p>
//         </div>
//         <div className="offer-card">
//             <img src="path/to/image3.jpg" alt="Offer 3" /> {/* Update with the actual path */}
//             <p>Last-minute deals available!</p>
//         </div>
//         <div className="offer-card">
//             <img src="path/to/image4.jpg" alt="Offer 4" /> {/* Update with the actual path */}
//             <p>Upgrade to business class at 30% off!</p>
//         </div>
//         <div className="offer-card">
//             <img src="path/to/image5.jpg" alt="Offer 5" /> {/* Update with the actual path */}
//             <p>Earn double loyalty points on round trips!</p>
//         </div>
//     </div>
// </div>
//                 <div className="welcome-section">
//                     <div className="overlay"></div>
//                     <div className="flight-search-container">
//                         <h1>Welcome to Simply Fly</h1>
//                         <p>Search for flights easily and quickly</p>
//                         <div className="flight-search-form">
//                             <div className="form-group">
//                                 <label htmlFor="source">Source</label>
//                                 <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
//                                     <option value="">Select Source</option>
//                                     {airports.map((airport) => (
//                                         <option key={airport.iataCode} value={airport.iataCode}>
//                                             {airport.location} ({airport.iataCode})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="destination">Destination</label>
//                                 <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
//                                     <option value="">Select Destination</option>
//                                     {airports.map((airport) => (
//                                         <option key={airport.iataCode} value={airport.iataCode}>
//                                             {airport.location} ({airport.iataCode})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="flightDate">Flight Date</label>
//                                 <input
//                                     type="date"
//                                     id="flightDate"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                 />
//                             </div>

//                             <button onClick={searchFlights}>Search Flights</button>
//                         </div>
//                     </div>
//                 </div>

//                 <section className="availability-section">
//                     <h2>Real-time Availability and Instant Confirmation</h2>
//                     <p>Experience ultimate convenience with our real-time availability...</p>
//                     <div className="travel-cards-container">
//                         <div className="travel-card">
//                             <Image src={travel_1} alt="Availability 1" size="medium" />
//                         </div>
//                         <div className="travel-card">
//                             <Image src={travel_3} alt="Availability 2" size="medium" />
//                         </div>
//                         <div className="travel-card">
//                             <Image src={travel_4} alt="Availability 3" size="medium" />
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// };

// export default HomePage;



import NormalHeader from '../Header/NormalHeader';
import React, { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';
import { Button, Image } from 'semantic-ui-react'; 
import travel_1 from "../images/1.jpeg";
import travel_3 from "../images/1.jpeg";
import travel_4 from "../images/1.jpeg";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [airports, setAirports] = useState([]);
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
  
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAirports = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8080/simply-fly/admin/list-all-airports', {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             });
    //             setAirports(response.data);
    //         } catch (error) {
    //             console.error('Error fetching airports:', error);
    //         }
    //     };
  
    //     fetchAirports();
    // }, []);

    try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get('http://localhost:8080/simply-fly/admin/list-all-airports', {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': token,  // Include token here
            },
        });
        const airportsData = Array.isArray(response.data) ? response.data : [];
        setAirports(airportsData);
        console.log('Airports fetched:', airportsData);
    } catch (error) {
        console.error('Error fetching airports:', error);
        setAirports([]); 
    }
};

fetchAirports();
}, []);

  
    const searchFlights = async () => {
        if (source && destination && date) {
            try {
                const response = await axios.get(`http://localhost:8080/simply-fly/flightTrips/getflighttrips/${source}/${destination}/${date}`);
                localStorage.setItem('flightResults', JSON.stringify(response.data));
                navigate('/flight-results');
            } catch (error) {
                console.error('Error fetching flight trips:', error);
            }
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <>
            <NormalHeader />
            <div className="homepage">
                <section className="hero">
                    <div className="hero-content">
                        <h1>Book Flights Online: Elevate Your Journeys with Seamless Reservations and Exploration.</h1>
                        <p>Book with ease, journey with joy.</p>
                        <Button primary className="cta-button">Get Started</Button>
                    </div>
                </section>

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

                <div className="welcome-section">
                    <div className="overlay"></div>
                    <div className="flight-search-container">
                        <h1>Welcome to Simply Fly</h1>
                        <p>Search for flights easily and quickly</p>
                        <div className="flight-search-form">
                            <div className="form-group">
                                <label htmlFor="source">Source</label>
                                <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
                                    <option value="">Select Source</option>
                                    {airports.map((airport) => (
                                        <option key={airport.iataCode} value={airport.iataCode}>
                                            {airport.location} ({airport.iataCode})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="destination">Destination</label>
                                <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
                                    <option value="">Select Destination</option>
                                    {airports.map((airport) => (
                                        <option key={airport.iataCode} value={airport.iataCode}>
                                            {airport.location} ({airport.iataCode})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="flightDate">Flight Date</label>
                                <input
                                    type="date"
                                    id="flightDate"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>

                            <button onClick={searchFlights}>Search Flights</button>
                        </div>
                    </div>
                </div>

                <section className="availability-section">
                    <h2>Real-time Availability and Instant Confirmation</h2>
                    <p>Experience ultimate convenience with our real-time availability...</p>
                    <div className="travel-cards-container">
                        <div className="travel-card">
                            <Image src={travel_1} alt="Availability 1" size="medium" />
                        </div>
                        <div className="travel-card">
                            <Image src={travel_3} alt="Availability 2" size="medium" />
                        </div>
                        <div className="travel-card">
                            <Image src={travel_4} alt="Availability 3" size="medium" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
