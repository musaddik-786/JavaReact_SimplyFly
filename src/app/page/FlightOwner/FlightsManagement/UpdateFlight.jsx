import React, { useEffect, useState } from 'react';
import './GetAllFlights.css'; // Assuming you have CSS for styling
import AdminNavbar from '../Navbar/FlightOwnerNavbar';
import { Modal, Button, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios'; // Using axios for API requests

const UpdateFlight = () => {
  const [allFlights, setAllFlights] = useState([]); // To hold all flights
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedFlight, setSelectedFlight] = useState(null); // State to hold the selected flight for updating
  const [updateForm, setUpdateForm] = useState({
    flightCode: '',
    totalSeats: null,
    checkInWeight: null,
    cabinWeight: null,
    airlineId: '',
    lastArrivedAirportId: '',
    lastArrivedTime: '',
    flightStatus: ''
  }); // State for update form
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/close

  // Options for flight status
  const statusOptions = [
    { key: 'active', text: 'Active', value: 'Active' },
    { key: 'inactive', text: 'Inactive', value: 'Inactive' }
  ];

  // Fetch all flights when the component mounts
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you are using token for auth
        const response = await axios.get('http://localhost:8080/simply-fly/flights/all-flights', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token // Include token if required
          }
        });

        setAllFlights(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch flights');
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  // Handle the Update button click
  const handleUpdateClick = (flight) => {
    setSelectedFlight(flight);
    setUpdateForm({
      flightCode: flight.flightCode,
      totalSeats: flight.totalSeats,
      checkInWeight: flight.checkInWeight,
      cabinWeight: flight.cabinWeight,
      airlineId: flight.airlineId,
      lastArrivedAirportId: flight.lastArrivedAirportId,
      lastArrivedTime: flight.lastArrivedTime,
      flightStatus: flight.flightStatus
    });
    setModalOpen(true); // Open the modal when updating
  };

  // Handle the update form submission
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    const username = localStorage.getItem('username'); // Get username from local storage
    try {
      const token = localStorage.getItem('token'); // Include token if required
      await axios.put(
        `http://localhost:8080/simply-fly/flights/update-flight/${username}`,
        updateForm,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          }
        }
      );

      // Refetch the flight list after successful update
      setAllFlights((prevFlights) =>
        prevFlights.map((flight) =>
          flight.flightCode === updateForm.flightCode ? { ...flight, ...updateForm } : flight
        )
      );

      // Reset form and selected flight
      setSelectedFlight(null);
      setUpdateForm({
        flightCode: '',
        totalSeats: null,
        checkInWeight: null,
        cabinWeight: null,
        airlineId: '',
        lastArrivedAirportId: '',
        lastArrivedTime: '',
        flightStatus: ''
      });
      setModalOpen(false); // Close the modal after update
    } catch (err) {
      setError(err.response?.data?.message || `Failed to update flight: ${updateForm.flightCode}`);
    }
  };

  if (loading) {
    return <p>Loading flights...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>Update Flights</h1>

        {/* Flight Update Modal */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.Header>Update Flight</Modal.Header>
          <Modal.Content>
            <Form onSubmit={handleUpdateSubmit}>
              <Form.Input
                label="Flight Code"
                value={updateForm.flightCode}
                onChange={(e) => setUpdateForm({ ...updateForm, flightCode: e.target.value })}
                required
              />
              <Form.Input
                label="Total Seats"
                type="number"
                value={updateForm.totalSeats || ''}
                onChange={(e) => setUpdateForm({ ...updateForm, totalSeats: e.target.value })}
              />
              <Form.Input
                label="Check-in Weight"
                type="number"
                value={updateForm.checkInWeight || ''}
                onChange={(e) => setUpdateForm({ ...updateForm, checkInWeight: e.target.value })}
              />
              <Form.Input
                label="Cabin Weight"
                type="number"
                value={updateForm.cabinWeight || ''}
                onChange={(e) => setUpdateForm({ ...updateForm, cabinWeight: e.target.value })}
              />
              <Form.Input
                label="Airline ID"
                value={updateForm.airlineId}
                onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })}
                required
              />
              <Form.Input
                label="Last Arrived Airport ID"
                value={updateForm.lastArrivedAirportId}
                onChange={(e) => setUpdateForm({ ...updateForm, lastArrivedAirportId: e.target.value })}
                required
              />
              <Form.Input
                label="Last Arrived Time"
                type="datetime-local"
                value={updateForm.lastArrivedTime}
                onChange={(e) => setUpdateForm({ ...updateForm, lastArrivedTime: e.target.value })}
                required
              />
              <Form.Field>
                <label>Flight Status</label>
                <Dropdown
                  placeholder="Select Status"
                  fluid
                  selection
                  options={statusOptions}
                  value={updateForm.flightStatus}
                  onChange={(e, { value }) => setUpdateForm({ ...updateForm, flightStatus: value })}
                  required
                />
              </Form.Field>
              <Button type="submit" color="green">
                Submit Update
              </Button>
              <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            </Form>
          </Modal.Content>
        </Modal>

        {allFlights.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Flight Code</th>
                <th>Total Seats</th>
                <th>Check-in Weight</th>
                <th>Cabin Weight</th>
                <th>Airline ID</th>
                <th>Last Arrived Airport ID</th>
                <th>Last Arrived Time</th>
                <th>Flight Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allFlights.map((flight, index) => (
                <tr key={index}>
                  <td>{flight.flightCode}</td>
                  <td>{flight.totalSeats}</td>
                  <td>{flight.checkInWeight}</td>
                  <td>{flight.cabinWeight}</td>
                  <td>{flight.airlineId}</td>
                  <td>{flight.lastArrivedAirportId ? flight.lastArrivedAirportId : 'Not Available'}</td>
                  <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
                  <td>{flight.flightStatus}</td>
                  <td>
                    <Button onClick={() => handleUpdateClick(flight)} color="green">
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </>
  );
};

export default UpdateFlight;












// import React, { useEffect, useState } from 'react';
// import './GetAllFlights.css'; // Assuming you have CSS for styling
// import AdminNavbar from '../Navbar/FlightOwnerNavbar';
// import { Modal, Button, Form, Dropdown } from 'semantic-ui-react';

// const UpdateFlight = () => {
//   const [allFlights, setAllFlights] = useState([]); // To hold all flights
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedFlight, setSelectedFlight] = useState(null); // State to hold the selected flight for updating
//   const [updateForm, setUpdateForm] = useState({ 
//     flightCode: '', 
//     totalSeats: null, 
//     checkInWeight: null, 
//     cabinWeight: null, 
//     airlineId: '', 
//     lastArrivedAirportId: '', 
//     lastArrivedTime: '', 
//     flightStatus: '' 
//   }); // State for update form
//   const [modalOpen, setModalOpen] = useState(false); // State for modal open/close

//   // Options for flight status
//   const statusOptions = [
//     { key: 'active', text: 'Active', value: 'Active' },
//     { key: 'inactive', text: 'Inactive', value: 'Inactive' },
//   ];

//   // Fetch all flights when the component mounts
//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming you are using token for auth
//         const response = await fetch('http://localhost:8080/simply-fly/flights/all-flights', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token, // Include token if required
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flights');
//         }

//         const data = await response.json();
//         setAllFlights(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   // Handle the Update button click
//   const handleUpdateClick = (flight) => {
//     setSelectedFlight(flight);
//     setUpdateForm({
//       flightCode: flight.flightCode,
//       totalSeats: flight.totalSeats,
//       checkInWeight: flight.checkInWeight,
//       cabinWeight: flight.cabinWeight,
//       airlineId: flight.airlineId,
//       lastArrivedAirportId: flight.lastArrivedAirportId,
//       lastArrivedTime: flight.lastArrivedTime,
//       flightStatus: flight.flightStatus,
//     });
//     setModalOpen(true); // Open the modal when updating
//   };

//   // Handle the update form submission
//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     const username = localStorage.getItem('username'); // Get username from local storage
//     try {
//       const token = localStorage.getItem('token'); // Include token if required
//       const response = await fetch(`http://localhost:8080/simply-fly/flights/update-flight/${username}`, {
//         method: 'PUT', // Use PUT method for updating
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token, // Include token if required
//         },
//         body: JSON.stringify(updateForm), // Send updated flight data
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update flight: ${updateForm.flightCode}`);
//       }

//       // Refetch the flight list after successful update
//       setAllFlights((prevFlights) => 
//         prevFlights.map((flight) => 
//           flight.flightCode === updateForm.flightCode ? { ...flight, ...updateForm } : flight
//         )
//       );

//       // Reset form and selected flight
//       setSelectedFlight(null);
//       setUpdateForm({ 
//         flightCode: '', 
//         totalSeats: null, 
//         checkInWeight: null, 
//         cabinWeight: null, 
//         airlineId: '', 
//         lastArrivedAirportId: '', 
//         lastArrivedTime: '', 
//         flightStatus: '' 
//       });
//       setModalOpen(false); // Close the modal after update
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flights...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="airport-list-container">
//         <h1>Update Flights</h1>

//         {/* Flight Update Modal */}
//         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
//           <Modal.Header>Update Flight</Modal.Header>
//           <Modal.Content>
//             <Form onSubmit={handleUpdateSubmit}>
//               <Form.Input 
//                 label='Flight Code'
//                 value={updateForm.flightCode}
//                 onChange={(e) => setUpdateForm({ ...updateForm, flightCode: e.target.value })}
//                 required
//               />
//               <Form.Input 
//                 label='Total Seats'
//                 type='number'
//                 value={updateForm.totalSeats || ''}
//                 onChange={(e) => setUpdateForm({ ...updateForm, totalSeats: e.target.value })}
//               />
//               <Form.Input 
//                 label='Check-in Weight'
//                 type='number'
//                 value={updateForm.checkInWeight || ''}
//                 onChange={(e) => setUpdateForm({ ...updateForm, checkInWeight: e.target.value })}
//               />
//               <Form.Input 
//                 label='Cabin Weight'
//                 type='number'
//                 value={updateForm.cabinWeight || ''}
//                 onChange={(e) => setUpdateForm({ ...updateForm, cabinWeight: e.target.value })}
//               />
//               <Form.Input 
//                 label='Airline ID'
//                 value={updateForm.airlineId}
//                 onChange={(e) => setUpdateForm({ ...updateForm, airlineId: e.target.value })}
//                 required
//               />
//               <Form.Input 
//                 label='Last Arrived Airport ID'
//                 value={updateForm.lastArrivedAirportId}
//                 onChange={(e) => setUpdateForm({ ...updateForm, lastArrivedAirportId: e.target.value })}
//                 required
//               />
//               <Form.Input 
//                 label='Last Arrived Time'
//                 type='datetime-local'
//                 value={updateForm.lastArrivedTime}
//                 onChange={(e) => setUpdateForm({ ...updateForm, lastArrivedTime: e.target.value })}
//                 required
//               />
//               <Form.Field>
//                 <label>Flight Status</label>
//                 <Dropdown
//                   placeholder='Select Status'
//                   fluid
//                   selection
//                   options={statusOptions}
//                   value={updateForm.flightStatus}
//                   onChange={(e, { value }) => setUpdateForm({ ...updateForm, flightStatus: value })}
//                   required
//                 />
//               </Form.Field>
//               <Button type="submit" color="green">Submit Update</Button>
//               <Button onClick={() => setModalOpen(false)}>Cancel</Button>
//             </Form>
//           </Modal.Content>
//         </Modal>

//         {allFlights.length > 0 ? (
//           <table className="airport-table">
//             <thead>
//               <tr>
//                 <th>Flight Code</th>
//                 <th>Total Seats</th>
//                 <th>Check-in Weight</th>
//                 <th>Cabin Weight</th>
//                 <th>Airline ID</th>
//                 <th>Last Arrived Airport ID</th>
//                 <th>Last Arrived Time</th>
//                 <th>Flight Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allFlights.map((flight, index) => (
//                 <tr key={index}>
//                   <td>{flight.flightCode}</td>
//                   <td>{flight.totalSeats}</td>
//                   <td>{flight.checkInWeight}</td>
//                   <td>{flight.cabinWeight}</td>
//                   <td>{flight.airlineId}</td>
//                   <td>{flight.lastArrivedAirportId ? flight.lastArrivedAirportId : 'Not Available'}</td>
//                   <td>{new Date(flight.lastArrivedTime).toLocaleString()}</td>
//                   <td>{flight.flightStatus}</td>
//                   <td>
//                     <Button onClick={() => handleUpdateClick(flight)} color="green">
//                       Update
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flights found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default UpdateFlight;
