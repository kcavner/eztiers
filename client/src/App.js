import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tier from './pages/tier';
import Register from './pages/register';
import Login from './pages/login'
import ProtectedRoute from './pages/protectedRoute';

const App = () => {
  

  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/tier">Tiers</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/tier" element={<Tier/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/> 
      </Routes>
    </BrowserRouter> 
  );
};

export default App
