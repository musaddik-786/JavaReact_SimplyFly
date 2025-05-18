// import React, { useEffect, useState } from 'react';
// import '../ListAirports/ListAirports.css'; // Same CSS file for styling
// import AdminNavbar from '../AdminNavbar/AdminNavbar';

// const UpdateFlightOwner = () => {
//   const [flightOwners, setFlightOwners] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedOwner, setSelectedOwner] = useState(null);
//   const [updateForm, setUpdateForm] = useState({ username: '', password: '', email: '', name: '', contact: '', age: '', airlineId: '' });

//   // Fetch all flight owners when the component mounts
//   useEffect(() => {
//     const fetchFlightOwners = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight owners');
//         }

//         const data = await response.json();
//         setFlightOwners(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightOwners();
//   }, []);

//   // Handle the Update button click
//   const handleUpdateClick = (owner) => {
//     setSelectedOwner(owner);
//     setUpdateForm({
//       username: owner.username,
//       password: '',
//       email: owner.email,
//       name: owner.name,
//       contact: owner.contact,
//       age: owner.age,
//       airlineId: owner.airlineId,
//     });
//   };

//   // Handle the update form submission
//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${updateForm.username}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//         body: JSON.stringify(updateForm),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update flight owner: ${updateForm.username}`);
//       }

//       // Refetch the flight owners list after successful update
//       setFlightOwners((prevOwners) => 
//         prevOwners.map((owner) => 
//           owner.username === updateForm.username ? { ...owner, ...updateForm } : owner
//         )
//       );

//       // Reset form and selected owner
//       setSelectedOwner(null);
//       setUpdateForm({ username: '', password: '', email: '', name: '', contact: '', age: '', airlineId: '' });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight owners...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="flight-owner-list-container">
//         <h1>Update Flight Owners</h1>

//         {/* Update Form */}
//         {selectedOwner && (
//           <form onSubmit={handleUpdateSubmit} className="update-flight-owner-form">
//             <h2>Update Flight Owner</h2>
//             <input 
//               type="text" 
//               value={updateForm.username} 
//               onChange={(e) => setUpdateForm({ ...updateForm, username: e.target.value })} 
//               placeholder="Username" 
//               required 
//             />
//             <input 
//               type="password" 
//               value={updateForm.password} 
//               onChange={(e) => setUpdateForm({ ...updateForm, password: e.target.value })} 
//               placeholder="Password (leave empty if not changing)" 
//             />
//             <input 
//               type="text" 
//               value={updateForm.email} 
//               onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })} 
//               placeholder="Email" 
//             />
//             <input 
//               type="text" 
//               value={updateForm.name} 
//               onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })} 
//               placeholder="Name" 
//             />
//             <input 
//               type="text" 
//               value={updateForm.contact} 
//               onChange={(e) => setUpdateForm({ ...updateForm, contact: e.target.value })} 
//               placeholder="Contact" 
//             />
//             <input 
//               type="number" 
//               value={updateForm.age} 
//               onChange={(e) => setUpdateForm({ ...updateForm, age: e.target.value })} 
//               placeholder="Age" 
//               required 
//             />
//             <input 
//               type="text" 
//               value={updateForm.airlineId} 
//               onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })} 
//               placeholder="Airline ID" 
//               required 
//             />
//             <button type="submit" className="update-button">Submit Update</button>
//             <button type="button" onClick={() => setSelectedOwner(null)}>Cancel</button>
//           </form>
//         )}

//         {flightOwners.length > 0 ? (
//           <table className="flight-owner-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Username</th>
//                 <th>Contact</th>
//                 <th>Age</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flightOwners.map((owner, index) => (
//                 <tr key={index}>
//                   <td>{owner.name}</td>
//                   <td>{owner.username}</td>
//                   <td>{owner.contact}</td>
//                   <td>{owner.age}</td>
//                   <td>
//                     <button onClick={() => handleUpdateClick(owner)} className="update-button">
//                       Update
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flight owners found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default UpdateFlightOwner;

// import React, { useEffect, useState } from 'react';
// import '../ListAirports/ListAirports.css'; // Importing CSS for styling
// import AdminNavbar from '../AdminNavbar/AdminNavbar';

// const UpdateFlightOwner = () => {
//   const [flightOwners, setFlightOwners] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedOwner, setSelectedOwner] = useState(null);
//   const [updateForm, setUpdateForm] = useState({ username: '', password: '', email: '', name: '', contact: '', age: '', airlineId: '' });

//   // Fetch all flight owners when the component mounts
//   useEffect(() => {
//     const fetchFlightOwners = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight owners');
//         }

//         const data = await response.json();
//         setFlightOwners(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightOwners();
//   }, []);

//   // Handle the Update button click
//   const handleUpdateClick = (owner) => {
//     setSelectedOwner(owner);
//     setUpdateForm({
//       username: owner.username,
//       password: '',
//       email: owner.email,
//       name: owner.name,
//       contact: owner.contact,
//       age: owner.age,
//       airlineId: owner.airlineId,
//     });
//   };

//   // Handle the update form submission
//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${updateForm.username}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//         body: JSON.stringify(updateForm),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update flight owner: ${updateForm.username}`);
//       }

//       // Refetch the flight owners list after successful update
//       setFlightOwners((prevOwners) => 
//         prevOwners.map((owner) => 
//           owner.username === updateForm.username ? { ...owner, ...updateForm } : owner
//         )
//       );

//       // Reset form and selected owner
//       setSelectedOwner(null);
//       setUpdateForm({ username: '', password: '', email: '', name: '', contact: '', age: '', airlineId: '' });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight owners...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="airport-list-container"> {/* Main container */}
//         <h1>Update Flight Owners</h1>

//         {/* Update Form */}
//         {selectedOwner && (
//           <form onSubmit={handleUpdateSubmit} className="update-airport-form"> {/* Match class name */}
//             <h2>Update Flight Owner</h2>
//             <input 
//               type="text" 
//               value={updateForm.username} 
//               onChange={(e) => setUpdateForm({ ...updateForm, username: e.target.value })} 
//               placeholder="Username" 
//               required 
//               className="form-input" // Match class name for input
//             />
//             <input 
//               type="password" 
//               value={updateForm.password} 
//               onChange={(e) => setUpdateForm({ ...updateForm, password: e.target.value })} 
//               placeholder="Password (leave empty if not changing)" 
//               className="form-input" // Match class name for input
//             />
//             <input 
//               type="text" 
//               value={updateForm.email} 
//               onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })} 
//               placeholder="Email" 
//               className="form-input" // Match class name for input
//             />
//             <input 
//               type="text" 
//               value={updateForm.name} 
//               onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })} 
//               placeholder="Name" 
//               className="form-input" // Match class name for input
//             />
//             <input 
//               type="text" 
//               value={updateForm.contact} 
//               onChange={(e) => setUpdateForm({ ...updateForm, contact: e.target.value })} 
//               placeholder="Contact" 
//               className="form-input" // Match class name for input
//             />
//             <input 
//               type="number" 
//               value={updateForm.age} 
//               onChange={(e) => setUpdateForm({ ...updateForm, age: e.target.value })} 
//               placeholder="Age" 
//               required 
//               className="form-input" // Match class name for input
//             />
//             <input 
//               type="text" 
//               value={updateForm.airlineId} 
//               onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })} 
//               placeholder="Airline ID" 
//               required 
//               className="form-input" // Match class name for input
//             />
//             <button type="submit" className="update-button">Submit Update</button> {/* Match class name for button */}
//             <button type="button" onClick={() => setSelectedOwner(null)} className="cancel-button">Cancel</button> {/* Match class name for button */}
//           </form>
//         )}

//         {flightOwners.length > 0 ? (
//           <table className="airport-table"> {/* Match class name for table */}
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Username</th>
//                 <th>Contact</th>
//                 <th>Age</th>
//                 <th>Airline ID</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flightOwners.map((owner, index) => (
//                 <tr key={index}>
//                   <td>{owner.name}</td>
//                   <td>{owner.username}</td>
//                   <td>{owner.contact}</td>
//                   <td>{owner.age}</td>
//                   <td>{owner.airlineId}</td> {/* Display Airline ID */}
//                   <td>
//                     <button onClick={() => handleUpdateClick(owner)} className="update-button"> {/* Match class name for button */}
//                       Update
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flight owners found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default UpdateFlightOwner;


// import React, { useEffect, useState } from 'react';
// import '../ListAirports/ListAirports.css'; // Ensure this file has all required CSS
// import AdminNavbar from '../AdminNavbar/AdminNavbar';

// const UpdateFlightOwner = () => {
//   const [flightOwners, setFlightOwners] = useState([]);
//   const [selectedOwner, setSelectedOwner] = useState(null);
//   const [updateForm, setUpdateForm] = useState({
//     username: '',
//     email: '',
//     name: '',
//     contact: '',
//     age: '',
//     airlineId: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchFlightOwners = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight owners');
//         }

//         const data = await response.json();
//         setFlightOwners(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightOwners();
//   }, []);

//   const handleUpdateClick = (owner) => {
//     setSelectedOwner(owner);
//     setUpdateForm({
//       username: owner.username,
//       email: owner.email,
//       name: owner.name,
//       contact: owner.contact,
//       age: owner.age,
//       airlineId: owner.airline.airlineId, // Ensure this is included
//     });
//   };

//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${updateForm.username}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//         body: JSON.stringify(updateForm),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update flight owner: ${updateForm.username}`);
//       }

//       // Update the local state after successful update
//       setFlightOwners((prevOwners) =>
//         prevOwners.map((owner) => (owner.username === updateForm.username ? { ...owner, ...updateForm } : owner))
//       );

//       // Reset form and selected owner
//       setSelectedOwner(null);
//       setUpdateForm({
//         username: '',
//         email: '',
//         name: '',
//         contact: '',
//         age: '',
//         airlineId: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight owners...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="airport-list-container">
//         <h1>Update Flight Owners</h1>

//         {selectedOwner && (
//           <form onSubmit={handleUpdateSubmit} className="airport-update-form"> {/* Match this class */}
//             <h2>Update Flight Owner</h2>
//             <input
//               type="text"
//               value={updateForm.username}
//               onChange={(e) => setUpdateForm({ ...updateForm, username: e.target.value })}
//               placeholder="Username"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <input
//               type="email"
//               value={updateForm.email}
//               onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })}
//               placeholder="Email"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <input
//               type="text"
//               value={updateForm.name}
//               onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })}
//               placeholder="Name"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <input
//               type="text"
//               value={updateForm.contact}
//               onChange={(e) => setUpdateForm({ ...updateForm, contact: e.target.value })}
//               placeholder="Contact"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <input
//               type="number"
//               value={updateForm.age}
//               onChange={(e) => setUpdateForm({ ...updateForm, age: e.target.value })}
//               placeholder="Age"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <input
//               type="text"
//               value={updateForm.airlineId}
//               onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })}
//               placeholder="Airline ID"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <button type="submit" className="airport-update-button">Submit Update</button> {/* Match button class name */}
//             <button type="button" onClick={() => setSelectedOwner(null)} className="airport-cancel-button">Cancel</button> {/* Match button class name */}
//           </form>
//         )}

//         <table className="airport-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Contact</th>
//               <th>Age</th>
//               <th>Airline ID</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {flightOwners.map((owner) => (
//               <tr key={owner.username}>
//                 <td>{owner.name}</td>
//                 <td>{owner.username}</td>
//                 <td>{owner.contact}</td>
//                 <td>{owner.age}</td>
//                 <td>{owner.airline.airlineId}</td> {/* Ensure this is correctly referencing airlineId */}
//                 <td>
//                   <button onClick={() => handleUpdateClick(owner)} className="airport-update-button"> {/* Match button class name */}
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default UpdateFlightOwner;


// import React, { useEffect, useState } from 'react';
// import '../ListAirports/ListAirports.css'; // Ensure this file has all required CSS
// import AdminNavbar from '../AdminNavbar/AdminNavbar';

// const UpdateFlightOwner = () => {
//   const [flightOwners, setFlightOwners] = useState([]);
//   const [selectedOwner, setSelectedOwner] = useState(null);
//   const [updateForm, setUpdateForm] = useState({
//     age: '',
//     airlineId: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchFlightOwners = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight owners');
//         }

//         const data = await response.json();
//         setFlightOwners(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightOwners();
//   }, []);

//   const handleUpdateClick = (owner) => {
//     setSelectedOwner(owner);
//     setUpdateForm({
//       age: owner.age,
//       airlineId: owner.airline.airlineId, // Prepopulate with current airline ID
//     });
//   };

//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${selectedOwner.username}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//         body: JSON.stringify({
//           age: updateForm.age,
//           airlineId: updateForm.airlineId,
//           name: selectedOwner.name, // Pass name
//           email: selectedOwner.email, // Pass email
//           contact: selectedOwner.contact, // Pass contact
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update flight owner: ${selectedOwner.username}`);
//       }

//       // Update the local state after successful update
//       setFlightOwners((prevOwners) =>
//         prevOwners.map((owner) => (owner.username === selectedOwner.username ? { ...owner, age: updateForm.age, airlineId: updateForm.airlineId } : owner))
//       );

//       // Reset form and selected owner
//       setSelectedOwner(null);
//       setUpdateForm({
//         age: '',
//         airlineId: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight owners...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="airport-list-container">
//         <h1>Update Flight Owners</h1>

//         {selectedOwner && (
//           <form onSubmit={handleUpdateSubmit} className="airport-update-form"> {/* Match this class */}
//             <h2>Update Flight Owner</h2>
//             <p>Name: {selectedOwner.name}</p> {/* Display the name */}
//             <p>Username: {selectedOwner.username}</p> {/* Display the username */}
//             <p>Contact: {selectedOwner.contact}</p> {/* Display the contact */}
//             <p>Email: {selectedOwner.email}</p> {/* Display the email */}
            
//             <input
//               type="number"
//               value={updateForm.age}
//               onChange={(e) => setUpdateForm({ ...updateForm, age: e.target.value })}
//               placeholder="Age"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <input
//               type="text"
//               value={updateForm.airlineId}
//               onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })}
//               placeholder="Airline ID"
//               className="airport-input" // Match input field class name
//               required
//             />
//             <button type="submit" className="airport-update-button">Submit Update</button> {/* Match button class name */}
//             <button type="button" onClick={() => setSelectedOwner(null)} className="airport-cancel-button">Cancel</button> {/* Match button class name */}
//           </form>
//         )}

//         <table className="airport-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Contact</th>
//               <th>Age</th>
//               <th>Airline ID</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {flightOwners.map((owner) => (
//               <tr key={owner.username}>
//                 <td>{owner.name}</td>
//                 <td>{owner.username}</td>
//                 <td>{owner.contact}</td>
//                 <td>{owner.age}</td>
//                 <td>{owner.airline.airlineId}</td> {/* Ensure this is correctly referencing airlineId */}
//                 <td>
//                   <button onClick={() => handleUpdateClick(owner)} className="airport-update-button"> {/* Match button class name */}
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default UpdateFlightOwner;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AirportsRelated/ListAirports.css'; // Ensure this file has all required CSS
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const UpdateFlightOwner = () => {
  const [flightOwners, setFlightOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    age: '',
    airlineId: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFlightOwners = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/simply-fly/admin/list-all-flightowners', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });

        setFlightOwners(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlightOwners();
  }, []);

  const handleUpdateClick = (owner) => {
    setSelectedOwner(owner);
    setUpdateForm({
      age: owner.age,
      airlineId: owner.airline.airlineId, // Prepopulate with current airline ID
    });
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${selectedOwner.username}`, {
        age: updateForm.age,
        airlineId: updateForm.airlineId,
        name: selectedOwner.name, // Pass name
        email: selectedOwner.email, // Pass email
        contact: selectedOwner.contact, // Pass contact
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      // Update the local state after successful update
      setFlightOwners((prevOwners) =>
        prevOwners.map((owner) =>
          owner.username === selectedOwner.username
            ? { ...owner, age: updateForm.age, airlineId: updateForm.airlineId }
            : owner
        )
      );

      // Reset form and selected owner
      setSelectedOwner(null);
      setUpdateForm({
        age: '',
        airlineId: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  if (loading) {
    return <p>Loading flight owners...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>Update Flight Owners</h1>

        {selectedOwner && (
          <form onSubmit={handleUpdateSubmit} className="airport-update-form"> {/* Match this class */}
            <h2>Update Flight Owner</h2>
            <p>Name: {selectedOwner.name}</p> {/* Display the name */}
            <p>Username: {selectedOwner.username}</p> {/* Display the username */}
            <p>Contact: {selectedOwner.contact}</p> {/* Display the contact */}
            <p>Email: {selectedOwner.email}</p> {/* Display the email */}
            
            <input
              type="number"
              value={updateForm.age}
              onChange={(e) => setUpdateForm({ ...updateForm, age: e.target.value })}
              placeholder="Age"
              className="airport-input" // Match input field class name
              required
            />
            <input
              type="text"
              value={updateForm.airlineId}
              onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })}
              placeholder="Airline ID"
              className="airport-input" // Match input field class name
              required
            />
            <button type="submit" className="airport-update-button">Submit Update</button> {/* Match button class name */}
            <button type="button" onClick={() => setSelectedOwner(null)} className="airport-cancel-button">Cancel</button> {/* Match button class name */}
          </form>
        )}

        <table className="airport-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Airline ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flightOwners.map((owner) => (
              <tr key={owner.username}>
                <td>{owner.name}</td>
                <td>{owner.username}</td>
                <td>{owner.contact}</td>
                <td>{owner.age}</td>
                <td>{owner.airline.airlineId}</td> {/* Ensure this is correctly referencing airlineId */}
                <td>
                  <button onClick={() => handleUpdateClick(owner)} className="airport-update-button"> {/* Match button class name */}
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpdateFlightOwner;
