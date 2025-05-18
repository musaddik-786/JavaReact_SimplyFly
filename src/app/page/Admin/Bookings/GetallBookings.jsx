import React, { useEffect, useState } from 'react';
import '../AirportsRelated/ListAirports.css';  // Reusing the same CSS
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import axios from 'axios'; // Using axios

const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage

        // API call to fetch all bookings
        const response = await axios.get('http://localhost:8080/simply-fly/admin/getallbookings', {
          headers: {
            'Authorization': token, // Set token in the request headers
          },
        });

        setBookings(response.data); // Set the fetched bookings data
      } catch (err) {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>List of Bookings</h1>
        {bookings.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Customer Username</th>
                <th>Flight Trip ID</th>
                <th>Passengers</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.amount}</td>
                  <td>{new Date(booking.bookingDateTime).toLocaleString()}</td>
                  <td>{booking.status}</td>
                  <td>{booking.customerUsername}</td>
                  <td>{booking.flightTripId}</td>
                  <td>
                    <ul>
                      {booking.passengers.map((passenger, pIndex) => (
                        <li key={pIndex}>
                          {passenger.name} ({passenger.age}, {passenger.gender}), Seat: {passenger.seat}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </>
  );
};

export default ListBookings;
