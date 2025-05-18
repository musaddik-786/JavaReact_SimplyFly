// import React, { useState } from 'react';
// import '../Add-Airport/AddAirport.css'; // Reusing the same CSS as AddAirline
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddFlightOwner = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [age, setAge] = useState('');
//   const [airlineId, setAirlineId] = useState('');
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');

//     try {
//       const response = await axios.post('http://localhost:8080/simply-fly/admin/add-flightowner', {
//         username,
//         password,
//         email,
//         name,
//         contact,
//         age,
//         airlineId
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         }
//       });

//       console.log('Flight Owner added:', response.data);

//       // Clear the input fields after successful submission
//       setUsername('');
//       setPassword('');
//       setEmail('');
//       setName('');
//       setContact('');
//       setAge('');
//       setAirlineId('');

//       // Navigate back to admin or a suitable page
//       navigate('/admin');
//     } catch (error) {
//       console.error('Error adding flight owner:', error);
//     }
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <div className="add-airport-container">
//         <div className="form-card">
//           <h2>Add New Flight Owner</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter Username"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter Password"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter Email"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter Name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="contact">Contact</label>
//               <input
//                 type="text"
//                 id="contact"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 placeholder="Enter Contact Number"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="age">Age</label>
//               <input
//                 type="number"
//                 id="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Enter Age"
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

//             <button type="submit" className="submit-btn">Add Flight Owner</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddFlightOwner;

// import React, { useState, useEffect } from 'react';
// import '../Add-Airport/AddAirport.css'; // Reusing the same CSS as AddAirline
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddFlightOwner = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [age, setAge] = useState('');
//   const [airlineId, setAirlineId] = useState('');
//   const [ownerExists, setOwnerExists] = useState(false); // New state for checking flight owner existence
//   const navigate = useNavigate();

//   // Effect to check if the airline ID already has a flight owner
//   useEffect(() => {
//     const checkOwnerExists = async () => {
//       if (airlineId) {
//         const token = localStorage.getItem('token');
//         try {
//           const response = await axios.get(`http://localhost:8080/simply-fly/admin/check-flightowner/${airlineId}`, {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': token,
//             }
//           });
//           setOwnerExists(response.data.exists); // Assume the response returns an object with an "exists" property
//         } catch (error) {
//           console.error('Error checking flight owner existence:', error);
//         }
//       } else {
//         setOwnerExists(false); // Reset if airlineId is cleared
//       }
//     };

//     checkOwnerExists();
//   }, [airlineId]);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (ownerExists) {
//       alert('This Airline ID already has a flight owner.');
//       return;
//     }

//     const token = localStorage.getItem('token');

//     try {
//       const response = await axios.post('http://localhost:8080/simply-fly/admin/add-flightowner', {
//         username,
//         password,
//         email,
//         name,
//         contact,
//         age,
//         airlineId
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         }
//       });

//       console.log('Flight Owner added:', response.data);

//       // Clear the input fields after successful submission
//       setUsername('');
//       setPassword('');
//       setEmail('');
//       setName('');
//       setContact('');
//       setAge('');
//       setAirlineId('');

//       // Navigate back to admin or a suitable page
//       navigate('/admin');
//     } catch (error) {
//       console.error('Error adding flight owner:', error);
//     }
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <div className="add-airport-container">
//         <div className="form-card">
//           <h2>Add New Flight Owner</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter Username"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter Password"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter Email"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter Name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="contact">Contact</label>
//               <input
//                 type="text"
//                 id="contact"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 placeholder="Enter Contact Number"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="age">Age</label>
//               <input
//                 type="number"
//                 id="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Enter Age"
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
//               {ownerExists && <p style={{ color: 'red' }}>This Airline ID already has a flight owner.</p>}
//             </div>

//             <button type="submit" className="submit-btn">Add Flight Owner</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddFlightOwner;


import React, { useState } from 'react';
import '../AirportsRelated/AddAirport.css'; // Reusing the same CSS as AddAirline
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddFlightOwner = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [airlineId, setAirlineId] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:8080/simply-fly/admin/add-flightowner', {
        username,
        password,
        email,
        name,
        contact,
        age,
        airlineId
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      });

      console.log('Flight Owner added:', response.data);

      // Clear the input fields after successful submission
      setUsername('');
      setPassword('');
      setEmail('');
      setName('');
      setContact('');
      setAge('');
      setAirlineId('');
      setErrorMessage(''); // Clear any previous error messages

      // Navigate back to admin or a suitable page
      navigate('/admin');
    } catch (error) {
      console.error('Error adding flight owner:', error);
      
      // Check if the error response indicates the airline ID is already in use
      if (error.response && error.response.status === 500) {
        setErrorMessage('Airline ID already has a flight owner.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="add-airport-container">
        <div className="form-card">
          <h2>Add New Flight Owner</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter Contact Number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
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

            <button type="submit" className="submit-btn">Add Flight Owner</button>
          </form>

          {/* Display error message if exists */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default AddFlightOwner;
