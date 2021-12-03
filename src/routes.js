import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import PublicRoute from './Routers/publicRoute';

const systemRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route 
        path='/' 
        element = { 
          <PublicRoute>
            <Home /> 
          </PublicRoute> 
        } 
        exact 
      />
      <Route 
        path='/home' 
        element = { 
          <PublicRoute>
            <Home/>
          </PublicRoute>
        } 
      /> 
    </Routes>
  </BrowserRouter>
);

export default systemRoutes;