
// import React from 'react';
// import './SignIn.css'; 
// import Navbar from '../Header/NormalHeader';

// const SignIn = () => {
    
    
    
    
    
//     return (
//         <>
//         <Navbar/>
//         <div className="sign-in-container">
//             <h1>Log In</h1>
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

// export default SignIn;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Assuming you're using React Router for navigation

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             // Send login request to backend
//             const response = await axios.post('/simply-fly/home/login', {
//                 username: email,
//                 password: password,
//             });

//             if (response.status === 200) {
//                 const { token, role } = response.data; // Extract token and role from the response

//                 // Store JWT token in localStorage
//                 localStorage.setItem('token', token);
                
//                 // Redirect based on role
//                 if (role === 'ROLE_ADMIN') {
//                     navigate('/admin');  // Redirect to admin dashboard
//                 } else if (role === 'Customer') {
//                     navigate('/');  // Redirect to customer dashboard
//                 } 
//                 // else if (role === 'ROLE_FLIGHT_OWNER') {
//                 //     navigate('/flightowner-dashboard');  // Redirect to flight owner dashboard
//                 // }
//             }
//         } catch (error) {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <>
//             <div className="sign-in-container">
//                 <h1>Log In</h1>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <form onSubmit={handleLogin}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             // type="email"
//                             type="text"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Sign In</button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default SignIn;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NormalHeader from '../Header/NormalHeader';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    // const handleLogin = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         const response = await axios.post('http://localhost:8080/simply-fly/home/login', {
    //             username,
    //             password,
    //         });
    
    //         if (response.status === 200) {
    //             const { token, role } = response.data;
    
    //             localStorage.setItem('token', token);
    //             localStorage.setItem('role', role);
    //             localStorage.setItem('username',username);
    
    //             if (role === '[Admin]') {
    //                 navigate('/admin');
    //             } else if (role === '[Customer]') {
    //                 navigate('/');
    //             }
    //         }
    //     } catch (error) {
    //         setError('Invalid username or password');
    //     }
    // };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/simply-fly/home/login', {
                username,
                password,
            });
    
            if (response.status === 200) {
                const { token, role } = response.data;
    
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                localStorage.setItem('username', username);
    
                // Check for the referrer route
                const redirectAfterLogin = localStorage.getItem('redirectAfterLogin');
    
                // if (role === '[Admin]') {
                //     navigate('/admin');
                // } else if (role === '[Customer]') {
                //     // Redirect to the saved route or to the homepage
                //     if (redirectAfterLogin) {
                //         localStorage.removeItem('redirectAfterLogin'); // Clear the referrer
                //         navigate(redirectAfterLogin); // Redirect to FlightResults
                //     }  else if (role === '[FlightOwner]') {
                //         navigate('/flight-owner');
                //     }
                //     else {
                //         navigate('/'); // Default redirect to homepage
                //     }
                // }

                if (role === '[Admin]') {
                    navigate('/admin');
                } else if (role === '[FlightOwner]') {
                    navigate('/flight-owner');
                } else if (role === '[Customer]') {
                    if (redirectAfterLogin) {
                        localStorage.removeItem('redirectAfterLogin');
                        navigate(redirectAfterLogin); // Redirect to FlightResults
                    } else {
                        navigate('/'); // Default to homepage for Customer
                    }
                }
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };
    
    

    return (
        <>
        <NormalHeader/>
            <div className="sign-in-container">
                <h1>Log In</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </>
    );
};

export default SignIn;
