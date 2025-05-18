import React, { useEffect, useState } from 'react';
import '../AirportsRelated/ListAirports.css';  // Reusing the same CSS file
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import axios from 'axios';

const GetAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage

        // API call to fetch all customers
        const response = await axios.get('http://localhost:8080/simply-fly/customers/list-all-customers', {
          headers: {
            'Authorization': token,  // Include the token in the request headers
          },
        });

        setCustomers(response.data); // Set the fetched customer data
      } catch (err) {
        setError('Failed to fetch customers');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <>
      <AdminNavbar />
      <div className="airport-list-container">
        <h1>List of Customers</h1>
        {customers.length > 0 ? (
          <table className="airport-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.username}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.contact}</td>
                  <td>{customer.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No customers found.</p>
        )}
      </div>
    </>
  );
};

export default GetAllCustomers;
