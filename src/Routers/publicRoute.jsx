import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from '../services/auth/login';

const PublicRoute = ({ children }) => !isAuthenticated()? children: <Navigate to='/dashboard' />;

export default PublicRoute;