import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token');  
    const role = localStorage.getItem('role');    

    if (!token) {
        return <Navigate to="/user/login" />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" />; 
    }

    return children; 
};

export default ProtectedRoute;