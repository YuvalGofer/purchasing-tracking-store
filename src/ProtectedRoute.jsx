import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute
