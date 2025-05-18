import React from 'react';
import './SignIn.css'; 
import Navbar from "../Header/NormalHeader"

const SignInadmin= () => {
    return (
        <div>   <Navbar />
        <div className="sign-in-container">
            <h1>Sign Up Admin</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
        </div>
    );
};

export default SignInadmin;
