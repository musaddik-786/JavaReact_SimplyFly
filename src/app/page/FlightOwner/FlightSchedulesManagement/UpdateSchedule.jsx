import React, { useEffect, useState } from 'react';
import './UpdateSchedule.css'; // Assuming you have CSS for styling
import AdminNavbar from '../Navbar/FlightOwnerNavbar';
import { Modal, Button, Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios'; // Import Axios

const UpdateSchedule = () => {
  const [allFlightTrips, setAllFlightTrips] = useState([]); // To hold all flight trips
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedFlightTrip, setSelectedFlightTrip] = useState(null); // State to hold the selected flight trip for updating
  const [updateForm, setUpdateForm] = useState({
    departure: '',
    arrival: '',
    ticketPrice: null,
    status: '',
  }); // State for update form
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/close

  // Options for flight trip status
  const statusOptions = [
    { key: 'running', text: 'Running', value: 'Running' },
    { key: 'cancelled', text: 'Cancelled', value: 'Cancelled' },
  ];

  // Fetch all flight trips when the component mounts
  useEffect(() => {
    const fetchFlightTrips = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you are using token for auth
        const response = await axios.get('http://localhost:8080/simply-fly/flightTrips/getallflighttrips', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include token if required
          },
        });

        setAllFlightTrips(response.data);
      } catch (err) {
        // Improved error handling
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else {
          setError('An unexpected error occurred while fetching flight trips.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFlightTrips();
  }, []);

  // Handle the Update button click
  const handleUpdateClick = (flightTrip) => {
    setSelectedFlightTrip(flightTrip);
    setUpdateForm({
      departure: flightTrip.departure,
      arrival: flightTrip.arrival,
      ticketPrice: flightTrip.ticketPrice,
      status: flightTrip.status,
    });
    setModalOpen(true); // Open the modal when updating
  };

  // Handle the update form submission
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const username = localStorage.getItem('username'); // Assuming you have the username stored
      const token = localStorage.getItem('token'); // Include token if required
      const response = await axios.put(
        `http://localhost:8080/simply-fly/flightTrips/rescheduleflighttrip/${selectedFlightTrip.flightTripId}/${username}`,
        updateForm,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include token if required
          },
        }
      );

      // Check response status if needed
      if (response.status !== 200) {
        throw new Error(`Failed to update flight trip: ${selectedFlightTrip.flightTripId}`);
      }

      // Refetch the flight trip list after successful update
      setAllFlightTrips((prevFlightTrips) =>
        prevFlightTrips.map((trip) =>
          trip.flightTripId === selectedFlightTrip.flightTripId ? { ...trip, ...updateForm } : trip
        )
      );

      // Reset form and selected flight trip
      setSelectedFlightTrip(null);
      setUpdateForm({
        departure: '',
        arrival: '',
        ticketPrice: null,
        status: '',
      });
      setModalOpen(false); // Close the modal after update
    } catch (err) {
      // Improved error handling
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else {
        setError('An unexpected error occurred while updating the flight trip.');
      }
    }
  };

  if (loading) {
    return <p>Loading flight trips...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="flight-trip-list-container">
        <h1>Update Flight Schedule</h1>

        {/* Flight Schedule Update Modal */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.Header>Update Flight Schedule</Modal.Header>
          <Modal.Content>
            <Form onSubmit={handleUpdateSubmit}>
              <Form.Input
                label='Departure Time'
                type='datetime-local'
                value={updateForm.departure}
                onChange={(e) => setUpdateForm({ ...updateForm, departure: e.target.value })}
                required
              />
              <Form.Input
                label='Arrival Time'
                type='datetime-local'
                value={updateForm.arrival}
                onChange={(e) => setUpdateForm({ ...updateForm, arrival: e.target.value })}
                required
              />
              <Form.Input
                label='Ticket Price'
                type='number'
                value={updateForm.ticketPrice || ''}
                onChange={(e) => setUpdateForm({ ...updateForm, ticketPrice: e.target.value })}
                required
              />
              <Form.Field>
                <label>Status</label>
                <Dropdown
                  placeholder='Select Status'
                  fluid
                  selection
                  options={statusOptions}
                  value={updateForm.status}
                  onChange={(e, { value }) => setUpdateForm({ ...updateForm, status: value })}
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

        {allFlightTrips.length > 0 ? (
          <table className="flight-trip-table">
            <thead>
              <tr>
                <th>Flight Trip ID</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Ticket Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allFlightTrips.map((trip, index) => (
                <tr key={index}>
                  <td>{trip.flightTripId}</td>
                  <td>{new Date(trip.departure).toLocaleString()}</td>
                  <td>{new Date(trip.arrival).toLocaleString()}</td>
                  <td>{trip.ticketPrice}</td>
                  <td>{trip.status}</td>
                  <td>
                    <Button onClick={() => handleUpdateClick(trip)} color="green">
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No flight trips found.</p>
        )}
      </div>
    </>
  );
};

export default UpdateSchedule;















// import React, { useEffect, useState } from 'react';
// import './UpdateSchedule.css'; // Assuming you have CSS for styling
// import AdminNavbar from '../Navbar/FlightOwnerNavbar';
// import { Modal, Button, Form, Dropdown } from 'semantic-ui-react';

// const UpdateSchedule = () => {
//   const [allFlightTrips, setAllFlightTrips] = useState([]); // To hold all flight trips
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedFlightTrip, setSelectedFlightTrip] = useState(null); // State to hold the selected flight trip for updating
//   const [updateForm, setUpdateForm] = useState({
//     departure: '',
//     arrival: '',
//     ticketPrice: null,
//     status: '',
//   }); // State for update form
//   const [modalOpen, setModalOpen] = useState(false); // State for modal open/close

//   // Options for flight trip status
//   const statusOptions = [
//     { key: 'running', text: 'Running', value: 'Running' },
//     { key: 'cancelled', text: 'Cancelled', value: 'Cancelled' },
//   ];

//   // Fetch all flight trips when the component mounts
//   useEffect(() => {
//     const fetchFlightTrips = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming you are using token for auth
//         const response = await fetch('http://localhost:8080/simply-fly/flightTrips/getallflighttrips', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token, // Include token if required
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch flight trips');
//         }

//         const data = await response.json();
//         setAllFlightTrips(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlightTrips();
//   }, []);

//   // Handle the Update button click
//   const handleUpdateClick = (flightTrip) => {
//     setSelectedFlightTrip(flightTrip);
//     setUpdateForm({
//       departure: flightTrip.departure,
//       arrival: flightTrip.arrival,
//       ticketPrice: flightTrip.ticketPrice,
//       status: flightTrip.status,
//     });
//     setModalOpen(true); // Open the modal when updating
//   };

//   // Handle the update form submission
//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const username = localStorage.getItem('username'); // Assuming you have the username stored
//       const token = localStorage.getItem('token'); // Include token if required
//       const response = await fetch(
//         `http://localhost:8080/simply-fly/flightTrips/rescheduleflighttrip/${selectedFlightTrip.flightTripId}/${username}`,
//         {
//           method: 'PUT', // Use PUT method for updating
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': token, // Include token if required
//           },
//           body: JSON.stringify(updateForm), // Send updated flight trip data
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Failed to update flight trip: ${selectedFlightTrip.flightTripId}`);
//       }

//       // Refetch the flight trip list after successful update
//       setAllFlightTrips((prevFlightTrips) =>
//         prevFlightTrips.map((trip) =>
//           trip.flightTripId === selectedFlightTrip.flightTripId ? { ...trip, ...updateForm } : trip
//         )
//       );

//       // Reset form and selected flight trip
//       setSelectedFlightTrip(null);
//       setUpdateForm({
//         departure: '',
//         arrival: '',
//         ticketPrice: null,
//         status: '',
//       });
//       setModalOpen(false); // Close the modal after update
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <p>Loading flight trips...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <div className="flight-trip-list-container">
//         <h1>Update Flight Schedule</h1>

//         {/* Flight Schedule Update Modal */}
//         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
//           <Modal.Header>Update Flight Schedule</Modal.Header>
//           <Modal.Content>
//             <Form onSubmit={handleUpdateSubmit}>
//               <Form.Input
//                 label='Departure Time'
//                 type='datetime-local'
//                 value={updateForm.departure}
//                 onChange={(e) => setUpdateForm({ ...updateForm, departure: e.target.value })}
//                 required
//               />
//               <Form.Input
//                 label='Arrival Time'
//                 type='datetime-local'
//                 value={updateForm.arrival}
//                 onChange={(e) => setUpdateForm({ ...updateForm, arrival: e.target.value })}
//                 required
//               />
//               <Form.Input
//                 label='Ticket Price'
//                 type='number'
//                 value={updateForm.ticketPrice || ''}
//                 onChange={(e) => setUpdateForm({ ...updateForm, ticketPrice: e.target.value })}
//                 required
//               />
//               <Form.Field>
//                 <label>Status</label>
//                 <Dropdown
//                   placeholder='Select Status'
//                   fluid
//                   selection
//                   options={statusOptions}
//                   value={updateForm.status}
//                   onChange={(e, { value }) => setUpdateForm({ ...updateForm, status: value })}
//                   required
//                 />
//               </Form.Field>
//               <Button type="submit" color="green">
//                 Submit Update
//               </Button>
//               <Button onClick={() => setModalOpen(false)}>Cancel</Button>
//             </Form>
//           </Modal.Content>
//         </Modal>

//         {allFlightTrips.length > 0 ? (
//           <table className="flight-trip-table">
//             <thead>
//               <tr>
//                 <th>Flight Trip ID</th>
//                 <th>Departure</th>
//                 <th>Arrival</th>
//                 <th>Ticket Price</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allFlightTrips.map((trip, index) => (
//                 <tr key={index}>
//                   <td>{trip.flightTripId}</td>
//                   <td>{new Date(trip.departure).toLocaleString()}</td>
//                   <td>{new Date(trip.arrival).toLocaleString()}</td>
//                   <td>{trip.ticketPrice}</td>
//                   <td>{trip.status}</td>
//                   <td>
//                     <Button onClick={() => handleUpdateClick(trip)} color="green">
//                       Update
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No flight trips found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default UpdateSchedule;
