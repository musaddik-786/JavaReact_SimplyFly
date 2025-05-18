// import React from 'react';
// import './SignIn.css'; 
// import Navbar from "../Header/NormalHeader"

// const SignIncustomer = () => {
//     return (
//         <>
//         <Navbar/>
//         <div className="sign-in-container">
//             <h1>Sign Up Customer</h1>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" id="password" required />
//                 </div>
//                 <button type="submit">Sign In</button>
//             </form>
//         </div>
//         </>
//     );
// };

// export default SignIncustomer;

import React, { useState } from 'react';
import './SignIn.css'; 
import Navbar from "../Header/NormalHeader"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// const SignInCustomer = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         name: '',
//         email: '',
//         password: '',
//         contact: '',
//         age: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();


//         // Add your API call here to register the customer
//         console.log('Registration Data:', formData);
//     };

const SignInCustomer = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        contact: '',
        age: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/simply-fly/customers/create-account', formData);
            
            if (response.status === 201) { // Assuming 201 is the success status for created account
                // Optionally navigate to login page after successful registration
                navigate('/user/login');
            }
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Registration error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="sign-in-container">
                <h1>Sign Up Customer</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact:</label>
                        <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
};

export default SignInCustomer;
