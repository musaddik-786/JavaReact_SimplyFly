import React from 'react';
import './SignIn.css'; 
import Navbar from "../Header/NormalHeader"

const SignIn = () => {
    return (
        <>
        <Navbar/>
        <div className="sign-in-container">
            <h1>Sign Up Flight Owner</h1>
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
        </>
    );
};

export default SignIn;
