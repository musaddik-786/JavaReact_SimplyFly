// import React, { useState } from 'react';
// import './UserLoginForm.css'; // Import the CSS file

// const UserLoginForm = () => {
//   // State to hold form inputs
//   const [loginRequest, setLoginRequest] = useState({
//     role: '0',
//     emailId: '',
//     password: '',
//   });

//   // Function to handle input changes
//   const handleUserInput = (e) => {
//     const { name, value } = e.target;
//     setLoginRequest((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Function to handle login action
//   const loginAction = (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     // Store the username, password, and role in local storage
//     const { role, emailId, password } = loginRequest;
//     localStorage.setItem('userRole', role);
//     localStorage.setItem('userEmailId', emailId);
//     localStorage.setItem('userPassword', password); // Be cautious with storing passwords

//     // Display a success message in the console
//     console.log("Login successful!"); 
//   };

//   return (
//     <div className='logincontainer'>
//     <div className="mt-2 d-flex align-items-center justify-content-center">
//       <div className="card form-card border-color custom-bg">
//         <div className="card-header text-center">
//           <h4 className="card-title">User Login</h4>
//         </div>
//         <div className="card-body">
//           <form onSubmit={loginAction}>
//             <div className="mb-3 text-color">
//               <label htmlFor="role" className="form-label">
//                 <b>User Role    </b>
//               </label>
//               <select
//                 onChange={handleUserInput}
//                 className="form-control"
//                 name="role"
//                 value={loginRequest.role}
//               >
//                 <option value="0">Select Role</option>
//                 <option value="ADMIN">Admin</option>
//                 <option value="PASSENGER">Passenger</option>
//               </select>
//             </div>

//             <div className="mb-3 text-color">
//               <label htmlFor="emailId" className="form-label">
//                 <b>Email Id    </b>
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="emailId"
//                 name="emailId"
//                 onChange={handleUserInput}
//                 value={loginRequest.emailId}
//               />
//             </div>
//             <div className="mb-3 text-color">
//               <label htmlFor="password" className="form-label">
//                 <b>Password     </b>
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 onChange={handleUserInput}
//                 value={loginRequest.password}
//                 autoComplete="on"
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default UserLoginForm;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserLoginForm.css';

// Service function for user registration
const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/register', userData);
    console.log('User registered:', response.data);
    return response.data; // return the response data for further handling
  } catch (error) {
    console.error('Error registering user:', error.response.data);
    throw error; // rethrow the error to handle it in the component
  }
};

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [registerError, setRegisterError] = useState(''); // State for registration errors

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', loginData);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(registerData);
      setRegisterData({ name: '', email: '', password: '' }); // Clear the form on successful registration
      navigate('/login'); // Navigate to login or any other page as needed
    } catch (err) {
      setRegisterError('Failed to register. Please try again.'); // Display registration error
    }
  };

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    const addActiveClass = () => container.classList.add("active");
    const removeActiveClass = () => container.classList.remove("active");

    registerBtn.addEventListener('click', addActiveClass);
    loginBtn.addEventListener('click', removeActiveClass);

    return () => {
      registerBtn.removeEventListener('click', addActiveClass);
      loginBtn.removeEventListener('click', removeActiveClass);
    };
  }, []);

  return (
    <div className='loginbody'>
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              name="name" 
              value={registerData.name} 
              onChange={handleRegisterChange} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={registerData.email} 
              onChange={handleRegisterChange} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={registerData.password} 
              onChange={handleRegisterChange} 
            />
            <button type="submit">Sign Up</button>
            {registerError && <p className="error">{registerError}</p>} {/* Display registration error */}
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              onChange={handleChange} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              onChange={handleChange} 
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Log In</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login">Log In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
