/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthProvider } from '../contexts/AuthContext/AuthContext';

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthProvider);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
