import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tier from './pages/tier';
import Register from './pages/register';
import Login from './pages/login'
import CreateList from './pages/createlist'
import ProtectedRoute from './pages/protectedRoute';


const App = () => {

  return (
    <div className='app'>
    <BrowserRouter >
      <header>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/create">Create List</Link>
          <Link to="/tier">Tiers</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/tier" element={<Tier/>}/>
          <Route path="/create" element={<CreateList/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/> 
      </Routes>
    </BrowserRouter> 
    </div>
  );
};

export default App
