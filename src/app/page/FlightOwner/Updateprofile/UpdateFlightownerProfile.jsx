// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'semantic-ui-react';
// import axios from 'axios';

// const UpdateFlightOwnerProfile = () => {
//   const username = localStorage.getItem('username'); // Fetching username from localStorage
//   const [profile, setProfile] = useState({
//     username: username,  // Keeping username from localStorage, as it is not modifiable
//     password: null,
//     email: '',
//     name: '',
//     contact: '',
//     age: '',
//     airlineId: ''
//   });
//   const [updatedProfile, setUpdatedProfile] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   // Fetch the current profile of the flight owner using the username
//   useEffect(() => {
//     axios.get(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${username}`)
//       .then(response => {
//         const { username, email, name, contact, age, airline } = response.data;
//         setProfile({
//           username,
//           password: null, // Flight owner doesn't need to update this unless they explicitly do
//           email: email || '',
//           name: name || '',
//           contact: contact || '',
//           age: age || '',
//           airlineId: airline?.airlineId || ''
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching flight owner profile', error);
//       });
//   }, [username]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value || null });
//   };

//   // Handle form submission, making sure we send the current updated data
//   const handleSubmit = () => {
//     axios.put(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${username}`, profile)
//       .then(response => {
//         setUpdatedProfile(response.data); // Capture updated profile in response
//         setModalOpen(true); // Open modal to display updated profile
//       })
//       .catch(error => {
//         console.error('Error updating flight owner profile', error);
//       });
//   };

//   return (
//     <div className="update-profile-container">
//       <h2>Update Profile</h2>
//       <Form>
//         <Form.Input
//           label="Email"
//           name="email"
//           placeholder="Enter email"
//           value={profile.email || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Name"
//           name="name"
//           placeholder="Enter name"
//           value={profile.name || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Contact"
//           name="contact"
//           placeholder="Enter contact"
//           value={profile.contact || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Age"
//           name="age"
//           placeholder="Enter age"
//           type="number"
//           value={profile.age || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Airline ID"
//           name="airlineId"
//           placeholder="Enter airline ID"
//           value={profile.airlineId || ''}
//           onChange={handleChange}
//         />
//         <Button onClick={handleSubmit}>Update Profile</Button>
//       </Form>

//       {updatedProfile && (
//         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
//           <Modal.Header>Updated Profile Details</Modal.Header>
//           <Modal.Content>
//             <p>Profile updated successfully!</p>
//             <pre>{JSON.stringify(updatedProfile, null, 2)}</pre>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button onClick={() => setModalOpen(false)}>Okay</Button>
//           </Modal.Actions>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default UpdateFlightOwnerProfile;


// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'semantic-ui-react';
// import axios from 'axios';
// import './UpdateFlightOwnerProfile.css';

// const UpdateFlightOwnerProfile = () => {
//   const username = localStorage.getItem('username'); // Fetching username from localStorage
//   const [profile, setProfile] = useState({
//     username: username,  // Keeping username from localStorage, as it is not modifiable
//     password: '', // Initialize password field for updates
//     email: '',
//     name: '',
//     contact: '',
//     age: '',
//     airlineId: ''
//   });
//   const [updatedProfile, setUpdatedProfile] = useState(null);
//   const [modalOpen, setModalOpen] = useState(true); // Make sure the modal is open initially

//   // Fetch the current profile of the flight owner using the username
//   useEffect(() => {
//     axios.get(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${username}`)
//       .then(response => {
//         console.log(response.data);
//         const { email, name, contact, age, airline } = response.data;
//         setProfile({
//           username,
//           password: '', // Password field for user to enter a new password if desired
//           email: email || '',
//           name: name || '',
//           contact: contact || '',
//           age: age || '',
//           airlineId: airline?.airlineId || ''
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching flight owner profile', error);
//       });
//   }, [username]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value || null });
//   };

//   // Handle form submission, making sure we send the current updated data
//   const handleSubmit = () => {
//     axios.put(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${username}`, profile)
//       .then(response => {
//         setUpdatedProfile(response.data); // Capture updated profile in response
//         setModalOpen(true); // Open modal to display updated profile
//       })
//       .catch(error => {
//         console.error('Error updating flight owner profile', error);
//       });
//   };

//   return (
//     <div className="update-profile-container">
//       <h2>Update Profile</h2>
//       <Form>
//         <Form.Input
//           label="Username"
//           name="username"
//           value={profile.username} // Show the username from the state
//           readOnly // Make the username field read-only
//         />
//         <Form.Input
//           label="Password"
//           name="password"
//           placeholder="Enter new password (leave blank to keep current)"
//           type="password"
//           value={profile.password || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Email"
//           name="email"
//           placeholder="Enter email"
//           value={profile.email || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Name"
//           name="name"
//           placeholder="Enter name"
//           value={profile.name || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Contact"
//           name="contact"
//           placeholder="Enter contact"
//           value={profile.contact || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Age"
//           name="age"
//           placeholder="Enter age"
//           type="number"
//           value={profile.age || ''}
//           onChange={handleChange}
//         />
//         <Form.Input
//           label="Airline ID"
//           name="airlineId"
//           placeholder="Enter airline ID"
//           value={profile.airlineId || ''}
//           onChange={handleChange}
//         />
//         <Button type="button" onClick={handleSubmit}>Update Profile</Button>
//       </Form>

//       {updatedProfile && (
//         <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
//           <Modal.Header>Updated Profile Details</Modal.Header>
//           <Modal.Content>
//             <p>Profile updated successfully!</p>
//             <pre>{JSON.stringify(updatedProfile, null, 2)}</pre>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button onClick={() => setModalOpen(false)}>Okay</Button>
//           </Modal.Actions>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default UpdateFlightOwnerProfile;






import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import './UpdateFlightOwnerProfile.css';

const UpdateFlightOwnerProfile = () => {
  const username = localStorage.getItem('username'); // Fetching username from localStorage
  const [profile, setProfile] = useState({
    username: username,  // Keeping username from LocalStorage, as it is not modifiable
    password: '', // Initialize password field for updates
    email: '',
    name: '',
    contact: '',
    age: '',
    airlineId: ''
  });
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const [modalOpen, setModalOpen] = useState(true); // Make sure the modal is open initially

  // Fetch the current profile of the flight owner using the username
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token for authentication 
    axios.get(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${username}`, {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': token // Include the token in the request
      }
    })
      .then(response => {
        console.log(response.data);
        const { email, name, contact, age, airline } = response.data;
        setProfile({
          username,
          password: '', // Password field for user to enter a new password if desired
          email: email || '',
          name: name || '',
          contact: contact || '',
          age: age || '',
          airlineId: airline?.airlineId || ''
        });
      })
      .catch(error => {
        console.error('Error fetching flight owner profile', error.response ? error.response.data : error.message);
      });
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Set the profile field to null if the value is an empty string, otherwise set it to the value
    if (name !== 'username') { // Exclude username from this logic
      setProfile({ ...profile, [name]: value === '' ? null : value });
    }
  };

  // Handle form submission, making sure we send the current updated data
  const handleSubmit = () => {
    const token = localStorage.getItem('token'); // Retrieve the token for authentication
    
    // Convert empty string fields to null
    const updatedProfile = {
      ...profile,
      password: profile.password === '' ? null : profile.password,
      email: profile.email === '' ? null : profile.email,
      name: profile.name === '' ? null : profile.name,
      contact: profile.contact === '' ? null : profile.contact,
      age: profile.age === '' ? null : profile.age,
      airlineId: profile.airlineId === '' ? null : profile.airlineId
  };
    
    
    
  console.log("Payload before API call:", JSON.stringify(updatedProfile, null, 2));
    
    axios.put(`http://localhost:8080/simply-fly/admin/update-flightownerprofile/${username}`, updatedProfile, {
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        'Authorization': token // Include the token in the request
      }
    })
      .then(response => {
        setUpdatedProfile(response.data); // Capture updated profile in response
        setModalOpen(true); // Open modal to display updated profile
      })
      .catch(error => {
        console.error('Error updating flight owner profile', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className="update-profile-container">
      <h2>Update Profile</h2>
      <Form>
        <Form.Input
          label="Username"
          name="username"
          value={profile.username} // Show the username from the state
          readOnly // Make the username field read-only
        />
        <Form.Input
          label="Password"
          name="password"
          placeholder="Enter new password (leave blank to keep current)"
          type="password"
          value={profile.password || ''}
          onChange={handleChange}
        />
        <Form.Input
          label="Email"
          name="email"
          placeholder="Enter new email (leave blank to keep current)"
          value={profile.email || ''}
          onChange={handleChange}
        />
        <Form.Input
          label="Name"
          name="name"
          placeholder="Enter name (leave blank to keep current)"
          value={profile.name || ''}
          onChange={handleChange}
        />
        <Form.Input
          label="Contact"
          name="contact"
          placeholder="Enter contact (leave blank to keep current)"
          value={profile.contact || ''}
          onChange={handleChange}
        />
        <Form.Input
          label="Age"
          name="age"
          placeholder="Enter age (leave blank to keep current)"
          type="number"
          // value={profile.age || ''}
           value={profile.age !== null ? profile.age : ''} // Adjusted to handle null
          onChange={handleChange}
        />
        <Form.Input
          label="Airline ID"
          name="airlineId"
          placeholder="Enter airline ID (leave blank to keep current)"
          value={profile.airlineId || ''}
          onChange={handleChange}
        />
        <Button type="button" onClick={handleSubmit}>Update Profile</Button>
      </Form>

      {updatedProfile && (
  <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
    <Modal.Header>Updated Profile Details</Modal.Header>
    <Modal.Content>
      <p>Profile updated successfully!</p>
      <div className="profile-details">
        <p><strong>Username:</strong> {updatedProfile.username}</p>
        <p><strong>Email:</strong> {updatedProfile.email}</p>
        <p><strong>Name:</strong> {updatedProfile.name}</p>
        <p><strong>Contact:</strong> {updatedProfile.contact}</p>
        <p><strong>Age:</strong> {updatedProfile.age}</p>
        <p><strong>Airline:</strong> {updatedProfile.airline?.airlineName} (ID: {updatedProfile.airline?.airlineId})</p>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setModalOpen(false)}>Okay</Button>
    </Modal.Actions>
  </Modal>
)}

    </div>
  );
};

export default UpdateFlightOwnerProfile;
