import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tier from './pages/tier';
import Register from './pages/register';


const App = () => {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/tier">Tiers</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/tier" element={<Tier/>}/>
        <Route path="/register" element={<Register/>}/> 
      </Routes>
    </BrowserRouter> 
  );
};

export default App
